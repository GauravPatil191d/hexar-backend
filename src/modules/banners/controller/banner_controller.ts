import { Request, Response } from "express";

import BannerService
  from "../service/banner_service.js";

export default class BannerController {
  static async CreateBannerController(
    req: Request,
    res: Response,
  ) {
    try {
      const {
        banner_title,
        banner_small_tag,
        banner_video,
        banner_image,
      } = req.body;

      const result =
        await BannerService.CreateBannerService(
          banner_title,
          banner_small_tag,
          banner_video,
          banner_image,
        );

      return res.status(201).json({
        success: true,
        message:
          "Banner created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to create banner",
      });
    }
  }

  static async GetAllBannersController(
    req: Request,
    res: Response,
  ) {
    try {
      const result =
        await BannerService.GetAllBannersService();

      return res.status(200).json({
        success: true,
        message:
          "Banners fetched successfully",
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to fetch banners",
      });
    }
  }

  static async GetBannerByIdController(
    req: Request,
    res: Response,
  ) {
    try {
      const { banner_generated_id } =
        req.params;

      const result =
        await BannerService.GetBannerByIdService(
          String(banner_generated_id),
        );

      return res.status(200).json({
        success: true,
        message:
          "Banner fetched successfully",
        data: result,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Banner not found",
      });
    }
  }

  static async UpdateBannerController(
    req: Request,
    res: Response,
  ) {
    try {
      const { banner_generated_id } =
        req.params;

      const {
        banner_title,
        banner_small_tag,
        banner_video,
        banner_image,
      } = req.body;

      const bannerData = {
        banner_title,
        banner_small_tag,
        banner_video,
        banner_image,
      };

      const result =
        await BannerService.UpdateBannerService(
          String(banner_generated_id),
          bannerData,
        );

      return res.status(200).json({
        success: true,
        message:
          "Banner updated successfully",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to update banner",
      });
    }
  }

  static async DeleteBannerController(
    req: Request,
    res: Response,
  ) {
    try {
      const { banner_generated_id } =
        req.params;

      await BannerService.DeleteBannerService(
        String(banner_generated_id),
      );

      return res.status(200).json({
        success: true,
        message:
          "Banner deleted successfully",
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to delete banner",
      });
    }
  }
}