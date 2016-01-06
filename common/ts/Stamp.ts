/**
 * Created by nyamogera on 2016/01/06.
 */

class Stamp {
  newMatrix:createjs.Matrix2D;
  centerX:number;
  centerY:number;
  shape:createjs.Shape;
  draw = () => {

  }
  setMatrix(matrix:createjs.Matrix2D) {

  }

}
class Star extends Stamp{

  public radius:number;
  public sides:number;
  public angle:number;
  public pointSize:number;
  public graphics:createjs.Graphics;
  public vertex:any = [];
  public vertexOriginal:any = [];

  constructor() {
    super();

    this.centerX = 0;
    this.centerY = 0;
    this.radius = 100;
    this.sides = 5;
    this.angle = 0;
    this.newMatrix = new createjs.Matrix2D();
    this.pointSize = 0.3;

    let Graphics = createjs.Graphics;
    this.graphics = new Graphics();

    this.shape = new createjs.Shape(this.graphics);

    this.setVertex();
    this.setMatrix(this.newMatrix);
    this.draw();
  }

  setVertex = () => {

    let x = this.centerX + this.radius * Math.cos(this.angle);
    let y = this.centerY + this.radius * Math.sin(this.angle);

    for (var i = 0; i < this.sides + 1; i++) {

      if (this.pointSize != 0) {
        let radiusHarf = this.radius * (1 - this.pointSize);
        let rotate = -(Math.PI / this.sides) + (Math.PI * 2 / this.sides * i + this.angle);
        let x = this.centerX + radiusHarf * Math.cos(rotate);
        let y = this.centerY + radiusHarf * Math.sin(rotate);

        this.vertex.push(new createjs.Point(x, y));
        this.vertexOriginal.push(new createjs.Point(x, y));
      }

      let rotate = Math.PI * 2 / this.sides * i + this.angle;
      let x = this.centerX + this.radius * Math.cos(rotate);
      let y = this.centerY + this.radius * Math.sin(rotate);

      this.vertex.push(new createjs.Point(x, y));
      this.vertexOriginal.push(new createjs.Point(x, y));
    }

  }

  setMatrix(matrix:createjs.Matrix2D) {

    console.log("setmatrix",matrix);
    let vertexLentgh = this.vertex.length;
    for (var i = 0; i < vertexLentgh; i++) {
      this.vertex[i] = matrix.transformPoint(this.vertexOriginal[i].x, this.vertexOriginal[i].y);
    }
  }

  draw = () => {

    let Graphics = createjs.Graphics;
    this.graphics.clear();
    this.graphics.setStrokeStyle(4.0);
    this.graphics.beginStroke(Graphics.getRGB(0, 0, 0));
    this.graphics.beginFill(Graphics.getRGB(255, 0, 0));

    this.graphics.moveTo(this.vertex[0].x, this.vertex[0].y);

    let vertexLentgh = this.vertex.length;
    for (var i = 1; i < vertexLentgh; i++) {
      this.graphics.lineTo(this.vertex[i].x, this.vertex[i].y);
    }

    this.graphics.endFill();
    this.graphics.endStroke();
  }
}

class StampLayer implements ILayer{

  mousedown:boolean;
  stage:createjs.Stage;
  stamp:Stamp;
  locked:boolean;

  constructor(stage:createjs.Stage,stamp:Stamp) {
    this.stage = stage;
    this.stamp = stamp;
    this.locked = false;
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

  scaleUpdate = () =>{
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
}