export interface BannerInterface {
  banner_generated_id: string;
  banner_title: string;
  banner_small_tag: string;
  banner_video: string;
  banner_image: string;
}

export default class BannerEntity
  implements BannerInterface {
  banner_generated_id: string;
  banner_title: string;
  banner_small_tag: string;
  banner_video: string;
  banner_image: string;

  constructor(
   _prop:BannerInterface
  ) {
    this.banner_generated_id =
      _prop.banner_generated_id;

    this.banner_title = _prop.banner_title;

    this.banner_small_tag =
      _prop.banner_small_tag;

    this.banner_video = _prop.banner_video;

    this.banner_image = _prop.banner_image;
  }
}