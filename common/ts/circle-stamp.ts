/**
 * Created by nyamogera on 2016/01/12.
 */

class Circle extends Stamp{


  public graphics:createjs.Graphics;
  public centerX:number;
  public centerY:number;

  shape:createjs.Shape;
  constructor() {
    super();

    this.centerX = 0;
    this.centerY = 0;

    this.shape = new createjs.Shape(this.graphics);

    this.graphics = this.shape.graphics ;

    this.addChild(this.shape);
    this.updateGraphics();
  }

  setVertex = () => {

  }

  setMatrix(matrix:createjs.Matrix2D) {
  }

  updateGraphics () {

    this.graphics.clear();
    this.graphics.setStrokeStyle(4.0);
    this.graphics.beginStroke(this.setting.lineColor);
    this.graphics.beginFill(this.setting.baseColor);
    this.graphics.drawEllipse(-this.size.x,-this.size.y,this.size.x * 2,this.size.y * 2)
    this.graphics.endFill();
    this.graphics.endStroke();
  }
}