const dotenv = require("dotenv");
const mongoose = require('mongoose');
const connectDB = require("./server/config/db");

const app = require("./server/app");



dotenv.config();



connectDB();



const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});