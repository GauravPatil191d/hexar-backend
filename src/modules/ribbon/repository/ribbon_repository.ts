import { getClient }
  from "../../../config/db.js";

import RibbonEntity
  from "../models/ribbon_model.js";

export default class RibbonRepository {
  static async CreateRibbon(
    ribbonData: RibbonEntity,
  ) {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-ribbons")
      .insertOne(ribbonData);
  }

  static async GetRibbon() {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-ribbons")
      .findOne({});
  }

  static async UpdateRibbon(
    ribbon_generated_id: string,
    ribbon_text: string,
  ) {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-ribbons")
      .updateOne(
        {
          ribbon_generated_id,
        },
        {
          $set: {
            ribbon_text,
          },
        },
      );
  }
}