import mongoose from "mongoose";

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to mongodb successfully"))
    .catch((err) => console.error("Error connecting to MongoDB", err));
};

export default connectDB;
