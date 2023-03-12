import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connectDB.js";
import postRoute from "./routes/postRoute.js";
import lightingModel from "./routes/lightingRoute.js";
import furnitureRoute from "./routes/furnitureRoute.js";
import artRoute from "./routes/artRoute.js";

connectDB(); //connects to mongodb

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "25mb" }));

app.use("/api/fetchFurniture", furnitureRoute);
app.use("/api/fetchLighting", lightingModel);
app.use("/api/postImages", postRoute);
app.use("/api/fetchArt", artRoute);

// app.get("/", "Welcome!");

app.listen(4000, () => {
  console.log("Server is listening on port 4000.");
});
