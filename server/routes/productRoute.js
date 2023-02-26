import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import postToDB from "../mongodb/models/post.js";
dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Create a post
router.post("/", async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    if (image) {
      const photoUrl = await cloudinary.uploader.upload(image, {
        upload_preset: "modernLiving",
      });

      const newPost = await postToDB.create({
        name,
        price,
        description,
        image: photoUrl.url,
      });
      res.status(201).send(newPost);
    }
  } catch (error) {
    res.status(500).send({
      error,
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
});

//Get all posts
router.get("/", async (req, res) => {
  try {
    const products = await postToDB.find({});

    res.status(200).send({ success: true, data: products });
  } catch (error) {
    res.status(500).send({
      error,
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
});

export default router;
