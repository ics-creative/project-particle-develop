/**
 * Created by nyamogera on 2016/01/06.
 */

class Stamp {
  newMatrix:createjs.Matrix2D;
  centerX:number;
  centerY:number;
  shape:createjs.Shape;
  setting:ShapeSetting;

  constructor() {
    this.setting = new ShapeSetting();

  }

  draw = () => {

  }
  setMatrix(matrix:createjs.Matrix2D) {

  }

}

class StampLayer implements ILayer{

  mousedown:boolean;
  stage:createjs.Stage;
  stamp:Stamp;
  setting:ShapeSetting;
  isStart:boolean;

  isPress:boolean;
  dragPointX:number;
  dragPointY:number;

  constructor(stage:createjs.Stage,stamp:Stamp) {
    this.stage = stage;
    this.stamp = stamp;

    this.stamp.shape.addEventListener("mousedown",this.pressDown );
    this.stamp.shape.addEventListener("pressup", this.pressUp);
  }

  pressDown = () => {
    console.log("mousedown..?");
    if( this.isStart ) {
      return ;
    }
    console.log("mousedown");
    this.dragPointX = this.stage.mouseX - this.stamp.shape.x;
    this.dragPointY = this.stage.mouseY - this.stamp.shape.y;
    this.isPress = true;
    this.stamp.shape.addEventListener("pressmove",this.pressMove );
  }

  pressMove = () =>{
    if( !this.isPress ) {
      return ;
    }

    this.stamp.shape.x = this.stage.mouseX - this.dragPointX;
    this.stamp.shape.y = this.stage.mouseY - this.dragPointY;
  }

  pressUp = () => {

    this.stamp.shape.removeEventListener("pressmove",this.pressMove );
    this.isPress = false;
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