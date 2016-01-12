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

    this.stage.addEventListener("stagemouseup", this.handlePressUp);
    this.isStart = true;

    this.generateNewLine();
  }
  handlePressUp = () =>{
    this.stage.removeEventListener("stagemouseup", this.handlePressUp);
    this.isStart  = false;

  }

  updateSetting = (setting:DrawingSetting) =>{
    this.setting.lineColor = setting.lineColor;
  }

  generateNewLine = () =>{


    //
    this.lastPoint = this.container.globalToLocal(  this.stage.mouseX,this.stage.mouseY);


    //
    this.currentPoint = new createjs.Point();
    this.currentPoint = this.container.globalToLocal(  this.stage.mouseX,this.stage.mouseY);

    //
    this.lastMidPoint = this.container.globalToLocal(  this.stage.mouseX,this.stage.mouseY);

    this.shape = new createjs.Shape();
    this.container.addChild(this.shape);
  }

  update = () => {
    if( !this.isStart )
      return ;
    console.log("update");

    var mousePt = this.container.globalToLocal(  this.stage.mouseX,this.stage.mouseY);


    var moveX = (mousePt.x - this.currentPoint.x);
    var moveY = (mousePt.y - this.currentPoint.y);
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
    graphics.beginStroke(this.setting.lineColor)
      .setStrokeStyle(this.currentLineThickness, "round", "round")
      .moveTo(oldPoint.x, oldPoint.y)
      .quadraticCurveTo(controlPoint.x, controlPoint.y, newPoint.x, newPoint.y);
  }

}