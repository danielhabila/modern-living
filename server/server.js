import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connectDB.js";
import productRoute from "./routes/productRoute.js";

connectDB(); //connects to mongodb

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "25mb" }));

app.use("/api/addProduct", productRoute);

// app.get("/", "Welcome!");

// app.get("/fetchImages", (req, res) => {
//   res.send(products);
// });

app.listen(4000, () => {
  console.log("Server is listening on port 4000.");
});
