import { useState } from "react";
import { uploadImage } from "../services/stylist";
import toast from "react-hot-toast";

export const useUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState(null);

  const upload = async (file) => {
    try {
      setUploading(true);
      const res = await uploadImage(file);
      setUrl(res.data?.url || URL.createObjectURL(file));
      toast.success("Image uploaded");
      return res.data;
    } finally {
      setUploading(false);
    }
  };

  return { upload, uploading, url, setUrl };
};
