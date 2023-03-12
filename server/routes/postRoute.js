import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import postToDB from "../mongodb/models/post.js";
import lightingModel from "../mongodb/models/lightingModel.js";
import artModel from "../mongodb/models/artModel.js";
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

    let imageUrls = [];
    if (image) {
      if (Array.isArray(image)) {
        for (let i = 0; i < image.length; i++) {
          const photoUrl = await cloudinary.uploader.upload(image[i], {
            upload_preset: "modernLiving",
          });
          imageUrls.push(photoUrl.url);
        }
      } else {
        const photoUrl = await cloudinary.uploader.upload(image, {
          upload_preset: "modernLiving",
        });
        imageUrls.push(photoUrl.url);
      }
    }

    const newPost = await lightingModel.create({
      name,
      price,
      description,
      image: imageUrls,
    });
    res.status(201).send(newPost);
  } catch (error) {
    res.status(500).send({
      error,
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
});

export default router;
