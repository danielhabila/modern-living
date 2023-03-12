import express from "express";
import postToDB from "../mongodb/models/post.js";

const router = express.Router();

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

// Get a product by ID
router.get("/:id", async (req, res) => {
  try {
    const singleProduct = await postToDB.findById(req.params.id);
    if (!singleProduct) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send({ success: true, data: singleProduct });
  } catch (error) {
    res.status(500).send({
      error,
      success: false,
      message: "Fetching product failed, please try again",
    });
  }
});

export default router;
