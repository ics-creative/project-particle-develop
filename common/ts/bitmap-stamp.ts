/**
 * Created by nyamogera on 2016/01/12.
 */


class BitmapStamp extends Stamp{

  public graphics:createjs.Graphics;
  private shape:createjs.Shape;
  bitmap:createjs.Bitmap;
  constructor(bitmap:createjs.Bitmap) {
    super();
    this.bitmap = bitmap;

    this.shape = new createjs.Shape();
    var color = createjs.Graphics.getRGB(1,1,1, 0.9);
    this.shape.graphics.beginFill(color).drawRect(0,0,this.bitmap.image.width,this.bitmap.image.height);

    this.size.x = this.bitmap.image.width;
    this.size.y = this.bitmap.image.height

    this.addChild(this.shape);
    this.addChild(this.bitmap);

    //  hittestでエラーが発生するので
    this.bitmap.mouseEnabled = false;

    this.setMatrix(this.newMatrix);
    this.updateGraphics();
  }


  setMatrix(matrix:createjs.Matrix2D) {
    matrix.decompose(this.shape);
    matrix.decompose(this.bitmap);

  }


  updateTransformation(shapeSupport:ShapeSupport) {

    var scale:createjs.Point = new createjs.Point(
      shapeSupport.size.x / this.bitmap.image.width,
      shapeSupport.size.y / this.bitmap.image.height)

    this.size.x = shapeSupport.size.x ;
    this.size.y = shapeSupport.size.y ;
    this.rotation = shapeSupport.rotation ;

    this.newMatrix.identity();
    this.newMatrix.translate(-this.bitmap.image.width/2,-this.bitmap.image.height/2)
    this.newMatrix.rotate(shapeSupport.rotation * createjs.Matrix2D.DEG_TO_RAD);
    this.newMatrix.scale(scale.x,scale.y);

    this.x = shapeSupport.container.x;
    this.y = shapeSupport.container.y;

    this.newMatrix.decompose(this.shape);
    this.newMatrix.decompose(this.bitmap);

    this.setMatrix(this.newMatrix);
    this.updateGraphics();


  }

  updateGraphics () {

  }
}
