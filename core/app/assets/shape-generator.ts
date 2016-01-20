/**
 * Created by 「asset-shapes.fla」/「generate-assets.jsfl」 on Wed Jan 20 2016
 * !!!!!このコードはJSFLから自動生成されたコードです。修正する場合はご注意ください。!!!!!
 */

export class ShapeGenerator {
  shapeObjects:Object;

  constructor () {
    this.shapeObjects = lib;
  }

  generateShape(id:string) {
    return new this.shapeObjects[id]();
  }
}