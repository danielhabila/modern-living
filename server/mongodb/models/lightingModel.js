import mongoose from "mongoose";

const lightingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  image: [
    {
      type: String,
      required: true,
    },
  ],
});

const lightingModel = mongoose.model("lighting", lightingSchema);

export default lightingModel;
