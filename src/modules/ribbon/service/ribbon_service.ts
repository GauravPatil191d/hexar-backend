import crypto from "crypto";

import RibbonEntity
  from "../models/ribbon_model.js";

import RibbonRepository
  from "../repository/ribbon_repository.js";

export default class RibbonService {
  static async CreateRibbonService(
    ribbon_text: string,
  ) {
    if (!ribbon_text) {
      throw new Error(
        "Ribbon text is required",
      );
    }

    const newRibbon =
      new RibbonEntity({
        ribbon_generated_id:
          crypto.randomUUID(),

        ribbon_text,
      });

    await RibbonRepository.CreateRibbon(
      newRibbon,
    );

    return newRibbon;
  }

  static async GetRibbonService() {
    const ribbon =
      await RibbonRepository.GetRibbon();

    if (!ribbon) {
      throw new Error("Ribbon not found");
    }

    return ribbon;
  }

  static async UpdateRibbonService(
    ribbon_generated_id: string,
    ribbon_text: string,
  ) {
    if (!ribbon_text) {
      throw new Error(
        "Ribbon text is required",
      );
    }

    const result =
      await RibbonRepository.UpdateRibbon(
        ribbon_generated_id,
        ribbon_text,
      );

    if (result.matchedCount === 0) {
      throw new Error("Ribbon not found");
    }

    return result;
  }
}