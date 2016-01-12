/**
 * Created by nyamogera on 2016/01/07.
 */


class TextStamp extends Stamp{
  public text:createjs.Text;
  private shape:createjs.Shape;
  constructor() {
    super();

    this.text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
    this.shape = new createjs.Shape();

    var color = createjs.Graphics.getRGB(1,1,1, 0.01);
    this.shape.graphics.beginFill(color).drawRect(0,0,this.text.getMeasuredWidth(),this.text.getMeasuredHeight());

    this.resize();

    this.addChild(this.shape);
    this.addChild(this.text);
  }

  resize = () => {


    this.text.x = -this.text.getMeasuredWidth() / 2;
    this.text.y = -this.text.getMeasuredHeight() / 2;

    this.shape.x = -this.text.getMeasuredWidth() / 2;
    this.shape.y = -this.text.getMeasuredHeight() / 2;

    this.size.x = this.text.getMeasuredWidth();
    this.size.y = this.text.getMeasuredHeight();

  }

  updateGraphics () {

  }

  setMatrix(matrix:createjs.Matrix2D) {
    matrix.decompose(this);
  }
}


class TextStampLayer extends StampLayer{
  public textStamp:TextStamp;

  constructor(stage:createjs.Stage) {
    super(stage, new TextStamp());
    this.textStamp = <TextStamp> this.stamp;

    this.toolId = tool.TOOL_TEXT;
  }

  start = () =>{
    var mousePt = this.textStamp.globalToLocal(this.stage.mouseX,this.stage.mouseY);
    this.textStamp.x = mousePt.x;
    this.textStamp.y = mousePt.y;
    this.isStart  = true;

    this.stage.addEventListener("pressup", this.handlePressUp);

    this.textStamp.text.addEventListener("mousedown",this.pressDown );

  }

  updateTransformation(shapeSupport:ShapeSupport) {

    this.textStamp.x = shapeSupport.container.x;
    this.textStamp.y = shapeSupport.container.y;

    this.textStamp.rotation = shapeSupport.rotation;
    this.textStamp.text.rotation = shapeSupport.rotation * createjs.Matrix2D.DEG_TO_RAD;
  }

  updateSetting(setting:ShapeSetting) {
    var textSetting:TextSetting = <TextSetting>setting;

    this.stamp.setting.lineColor = setting.lineColor;
    this.textStamp.text.color = setting.lineColor;

    this.textStamp.text.text = textSetting.text;

    this.textStamp.resize();
  }
}