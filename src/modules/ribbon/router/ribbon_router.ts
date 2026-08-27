import { Router } from "express";

import RibbonController
  from "../controller/ribbon_controller.js";

const RibbonRouter = Router();

RibbonRouter.post(
  "/create-ribbon",
  RibbonController.CreateRibbonController,
);

RibbonRouter.get(
  "/get-ribbon",
  RibbonController.GetRibbonController,
);

RibbonRouter.put(
  "/update-ribbon/:ribbon_generated_id",
  RibbonController.UpdateRibbonController,
);

export default RibbonRouter;