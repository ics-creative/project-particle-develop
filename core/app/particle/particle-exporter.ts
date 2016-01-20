///<reference path="../../typings/tsd.d.ts" />

/**
 * Created by nyamogera on 2016/01/16.
 */

declare class SVGExporter {
  constructor(stage:createjs.Container, value1:boolean, value2:boolean, value3:boolean);

  svg:Node;

  run():void;
}

/**
 * Export SVG
 */
export class ParticleExporter {

  private exporter:SVGExporter;
  private drawLayerContainer:createjs.Container;

  constructor(drawLayerContainer:createjs.Container) {
    this.drawLayerContainer = drawLayerContainer;
  }

  runExport = ():Promise<any> => {
    return new Promise((onResolve, onReject) => {

      this.exporter = new SVGExporter(this.drawLayerContainer, false, false, false);
      this.exporter.run();
      
      setTimeout(() => {
        onResolve()
      }, 1);
    });
  }

  runExportSP = (cavas:HTMLCanvasElement):Promise<any> => {
    return new Promise((onResolve, onReject) => {
      let base64 = cavas.toDataURL();
      cordova.base64ToGallery(
        base64,
        'img_',
        function (msg) {
          onResolve();
          alert("画像ライブラリに保存しました。");
        },
        function (err) {
          onReject();
          alert("画像保存に失敗しました。");
        }
      );
    });
  }

  getSVGString():string {

    var serializer = new XMLSerializer();
    return serializer.serializeToString(this.exporter.svg);
  }

}