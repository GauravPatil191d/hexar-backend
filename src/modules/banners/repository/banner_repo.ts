import { getClient } from "../../../config/db.js";

import BannerEntity from "../models/banner_model.js";

export default class BannerRepository {
  static async CreateBanner(
    bannerData: BannerEntity,
  ) {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-banners")
      .insertOne(bannerData);
  }

  static async GetAllBanners() {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-banners")
      .find({})
      .toArray();
  }

  static async GetBannerById(
    banner_generated_id: string,
  ) {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-banners")
      .findOne({
        banner_generated_id,
      });
  }

  static async UpdateBanner(
    banner_generated_id: string,
    bannerData: Partial<BannerEntity>,
  ) {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-banners")
      .updateOne(
        {
          banner_generated_id,
        },
        {
          $set: bannerData,
        },
      );
  }

  static async DeleteBanner(
    banner_generated_id: string,
  ) {
    const client = await getClient();

    return client
      .db("master")
      .collection("hexar-banners")
      .deleteOne({
        banner_generated_id,
      });
  }
}