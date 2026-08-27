import crypto from "crypto";

import AboutEntity
  from "../models/about_model.js";

import AboutRepository
  from "../repository/about_repository.js";

export default class AboutService {
  static async CreateAboutService(
    about_title: string,
    about_image: string,
    about_description: string,
  ) {
    if (
      !about_title ||
      !about_image ||
      !about_description
    ) {
      throw new Error(
        "All About fields are required",
      );
    }

    const newAbout =
      new AboutEntity({
        about_generated_id:
          crypto.randomUUID(),

        about_title,

        about_image,

        about_description,
      });

    await AboutRepository.CreateAbout(
      newAbout,
    );

    return newAbout;
  }

  static async GetAboutService() {
    const about =
      await AboutRepository.GetAbout();

    if (!about) {
      throw new Error("About section not found");
    }

    return about;
  }

  static async UpdateAboutService(
    about_generated_id: string,
    about_title: string,
    about_image: string,
    about_description: string,
  ) {
    if (
      !about_title ||
      !about_image ||
      !about_description
    ) {
      throw new Error(
        "All About fields are required",
      );
    }

    const result =
      await AboutRepository.UpdateAbout(
        about_generated_id,
        {
          about_title,
          about_image,
          about_description,
        },
      );

    if (result.matchedCount === 0) {
      throw new Error("About section not found");
    }

    return result;
  }
}