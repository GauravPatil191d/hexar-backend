import { Router } from "express";

import MissionVisionController
  from "../controller/mission_vision_controller.js";

const MissionVisionRouter = Router();

MissionVisionRouter.post(
  "/create-mission-vision",

  MissionVisionController
    .CreateMissionVisionController,
);

MissionVisionRouter.get(
  "/get-mission-vision",

  MissionVisionController
    .GetMissionVisionController,
);

MissionVisionRouter.put(
  "/update-mission-vision/:mission_vision_generated_id",

  MissionVisionController
    .UpdateMissionVisionController,
);

export default MissionVisionRouter;