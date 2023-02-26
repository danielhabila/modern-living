import mongoose from "mongoose";

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to mongodb successfully"))
    .catch((err) => console.log("Mongodb connection failed", err));
};

export default connectDB;
