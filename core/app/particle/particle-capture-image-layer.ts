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
  public addImageFromImageData(imageData:string, targetWidth:number):void {
    //this.removeImage();
    //var base64 = "data:image/jpeg;base64," + imageData.replace("file:///", "");

    //var image:HTMLImageElement = <HTMLImageElement> new Image();
    //image.src = base64;

    //image.onload = () => function():void {
    //  var canvas:HTMLCanvasElement = document.createElement("canvas");
    //  var ctx = canvas.getContext("2d");
    //  var newImageWidth:number = targetWidth;
    //  var newImageHeight:number = (targetWidth / image.naturalWidth) * image.naturalHeight;
    //  canvas.width = newImageWidth;
    //  canvas.height = newImageHeight;
    //  ctx.drawImage(image, 0, 0, newImageWidth, newImageHeight);
    //  var newImage:HTMLImageElement = <HTMLImageElement> new Image();
    //  newImage.src = canvas.toDataURL();
    //  this.captureImage = new createjs.Bitmap(newImage);
    //  this.addChild(this.captureImage);
    //}

    this.removeImage();
    var base64 = "data:image/jpeg;base64," + imageData.replace("file:///", "");
    this.captureImage = new createjs.Bitmap(base64);
    this.captureImage.scaleX = 0.6;
    this.captureImage.scaleY = 0.6;
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