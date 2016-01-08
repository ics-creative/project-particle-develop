import EventDispatcher = createjs.EventDispatcher;
/**
 * Created by nyamogera on 2016/01/06.
 */

class Stamp {
  newMatrix:createjs.Matrix2D;
  centerX:number;
  centerY:number;
  shape:createjs.Shape;
  setting:ShapeSetting;
  size:createjs.Point;

  constructor() {
    this.setting = new ShapeSetting();
    this.size = new createjs.Point();
  }

  draw = () => {

  }
  setMatrix(matrix:createjs.Matrix2D) {

  }
}

class StampLayer extends createjs.EventDispatcher implements ILayer{

  mousedown:boolean;
  stage:createjs.Stage;
  stamp:Stamp;
  setting:ShapeSetting;
  isStart:boolean;

  isPress:boolean;
  dragPointX:number;
  dragPointY:number;

  constructor(stage:createjs.Stage,stamp:Stamp) {

    super();

    createjs.EventDispatcher.initialize(StampLayer.prototype);

    this.stage = stage;
    this.stamp = stamp;

    this.stamp.shape.addEventListener("mousedown",this.pressDown );

  }

  pressDown = () => {
    this.dispatchEvent("show_support");
  }

  updateTransformation(shapeSupport:ShapeSupport) {
    this.stamp.newMatrix.identity();
    this.stamp.newMatrix.rotate(shapeSupport.rotation);
    this.stamp.newMatrix.scale(shapeSupport.size.x / 200, shapeSupport.size.y / 200);
    this.stamp.shape.x = shapeSupport.container.x;
    this.stamp.shape.y = shapeSupport.container.y;

    this.stamp.setMatrix(this.stamp.newMatrix);

    this.stamp.draw();
  }

  isExit() : boolean{
    return !this.isStart;
  }

  start = () =>{
    this.isStart  = true;

    this.stage.addEventListener("pressup", this.handlePressUp);

    this.handleMouseDown();
  }

  handlePressUp = () =>{
    //  一旦離したら作業おしまい。
    this.isStart = false;

    this.stage.removeEventListener("pressup", this.handlePressUp);
  }

  handleMouseDown = () => {

    if (this.mousedown) {
      return;
    }
    this.mousedown = true;
    this.stamp.shape.x = this.stage.mouseX;
    this.stamp.shape.y = this.stage.mouseY;
    this.stamp.draw();
  }

  update = () =>{
    var diffX = Math.abs( this.stamp.shape.x - this.stage.mouseX );
    var diffY = Math.abs( this.stamp.shape.y - this.stage.mouseY ) ;


    var scale = Math.max(diffX,diffY) / 100;


    this.stamp.size.x = scale * 100;
    this.stamp.size.y = scale * 100;


    this.stamp.newMatrix = new createjs.Matrix2D;
    this.stamp.newMatrix.scale(scale,scale);

    this.stamp.setMatrix(this.stamp.newMatrix);

    this.stamp.draw();
    console.log(scale);
  }

  handleMouseUp = () => {
    this.mousedown = false;
  }

  updateSetting(setting:ShapeSetting) {
    this.stamp.setting.baseColor = setting.baseColor;
    this.stamp.setting.lineColor = setting.lineColor;
  }
}