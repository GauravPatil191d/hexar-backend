import { Request, Response }
  from "express";

import MissionVisionService
  from "../service/mission_vision_service.js";

export default class MissionVisionController {
  static async CreateMissionVisionController(
    req: Request,
    res: Response,
  ) {
    try {
      const {
        background_video,

        mission_title,
        mission_description,

        vision_title,
        vision_description,
      } = req.body;

      const result =
        await MissionVisionService
          .CreateMissionVisionService(
            background_video,

            mission_title,
            mission_description,

            vision_title,
            vision_description,
          );

      return res.status(201).json({
        success: true,
        message:
          "Mission Vision created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to create Mission Vision",
      });
    }
  }

  static async GetMissionVisionController(
    req: Request,
    res: Response,
  ) {
    try {
      const result =
        await MissionVisionService
          .GetMissionVisionService();

      return res.status(200).json({
        success: true,
        message:
          "Mission Vision fetched successfully",
        data: result,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Mission Vision not found",
      });
    }
  }

  static async UpdateMissionVisionController(
    req: Request,
    res: Response,
  ) {
    try {
      const {
        mission_vision_generated_id,
      } = req.params;

      const {
        background_video,

        mission_title,
        mission_description,

        vision_title,
        vision_description,
      } = req.body;

      const result =
        await MissionVisionService
          .UpdateMissionVisionService(
            mission_vision_generated_id as string,

            background_video,

            mission_title,
            mission_description,

            vision_title,
            vision_description,
          );

      return res.status(200).json({
        success: true,
        message:
          "Mission Vision updated successfully",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to update Mission Vision",
      });
    }
  }
}