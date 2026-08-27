import { getClient }
  from "../../../config/db.js";

import AboutEntity
  from "../models/about_model.js";

export default class AboutRepository {
  static async CreateAbout(
    aboutData: AboutEntity,
  ) {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-about")
      .insertOne(aboutData);
  }

  static async GetAbout() {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-about")
      .findOne({});
  }

  static async UpdateAbout(
    about_generated_id: string,
    aboutData: {
      about_title: string;
      about_image: string;
      about_description: string;
    },
  ) {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-about")
      .updateOne(
        {
          about_generated_id,
        },
        {
          $set: aboutData,
        },
      );
  }
}