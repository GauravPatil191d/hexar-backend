import "dotenv/config";

import express from "express";
import cors from "cors";

import { connectDb } from "./config/db.js";

// Router
import AuthRouter from "./modules/login/router/auth_router.js";
import UploadRouter from "./service/upload-service/router/upload_router.js";
import BannerRouter from "./modules/banners/router/banner_router.js";
import RibbonRouter from "./modules/ribbon/router/ribbon_router.js";
import AboutRouter from "./modules/about/router/about_router.js";
import MissionVisionRouter from "./modules/mission-vission/router/mission_vision_router.js";

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(
  cors({
    origin: [
      "https://hexar-cms.vercel.app",
      "https://hexar-frontend-five.vercel.app",
    ],
  }),
);

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Hexar CMS server is running",
  });
});

// Routes
app.use("/auth", AuthRouter);
app.use("/upload", UploadRouter);
app.use("/banners", BannerRouter);
app.use("/ribbon", RibbonRouter);
app.use("/about", AboutRouter);
app.use("/mission-vision", MissionVisionRouter);

async function startServer() {
  try {
    await connectDb();

    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`,
      );
    });
  } catch (error) {
    console.error(
      "Unable to start server:",
      error,
    );

    process.exit(1);
  }
}

startServer();