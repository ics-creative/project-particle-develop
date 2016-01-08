/**
 * Created by nyamogera on 2016/01/08.
 */

class ShapeSupport {

  public center:createjs.Point;
  public rotation:number;
  public size:createjs.Point;

  private baseShape:createjs.Shape;

  private controllerLeftTop:createjs.Shape;
  private controllerRightTop:createjs.Shape;
  private controllerLeftBottom:createjs.Shape;
  private controllerRightBottom:createjs.Shape;

  private controllerRotation:createjs.Shape;


  public container:createjs.Container;

  public lineColor:string;
  private matrix:createjs.Matrix2D;

  private dragTarget:createjs.Shape;
  private dragPoint:createjs.Point;
  private stage:createjs.Stage;

  constructor(stage:createjs.Stage) {
    this.stage = stage;
    this.lineColor = "blue";

    this.center = new createjs.Point();
    this.rotation = 0;
    this.size = new createjs.Point();
    this.baseShape = new createjs.Shape();
    this.matrix = new createjs.Matrix2D();
    this.dragPoint = new createjs.Point();

    this.container = new createjs.Container();
    this.baseShape = new createjs.Shape();
    this.container.addChild(this.baseShape);
    this.baseShape.addEventListener("mousedown", this.handleMouseDown );

    this.controllerLeftTop = new createjs.Shape();
    this.container.addChild(this.controllerLeftTop);
    this.controllerLeftTop.addEventListener("mousedown", this.handleMouseDown );

    this.controllerRightTop = new createjs.Shape();
    this.container.addChild(this.controllerRightTop);
    this.controllerRightTop.addEventListener("mousedown", this.handleMouseDown );

    this.controllerLeftBottom = new createjs.Shape();
    this.container.addChild(this.controllerLeftBottom);
    this.controllerLeftBottom.addEventListener("mousedown", this.handleMouseDown );

    this.controllerRightBottom = new createjs.Shape();
    this.container.addChild(this.controllerRightBottom);
    this.controllerRightBottom.addEventListener("mousedown", this.handleMouseDown );

    this.controllerRotation = new createjs.Shape();
    this.container.addChild(this.controllerRotation);
    this.controllerRotation.addEventListener("mousedown", this.handleMouseDown );
  }

  handleMouseDown = (e:any) => {
    if(this.dragTarget) {
      this.dragTarget.removeEventListener("pressmove", this.handlePressMove);
      this.dragTarget.removeEventListener("pressup", this.handlePressUp );
    }

    this.dragTarget = e.target;
    this.dragTarget.addEventListener("pressmove", this.handlePressMove);
    this.dragTarget.addEventListener("pressup", this.handlePressUp );

    this.dragPoint.x = this.stage.mouseX - (this.dragTarget.x + this.container.x ) ;
    this.dragPoint.y = this.stage.mouseY - (this.dragTarget.y + this.container.y ) ;
  }
  handlePressMove  = (e:any) => {

    console.log(this.dragTarget + ":dragging");

    var diffX = (this.stage.mouseX - this.container.x  - this.dragPoint.x ) * 2;
    var diffY = (this.stage.mouseY - this.container.y - this.dragPoint.y ) * 2 ;

    console.log(diffX,diffY);
    var diff = this.matrix.clone().invert().transformPoint(diffX,diffY);

    console.log(diff.x,diff.y);
    console.log(this.matrix.transformPoint(diff.x,diff.y).x,this.matrix.transformPoint(diff.x,diff.y).y);

    switch(this.dragTarget) {

      case this.baseShape:
        console.log("baseShape - dragging");

        this.container.x = this.stage.mouseX - this.dragPoint.x;
        this.container.y = this.stage.mouseY - this.dragPoint.y;

        break;

      case this.controllerLeftTop:
        console.log("leftTop - dragging");

        this.size.x = -diff.x ;
        this.size.y = -diff.y ;
        break;

      case this.controllerRightTop:
        console.log("rightTop - dragging");
        this.size.x = diff.x ;
        this.size.y = -diff.y ;
        break;

      case this.controllerRightBottom:
        console.log("rightBottom - dragging");
        this.size.x = diff.x ;
        this.size.y = diff.y ;

        break;

      case this.controllerLeftBottom:
        console.log("leftBottom - dragging");
        this.size.x = -diff.x ;
        this.size.y = diff.y ;
        break;

      case this.controllerRotation:
        console.log("rotation - dragging");

        this.rotation = Math.atan2(diffY,diffX) * 180 / Math.PI + 90;
        console.log(this.rotation);

        break;
    }
  }

