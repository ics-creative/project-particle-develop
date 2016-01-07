/**
 * Created by nyamogera on 2016/01/06.
 */
class DrawingLayer implements ILayer{

  private stage:createjs.Stage;
  private container:createjs.Container;
  private shape:createjs.Shape;

  private currentPoint:createjs.Point;
  private lastMidPoint:createjs.Point;
  private currentLineThickness:number;
  private lastPoint:createjs.Point;
  private mousedown:boolean;
  private width:number;
  private height:number;
  private setting:DrawingSetting;
  private isStart:boolean;

  constructor(stage:createjs.Stage,container:createjs.Container,width:number,height:number,color:string) {
    this.setting = new DrawingSetting();
    this.setting.lineColor = color;
    this.stage = stage;
    this.container = container;

    this.lastMidPoint  = new createjs.Point();
    this.currentLineThickness = 1;
    this.width = width;
    this.height = height;
  }

  isExit() : boolean{
    return !this.isStart;
  }

  start = () =>{
    this.isStart  = true;

    this.stage.addEventListener("pressup", this.handlePressUp);

    this.generateNewLine();
  }
  handlePressUp = () =>{
    this.stage.removeEventListener("pressup", this.handlePressUp);
    this.isStart  =false;
    this.mousedown = false;
  }

  updateSetting = (setting:DrawingSetting) =>{
    this.setting.lineColor = setting.lineColor;
  }

  generateNewLine = () =>{
    if(this.mousedown){
      return ;
    }
    this.mousedown = true;

    //
    this.lastPoint = new createjs.Point();

    this.lastPoint.x = this.stage.mouseX;
    this.lastPoint.y = this.stage.mouseY;

    //
    this.currentPoint = new createjs.Point();

    this.currentPoint.x = this.stage.mouseX;
    this.currentPoint.y = this.stage.mouseY;

    //
    this.lastMidPoint = new createjs.Point();

    this.lastMidPoint.x = this.stage.mouseX;
    this.lastMidPoint.y = this.stage.mouseY;


    this.shape = new createjs.Shape();
    this.container.addChild(this.shape);

    console.log("mouseDown");

  }

  handleMouseUp = () =>{
    this.mousedown = false;
  }

  update = () => {
    if( !this.mousedown )
      return ;

    var moveX = (this.stage.mouseX - this.currentPoint.x);
    var moveY = (this.stage.mouseY - this.currentPoint.y);
    if (moveX * moveX + moveY * moveY > 0.1) {

      this.currentPoint.x += moveX;
      this.currentPoint.y += moveY;

      var midPoint = new createjs.Point((this.lastPoint.x + this.currentPoint.x) / 2,  (this.lastPoint.y + this.currentPoint.y) / 2);
      this.drawCurve(this.shape.graphics, this.lastMidPoint, midPoint, this.lastPoint);
      this.lastPoint.setValues(this.currentPoint.x, this.currentPoint.y);
      this.lastMidPoint.setValues(midPoint.x, midPoint.y);
    }
  }
  drawCurve(graphics:createjs.Graphics, oldPoint:createjs.Point, newPoint:createjs.Point, controlPoint:createjs.Point) {
    this.setLineThickness(oldPoint, newPoint);
    graphics.beginStroke(this.setting.lineColor)
      .setStrokeStyle(this.currentLineThickness, "round", "round")
      .moveTo(oldPoint.x, oldPoint.y)
      .quadraticCurveTo(controlPoint.x, controlPoint.y, newPoint.x, newPoint.y);
  }
  setLineThickness(oldPoint:createjs.Point, newPoint:createjs.Point) {
    var distanceX = newPoint.x - oldPoint.x;
    var distanceY = newPoint.y - oldPoint.y;
    var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    var lineThickness = distance * 0.2;
    this.currentLineThickness = 1;
  }


}