///<reference path="../../libs-typescript/createjs/createjs.d.ts"/>
"use strict";

declare class SVGExporter {
  constructor(stage:createjs.Container, width:number, height:number);

  svg:Node;

  run():void;
}

/**
 * SVG ファイルに出力するクラスです。
 */
export class ParticleExporter {

  private _exporter:SVGExporter;
  private _drawLayerContainer:createjs.Container;
  private _width:number;
  private _height:number;

  constructor(drawLayerContainer:createjs.Container) {
    this._drawLayerContainer = drawLayerContainer;
  }

  public runExport(width:number, height:number):Promise<any> {
    this._width = width;
    this._height = height;

    return new Promise((onResolve, onReject) => {

      this._exporter = new SVGExporter(this._drawLayerContainer, this._width, this._height);
      this._exporter.run();

      setTimeout(() => {
        onResolve()
      }, 1);
    });
  }

  public runExportSP(cavas:HTMLCanvasElement):Promise<any> {
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

  public getSVGString():string {
    var serializer = new XMLSerializer();
    return serializer.serializeToString(this._exporter.svg);
  }
}
