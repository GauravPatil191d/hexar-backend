import { Request, Response }
  from "express";

import RibbonService
  from "../service/ribbon_service.js";

export default class RibbonController {
  static async CreateRibbonController(
    req: Request,
    res: Response,
  ) {
    try {
      const {
        ribbon_text,
      } = req.body;

      const result =
        await RibbonService.CreateRibbonService(
          ribbon_text,
        );

      return res.status(201).json({
        success: true,
        message:
          "Ribbon created successfully",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to create ribbon",
      });
    }
  }

  static async GetRibbonController(
    req: Request,
    res: Response,
  ) {
    try {
      const result =
        await RibbonService.GetRibbonService();

      return res.status(200).json({
        success: true,
        message:
          "Ribbon fetched successfully",
        data: result,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Ribbon not found",
      });
    }
  }

  static async UpdateRibbonController(
    req: Request,
    res: Response,
  ) {
    try {
      const ribbon_generated_id =
        String(
          req.params.ribbon_generated_id,
        );

      const {
        ribbon_text,
      } = req.body;

      const result =
        await RibbonService.UpdateRibbonService(
          ribbon_generated_id,
          ribbon_text,
        );

      return res.status(200).json({
        success: true,
        message:
          "Ribbon updated successfully",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to update ribbon",
      });
    }
  }
}