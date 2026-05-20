const bcrypt = require("bcryptjs");

const User = require("../models/user");

const generateOTP = require("../utils/generateOTP");

const generateToken = require("../utils/generateToken");

const transporter = require("../config/mailer");




exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // CHECK IF USER EXISTS
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // GENERATE OTP
    const otp = generateOTP();

    // CREATE USER
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      otp,
      isVerified: false,
    });

    // SEND OTP EMAIL
    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: email,

      subject: "StylePilot AI Verification OTP",

      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>Welcome to StylePilot AI</h2>

          <p>Your verification OTP is:</p>

          <h1 style="letter-spacing: 5px;">
            ${otp}
          </h1>

          <p>
            This OTP will expire soon.
          </p>
        </div>
      `,
    });

    // ALSO SHOW OTP IN TERMINAL
    console.log("OTP:", otp);

    // RESPONSE
    res.status(201).json({
      success: true,

      message: "OTP sent to your email",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};


// ================= VERIFY OTP =================

exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // FIND USER
    const user = await User.findOne({
      email,
    });

    // USER NOT FOUND
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // INVALID OTP
    if (user.otp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // VERIFY USER
    user.isVerified = true;

    // REMOVE OTP
    user.otp = null;

    await user.save();

    res.status(200).json({
      success: true,

      message: "Email verified successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};


// ================= LOGIN =================

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // FIND USER
    const user = await User.findOne({
      email,
    });

    // USER NOT FOUND
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // CHECK EMAIL VERIFIED
    if (!user.isVerified) {
      return res.status(400).json({
        message: "Please verify your email first",
      });
    }

    // GENERATE JWT TOKEN
    const token = generateToken(user._id);

    // RESPONSE
    res.status(200).json({
      success: true,

      token,

      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};