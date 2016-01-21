///<reference path="../../libs-typescript/createjs/createjs.d.ts"/>
"use strict";

declare class SVGExporter {
  constructor(stage:createjs.Container, width:number, height:number);

  svg:Node;

  run():void;
}

/**
 * Export SVG
 */
export class ParticleExporter {

  private exporter:SVGExporter;
  private drawLayerContainer:createjs.Container;
  private width:number;
  private height:number;

  constructor(drawLayerContainer:createjs.Container) {
    this.drawLayerContainer = drawLayerContainer;
  }

  runExport(width:number, height:number):Promise<any> {
    this.width = width;
    this.height = height;

    return new Promise((onResolve, onReject) => {

      this.exporter = new SVGExporter(this.drawLayerContainer, this.width, this.height);
      this.exporter.run();

      setTimeout(() => {
        onResolve()
      }, 1);
    });
  }

  runExportSP(cavas:HTMLCanvasElement):Promise<any> {
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
