import EventDispatcher = createjs.EventDispatcher;
/**
 * Created by nyamogera on 2016/01/06.
 */

class Stamp extends createjs.Container{
  newMatrix:createjs.Matrix2D;
  setting:ShapeSetting;
  size:createjs.Point;
  rotation:number;

  constructor() {
    super();

    this.newMatrix = new createjs.Matrix2D();
    this.setting = new ShapeSetting();
    this.size = new createjs.Point();
    this.rotation = 0;

  }

  updateGraphics() {

  }

  setMatrix(matrix:createjs.Matrix2D) {

  }
}

class StampLayer extends createjs.EventDispatcher implements ILayer{

  toolId:string;
  stage:createjs.Stage;
  stamp:Stamp;
  setting:ShapeSetting;
  isStart:boolean;

  constructor(stage:createjs.Stage,stamp:Stamp) {

    super();

    createjs.EventDispatcher.initialize(StampLayer.prototype);

    this.stage = stage;
    this.stamp = stamp;

    this.stamp.addEventListener("mousedown",this.pressDown );

    this.toolId = tool.TOOL_STAMP;
  }

  pressDown = () => {
    this.dispatchEvent("show_support");
  }

  updateTransformation(shapeSupport:ShapeSupport) {

    this.stamp.size.x = shapeSupport.size.x;
    this.stamp.size.y = shapeSupport.size.y;
    this.stamp.rotation = shapeSupport.rotation ;

    this.stamp.newMatrix.identity();
    this.stamp.newMatrix.rotate(shapeSupport.rotation * createjs.Matrix2D.DEG_TO_RAD);
    this.stamp.newMatrix.scale(shapeSupport.size.x / 100, shapeSupport.size.y / 100);
    this.stamp.x = shapeSupport.container.x;
    this.stamp.y = shapeSupport.container.y;

    this.stamp.setMatrix(this.stamp.newMatrix);

    this.stamp.updateGraphics();

  }

  isExit() : boolean{
    return !this.isStart;
  }

  start = () =>{
    var mousePt = this.stamp.parent.globalToLocal(this.stage.mouseX,this.stage.mouseY);
    this.stamp.x = mousePt.x;
    this.stamp.y = mousePt.y;
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

  updateSetting(setting:ShapeSetting) {
    this.stamp.setting.baseColor = setting.baseColor;
    this.stamp.setting.lineColor = setting.lineColor;
  }
}