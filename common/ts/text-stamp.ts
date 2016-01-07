/**
 * Created by nyamogera on 2016/01/07.
 */


class TextStamp extends Stamp{
  constructor() {
    super();


  }
}


class TextStampLayer extends StampLayer{
  constructor(stage:createjs.Stage,stamp:Stamp) {
    super(stage,stamp);
  }


  updateSetting(setting:ShapeSetting) {
    this.stamp.setting.baseColor = setting.baseColor;
    this.stamp.setting.lineColor = setting.lineColor;
  }
}