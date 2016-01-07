/** 通常の描画 */
class DrawingSetting{
  constructor() {

  }
  public lineColor:string = "#000";
}


class ShapeSetting extends DrawingSetting{
  constructor() {
    super();
  }
  public baseColor:string = "#000";
}


class TextSetting extends ShapeSetting{
  constructor() {
    super();
  }
  public text:string = "文字列";
}