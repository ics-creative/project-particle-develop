/**
 * Created by 「asset-shapes.fla」/「generate-assets.jsfl」 on Wed Jan 20 2016
 */

export class ShapeGenerator {
  shapeObjects:Object;
  assetList:string[];

  constructor () {

    this.assetList = ["blur_circle","circle","flower","heart","kirakira","kirakira2","reverse_blur_circle","square","star","star_10","triangle"];
    this.shapeObjects = new Object();
    this.shapeObjects["blur_circle"] = lib.blur_circle
    this.shapeObjects["circle"] = lib.circle
    this.shapeObjects["flower"] = lib.flower
    this.shapeObjects["heart"] = lib.heart
    this.shapeObjects["kirakira"] = lib.kirakira
    this.shapeObjects["kirakira2"] = lib.kirakira2
    this.shapeObjects["reverse_blur_circle"] = lib.reverse_blur_circle
    this.shapeObjects["square"] = lib.square
    this.shapeObjects["star"] = lib.star
    this.shapeObjects["star_10"] = lib.star_10
    this.shapeObjects["triangle"] = lib.triangle

  }

  generateShape(id:string) {
    return new this.shapeObjects[id]();
  }
}