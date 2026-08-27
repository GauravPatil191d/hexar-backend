import { Router } from "express";

import AboutController
  from "../controller/about_controller.js";

const AboutRouter = Router();

AboutRouter.post(
  "/create-about",
  AboutController.CreateAboutController,
);

AboutRouter.get(
  "/get-about",
  AboutController.GetAboutController,
);

AboutRouter.put(
  "/update-about/:about_generated_id",
  AboutController.UpdateAboutController,
);

export default AboutRouter;