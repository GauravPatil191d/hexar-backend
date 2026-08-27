import { Router } from "express";

import BannerController
  from "../controller/banner_controller.js";

const BannerRouter = Router();

BannerRouter.post(
  "/upload-banner",
  BannerController.CreateBannerController,
);

BannerRouter.get(
  "/get-all-banners",
  BannerController.GetAllBannersController,
);

BannerRouter.get(
  "/get-banner-by-id:banner_generated_id",
  BannerController.GetBannerByIdController,
);

BannerRouter.put(
  "/update-banner:banner_generated_id",
  BannerController.UpdateBannerController,
);

BannerRouter.delete(
  "/delete-banner:banner_generated_id",
  BannerController.DeleteBannerController,
);

export default BannerRouter;