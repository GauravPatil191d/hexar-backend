import { getClient }
  from "../../../config/db.js";

import MissionVisionEntity
  from "../models/mission_vision_model.js";

export default class MissionVisionRepository {
  static async CreateMissionVision(
    missionVisionData:
      MissionVisionEntity,
  ) {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-mission-vision")
      .insertOne(missionVisionData);
  }

  static async GetMissionVision() {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-mission-vision")
      .findOne({});
  }

  static async UpdateMissionVision(
    mission_vision_generated_id: string,
    missionVisionData: object,
  ) {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-mission-vision")
      .updateOne(
        {
          mission_vision_generated_id,
        },
        {
          $set: missionVisionData,
        },
      );
  }
}