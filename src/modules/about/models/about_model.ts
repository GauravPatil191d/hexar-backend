export interface AboutInterface {
  about_generated_id: string;
  about_title: string;
  about_image: string;
  about_description: string;
}

export default class AboutEntity
  implements AboutInterface {
  about_generated_id: string;
  about_title: string;
  about_image: string;
  about_description: string;

  constructor(
    _prop: AboutInterface,
  ) {
    this.about_generated_id =
      _prop.about_generated_id;

    this.about_title =
      _prop.about_title;

    this.about_image =
      _prop.about_image;

    this.about_description =
      _prop.about_description;
  }
}