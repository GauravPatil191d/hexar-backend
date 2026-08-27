export interface RibbonInterface {
  ribbon_generated_id: string;
  ribbon_text: string;
}

export default class RibbonEntity
  implements RibbonInterface {
  ribbon_generated_id: string;
  ribbon_text: string;

  constructor(
    _prop: RibbonInterface,
  ) {
    this.ribbon_generated_id =
      _prop.ribbon_generated_id;

    this.ribbon_text =
      _prop.ribbon_text;
  }
}