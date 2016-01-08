/**
 * Created by nyamogera on 2016/01/07.
 */

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
    this.sides = 6;
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
    let vertexLentgh = this.vertex.length;
    for (var i = 0; i < vertexLentgh; i++) {
      this.vertex[i] = matrix.transformPoint(this.vertexOriginal[i].x, this.vertexOriginal[i].y);
    }
  }

  draw = () => {

    let Graphics = createjs.Graphics;
    this.graphics.clear();
    this.graphics.setStrokeStyle(4.0);
    this.graphics.beginStroke(this.setting.lineColor);
    this.graphics.beginFill(this.setting.baseColor);

    this.graphics.moveTo(this.vertex[0].x, this.vertex[0].y);

    let vertexLentgh = this.vertex.length;
    for (var i = 1; i < vertexLentgh; i++) {
      this.graphics.lineTo(this.vertex[i].x, this.vertex[i].y);
    }

    this.graphics.endFill();
    this.graphics.endStroke();
  }
}