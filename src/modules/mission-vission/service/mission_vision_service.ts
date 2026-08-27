import crypto from "crypto";

import MissionVisionEntity
  from "../models/mission_vision_model.js";

import MissionVisionRepository
  from "../repository/mission_vision_repository.js";

export default class MissionVisionService {
  static async CreateMissionVisionService(
    background_video: string,

    mission_title: string,
    mission_description: string,

    vision_title: string,
    vision_description: string,
  ) {
    const existingMissionVision =
      await MissionVisionRepository
        .GetMissionVision();

    if (existingMissionVision) {
      throw new Error(
        "Mission Vision section already exists",
      );
    }

    if (!background_video) {
      throw new Error(
        "Background video is required",
      );
    }

    if (!mission_title) {
      throw new Error(
        "Mission title is required",
      );
    }

    if (!mission_description) {
      throw new Error(
        "Mission description is required",
      );
    }

    if (!vision_title) {
      throw new Error(
        "Vision title is required",
      );
    }

    if (!vision_description) {
      throw new Error(
        "Vision description is required",
      );
    }

    const missionVisionData =
      new MissionVisionEntity({
        mission_vision_generated_id:
          crypto.randomUUID(),

        background_video,

        mission_title,
        mission_description,

        vision_title,
        vision_description,
      });

    await MissionVisionRepository
      .CreateMissionVision(
        missionVisionData,
      );

    return missionVisionData;
  }

  static async GetMissionVisionService() {
    const missionVision =
      await MissionVisionRepository
        .GetMissionVision();

    if (!missionVision) {
      throw new Error(
        "Mission Vision section not found",
      );
    }

    return missionVision;
  }

  static async UpdateMissionVisionService(
    mission_vision_generated_id: string,

    background_video: string,

    mission_title: string,
    mission_description: string,

    vision_title: string,
    vision_description: string,
  ) {
    const missionVisionData = {
      background_video,

      mission_title,
      mission_description,

      vision_title,
      vision_description,
    };

    const result =
      await MissionVisionRepository
        .UpdateMissionVision(
          mission_vision_generated_id,
          missionVisionData,
        );

    if (result.matchedCount === 0) {
      throw new Error(
        "Mission Vision section not found",
      );
    }

    return missionVisionData;
  }
}