  handlePressUp = (e:any) => {
    this.dragTarget.removeEventListener("pressmove", this.handlePressMove);
    this.dragTarget.removeEventListener("pressup", this.handlePressUp );

    this.dragTarget = null;

  }

  update = () => {
    this.matrix.identity();
    this.matrix.rotate(this.rotation);
  }

  draw = () => {
    var graphics = this.baseShape.graphics;

    var harf_w:number = this.size.x / 2;
    var harf_h:number = this.size.y / 2;

    var leftTop:createjs.Point = this.matrix.transformPoint(-harf_w,-harf_h);
    var rightTop:createjs.Point = this.matrix.transformPoint(harf_w,-harf_h);
    var leftBottom:createjs.Point = this.matrix.transformPoint(-harf_w,harf_h);
    var rightBottom:createjs.Point = this.matrix.transformPoint(harf_w,harf_h);

    var rotationPointStart:createjs.Point = this.matrix.transformPoint(0,-harf_h);
    var rotationPoint:createjs.Point = this.matrix.transformPoint(0,-harf_h-30);

    var color = createjs.Graphics.getRGB(1,1,1, 0.01);

    graphics.clear().beginFill(color).beginStroke(this.lineColor).
      moveTo(leftTop.x,leftTop.y).
      lineTo(leftTop.x,leftTop.y).
      lineTo(rightTop.x,rightTop.y).
      lineTo(rightBottom.x,rightBottom.y).
      lineTo(leftBottom.x,leftBottom.y).
      lineTo(leftTop.x,leftTop.y);

    graphics.moveTo(rotationPointStart.x,rotationPointStart.y).lineTo(rotationPoint.x,rotationPoint.y);

    var controlSize:number = 10;

    this.controllerLeftTop.graphics.clear().beginFill("white").beginStroke(this.lineColor).
    drawRect(-controlSize/2,-controlSize/2,controlSize,controlSize).closePath();
    this.controllerLeftTop.setTransform(leftTop.x,leftTop.y,1,1,this.rotation);

    this.controllerRightTop.graphics.clear().beginFill("white").beginStroke(this.lineColor).
    drawRect(-controlSize/2,-controlSize/2,controlSize,controlSize).closePath();
    this.controllerRightTop.setTransform(rightTop.x,rightTop.y,1,1,this.rotation);

    this.controllerRightBottom.graphics.clear().beginFill("white").beginStroke(this.lineColor).
    drawRect(-controlSize/2,-controlSize/2,controlSize,controlSize).closePath();
    this.controllerRightBottom.setTransform(rightBottom.x,rightBottom.y,1,1,this.rotation);

    this.controllerLeftBottom.graphics.clear().beginFill("white").beginStroke(this.lineColor).
    drawRect(-controlSize/2,-controlSize/2,controlSize,controlSize).closePath();
    this.controllerLeftBottom.setTransform(leftBottom.x,leftBottom.y,1,1,this.rotation);

    this.controllerRotation.graphics.clear().beginFill("white").beginStroke(this.lineColor).
    drawRect(-controlSize/2,-controlSize/2,controlSize,controlSize).closePath();
    this.controllerRotation.setTransform(rotationPoint.x,rotationPoint.y,1,1,this.rotation);
  }
}

