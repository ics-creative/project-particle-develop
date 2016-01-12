/**
 * Created by nyamogera on 2016/01/07.
 */


class TextStamp extends Stamp{
  public text:createjs.Text;
  constructor() {
    super();

    this.text = new createjs.Text("Hello World", "20px Arial", "#ff7700");

    this.addChild(this.text);
  }

  updateGraphics () {

  }

  setMatrix(matrix:createjs.Matrix2D) {
    matrix.decompose(this.text);
  }
}


class TextStampLayer extends StampLayer{
  public textStamp:TextStamp;

  constructor(stage:createjs.Stage) {
    super(stage, new TextStamp());
    this.textStamp = <TextStamp> this.stamp;
  }

  start = () =>{
    this.textStamp.text.x = this.stage.mouseX;
    this.textStamp.text.y = this.stage.mouseY;
    this.isStart  = true;

    this.stage.addEventListener("pressup", this.handlePressUp);

    this.textStamp.text.addEventListener("mousedown",this.pressDown );

  }

  updateTransformation(shapeSupport:ShapeSupport) {

    super.updateTransformation(shapeSupport);

    this.textStamp.text.x = shapeSupport.container.x;
    this.textStamp.text.y = shapeSupport.container.y;
  }

  updateSetting(setting:ShapeSetting) {
  //var textSetting:TextSetting = <TextSetting>setting;

    this.stamp.setting.baseColor = setting.baseColor;
    this.stamp.setting.lineColor = setting.lineColor;
  }
}