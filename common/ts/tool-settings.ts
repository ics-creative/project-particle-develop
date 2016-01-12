/** 通常の描画 */
class DrawingSetting{
  constructor() {

  }
  public lineColor:string = "#000";
  public lineWidth:number = 3;
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

  public textSize:number = 20;
  public text:string = "文字列";
}