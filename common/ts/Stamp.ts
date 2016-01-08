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
  rotation:number;

  constructor() {
    this.setting = new ShapeSetting();
    this.size = new createjs.Point();
    this.rotation = 0;
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
    //console.log(shapeSupport);
    //console.log("updateTransformation:" + shapeSupport.size.x );
    this.stamp.size.x = shapeSupport.size.x / 2;
    this.stamp.size.y = shapeSupport.size.y / 2;
    this.stamp.rotation = shapeSupport.rotation;

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
    this.stamp.shape.x = this.stage.mouseX;
    this.stamp.shape.y = this.stage.mouseY;
    this.isStart  = true;


    this.stage.addEventListener("pressup", this.handlePressUp);

  }

  handlePressUp = () =>{
    //  一旦離したら作業おしまい。
    this.isStart = false;

    this.stage.removeEventListener("pressup", this.handlePressUp);
  }

  update = () =>{
  }

  handleMouseUp = () => {
  }

  updateSetting(setting:ShapeSetting) {
    this.stamp.setting.baseColor = setting.baseColor;
    this.stamp.setting.lineColor = setting.lineColor;
  }
}