"use strict";

/**
 * キャプチャーした画像を配置するレイヤーです。
 */
export class ParticleCaptureImageLayer extends createjs.Container {
  private _captureImage:createjs.Bitmap;

  constructor() {
    super();
  }

  /**
   * 画像を追加します。
   */
  public addImageFromImageData(imageData:string):void {
    this.removeImage();
    let base64 = "data:image/png;base64," + imageData.replace("file:///", "");
    this._captureImage = new createjs.Bitmap(base64);
    this.addChild(this._captureImage);
  }

  /**
   * URLから画像を追加します。
   *
   */
  public addImageFromURL(imageURL:string):void {
    this.removeImage();
    this._captureImage = new createjs.Bitmap(imageURL);
    this.addChild(this._captureImage);
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