export interface MissionVisionInterface {
  mission_vision_generated_id: string;

  background_video: string;

  mission_title: string;
  mission_description: string;

  vision_title: string;
  vision_description: string;
}

export default class MissionVisionEntity
  implements MissionVisionInterface {
  mission_vision_generated_id: string;

  background_video: string;

  mission_title: string;
  mission_description: string;

  vision_title: string;
  vision_description: string;

  constructor(
    _prop: MissionVisionInterface,
  ) {
    this.mission_vision_generated_id =
      _prop.mission_vision_generated_id;

    this.background_video =
      _prop.background_video;

    this.mission_title =
      _prop.mission_title;

    this.mission_description =
      _prop.mission_description;

    this.vision_title =
      _prop.vision_title;

    this.vision_description =
      _prop.vision_description;
  }
}