///<reference path="../../libs-typescript/createjs/createjs.d.ts"/>

"use strict";

/**
 * キャプチャーした画像を配置するレイヤーです。
 *
 */
export class ParticleCaptureImageLayer extends createjs.Container {
  captureImage:createjs.Bitmap;

  constructor() {
    super();
  }

  /**
   * 画像を追加します。
   */
  public addImageFromImageData(imageData:string):void {
    this.removeImage();
    let base64 = "data:image/png;base64," + imageData.replace("file:///", "");
    this.captureImage = new createjs.Bitmap(base64);
    this.addChild(this.captureImage);
  }


  /**
   * URLから画像を追加します。
   *
   */
  public addImageFromURL(imageURL:string):void {
    this.removeImage();
    this.captureImage = new createjs.Bitmap(imageURL);
    this.addChild(this.captureImage);
  }

  /**
   * 画像を削除します。
   */
  private removeImage():void {
    if (this.numChildren > 0) {
      this.removeAllChildren();
    }
  }
}