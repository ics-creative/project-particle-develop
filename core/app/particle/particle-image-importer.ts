///<reference path="../../typings/tsd.d.ts" />
"use strict";

/**
 * 画像を読み込むクラスです
 */
export class PartcicleImageImporter {
  constructor() {
  }

  /**
   * ネイティブ機能を使ってカメラを撮影します。
   */
  public getCapture(canvasWidth:number, canvasHeight:number):Promise<any> {
    return new Promise((onResolve, onReject) => {
      navigator.camera.getPicture(
          (imageData:string) => this.cameraSuccessHandler(imageData, onResolve),
          (errorMessage:string) => this.cameraFailHandler(errorMessage, onReject),
          {
            quality: 70,
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: canvasWidth,
            targetHeight: canvasHeight,
            correctOrientation: true,
            encodingType: Camera.EncodingType.PNG
          }
      )
    });
  }

  /**
   * カメラ撮影に成功した時
   */
  private cameraSuccessHandler(imageData:string, onResolve:Function):void {
    onResolve(imageData);
  }

  /**
   * カメラ撮影に失敗した時
   */
  private cameraFailHandler(errorMessage:string, onReject:Function):void {
    alert("カメラの起動に失敗しました。");
    onReject();
  }
}