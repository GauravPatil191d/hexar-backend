import { Request, Response }
  from "express";

import AboutService
  from "../service/about_service.js";

export default class AboutController {
  static async CreateAboutController(
    req: Request,
    res: Response,
  ) {
    try {
      const {
        about_title,
        about_image,
        about_description,
      } = req.body;

      const result =
        await AboutService.CreateAboutService(
          about_title,
          about_image,
          about_description,
        );

      return res.status(201).json({
        success: true,
        message:
          "About section created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to create About section",
      });
    }
  }

  static async GetAboutController(
    req: Request,
    res: Response,
  ) {
    try {
      const result =
        await AboutService.GetAboutService();

      return res.status(200).json({
        success: true,
        message:
          "About section fetched successfully",
        data: result,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "About section not found",
      });
    }
  }

  static async UpdateAboutController(
    req: Request,
    res: Response,
  ) {
    try {
      const about_generated_id =
        String(
          req.params.about_generated_id,
        );

      const {
        about_title,
        about_image,
        about_description,
      } = req.body;

      const result =
        await AboutService.UpdateAboutService(
          about_generated_id,
          about_title,
          about_image,
          about_description,
        );

      return res.status(200).json({
        success: true,
        message:
          "About section updated successfully",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to update About section",
      });
    }
  }
}