import crypto from "crypto";

import BannerEntity from "../models/banner_model.js";

import BannerRepository
  from "../repository/banner_repo.js";

export default class BannerService {
  static async CreateBannerService(
    banner_title: string,
    banner_small_tag: string,
    banner_video: string,
    banner_image: string,
  ) {
    if (!banner_title) {
      throw new Error(
        "Banner title is required",
      );
    }

    if (!banner_small_tag) {
      throw new Error(
        "Banner small tag is required",
      );
    }

    if (!banner_video) {
      throw new Error(
        "Banner video is required",
      );
    }

    if (!banner_image) {
      throw new Error(
        "Banner image is required",
      );
    }

    const bannerData = new BannerEntity({
      banner_generated_id:
        crypto.randomUUID(),

      banner_title,

      banner_small_tag,

      banner_video,

      banner_image,
    });

    await BannerRepository.CreateBanner(
      bannerData,
    );

    return bannerData;
  }

  static async GetAllBannersService() {
    return await BannerRepository.GetAllBanners();
  }

  static async GetBannerByIdService(
    banner_generated_id: string,
  ) {
    const banner =
      await BannerRepository.GetBannerById(
        banner_generated_id,
      );

    if (!banner) {
      throw new Error("Banner not found");
    }

    return banner;
  }

  static async UpdateBannerService(
    banner_generated_id: string,
    bannerData: Partial<BannerEntity>,
  ) {
    const result =
      await BannerRepository.UpdateBanner(
        banner_generated_id,
        bannerData,
      );

    if (result.matchedCount === 0) {
      throw new Error("Banner not found");
    }

    return result;
  }

  static async DeleteBannerService(
    banner_generated_id: string,
  ) {
    const result =
      await BannerRepository.DeleteBanner(
        banner_generated_id,
      );

    if (result.deletedCount === 0) {
      throw new Error("Banner not found");
    }

    return result;
  }
}