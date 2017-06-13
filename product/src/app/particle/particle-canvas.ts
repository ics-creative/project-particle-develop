'use strict';

import {Viewport} from '../enum/view-port';
import {CanvasMargin} from '../enum/canvas-margin';
import {ParticleExporter} from './particle-exporter';
import {PartcicleImageImporter} from './particle-image-importer';
import {ParticleCaptureImageLayer} from './particle-capture-image-layer';
import {Ruler} from './particle-ruler';

/**
 * パーティクル表示エリアの制御クラスです。
 */
export class ParticleCanvas {

  private _data: particlejs.DrawingData;

  /** 背景の表示オブジェクトです。 */
  private _background: createjs.Shape;

  private _captureImageLayer: ParticleCaptureImageLayer;

  /** canvas 要素です。 */
  private _canvas: HTMLCanvasElement;

  /** CreateJS の Stage インスタンスです。 */
  private _stage: createjs.Stage;

  private _canvasContainer: createjs.Container;
  private _backgroundColorCommand: any;
  private _backgroundSize: any;

  /** パーティクルエミッターのインスタンスです。 */
  private _particleSystem: particlejs.ParticleSystem;

  /** パーティクルの設定情報生成のインスタンスです。 */
  private _particleExporter: ParticleExporter;

  /** パーティクルの画像生成のインスタンスです。 */
  private _partcileImageImporter: PartcicleImageImporter;

  private _ruler: Ruler;

  /** 座布団 */
  private _outerZabuton: createjs.Shape = new createjs.Shape();

  constructor(canvas: any, data: particlejs.DrawingData) {

    this._data   = data;
    this._canvas = canvas;

    this._canvas.width  = data.width;
    this._canvas.height = data.height;

    this._stage = new createjs.Stage(this._canvas);

    this._canvasContainer = new createjs.Container();
    this._stage.addChild(this._canvasContainer);


    //  キャンバスより後ろ
    this._background             = new createjs.Shape();
    this._backgroundColorCommand = this._background.graphics.beginFill('gray').command;
    this._backgroundSize         = this._background.graphics.drawRect(0, 0, data.width, data.height).command;


    this._backgroundColorCommand.style = data.bgColor;
    this._backgroundSize.w             = data.width;
    this._backgroundSize.h             = data.height;

    this._canvasContainer.addChild(this._background);

    this._captureImageLayer = new ParticleCaptureImageLayer();
    this._canvasContainer.addChild(this._captureImageLayer);

    this._particleSystem = new particlejs.ParticleSystem();
    this._canvasContainer.addChild(this._particleSystem.container);

    this._particleExporter = new ParticleExporter(this._particleSystem.container);

    this._partcileImageImporter = new PartcicleImageImporter();

    // 座布団
    this._stage.addChild(this._outerZabuton);

    // ルーラーは最前面
    this._ruler = new Ruler(this._data);
    this._ruler.setSize(data.width, data.height);
    this._stage.addChild(this._ruler.container);

    // リサイズイベント
    this.resizeHandler();
    window.addEventListener('resize', () => this.resizeHandler());
  }

  public pause(): void {
    this._particleSystem.pause();
  }

  public resume(): void {
    this._particleSystem.resume();
  }

  public getSvgString(): string {
    return this._particleExporter.getSvgString();
  }

  public runExport(): Promise<any> {
    return this._particleExporter.runExport(this._data.width, this._data.height);
  }

  public  runExportSP(): Promise<any> {
    return this._particleExporter.runExportSP(this._canvas);
  }

  public runCamera(): Promise<any> {
    const canvasWidth: number  = (<HTMLCanvasElement>this._stage.canvas).width;
    const canvasHeight: number = (<HTMLCanvasElement>this._stage.canvas).height;
    return this._partcileImageImporter.getCapture(canvasWidth, canvasHeight).then(
      (imageData) => this.insertCaptureToStage(imageData)
    );
  }

  /**
   * Stageにキャプチャー画像を挿入します。
   */
  private insertCaptureToStage(imageData: string): void {
    this._captureImageLayer.addImageFromImageData(imageData);
    this._stage.update();
  }

  public toDataURL(type: string, params: string): string {
    this._canvasContainer.cache(0, 0, this._data.width, this._data.height);
    const capture = <HTMLCanvasElement> this._canvasContainer.cacheCanvas;
    const dataURL = capture.toDataURL(type, params);
    this._canvasContainer.uncache();

    return dataURL;
  }

  /**
   * リサイズのイベント処理
   */
  private resizeHandler(): void {

    let canvasWidth: number  = innerWidth;
    let canvasHeight: number = innerHeight;

    if (innerWidth > Viewport.sm) {
      canvasHeight -= CanvasMargin.TOP_DESKTOP;
      canvasWidth -= CanvasMargin.RIGHT_DESKTOP;
      this._ruler.container.visible = true;
      this._background.visible      = true;
      this._outerZabuton.visible    = true;
    } else {
      canvasHeight -= CanvasMargin.TOP_MOBILE;
      canvasWidth -= CanvasMargin.RIGHT_MOBILE;
      this._ruler.container.visible = false;
      this._background.visible      = false;
      this._outerZabuton.visible    = false;
    }

    const palletW = Math.round(Number(this._data.width));
    const palletH = Math.round(Number(this._data.height));

    const canvasX = Math.floor((canvasWidth - palletW) / 2);
    const canvasY = Math.floor((canvasHeight - palletH) / 2);

    //  ルーラーなどのセンタリング
    const canvasPoint = new createjs.Point(canvasX, canvasY);

    this._outerZabuton.graphics
      .clear()
      .beginFill('rgba(32, 32, 32, 0.7)')
      .drawRect(0, 0, canvasWidth, canvasY)
      .drawRect(0, canvasY, canvasX, palletH)
      .drawRect(canvasX + palletW, canvasY, canvasX, palletH)
      .drawRect(0, canvasY + palletH, canvasWidth, canvasY)
      .endFill();

    this._canvasContainer.x = this._ruler.container.x = canvasPoint.x;
    this._canvasContainer.y = this._ruler.container.y = canvasPoint.y;

    this._captureImageLayer.x = -canvasPoint.x;
    this._captureImageLayer.y = -canvasPoint.y;

    const dpi = window.devicePixelRatio || 1.0;

    // ステージのサイズをwindowのサイズに変更
    (<HTMLCanvasElement>this._stage.canvas).width  = canvasWidth * dpi;
    (<HTMLCanvasElement>this._stage.canvas).height = canvasHeight * dpi;

    this._stage.scaleX = dpi;
    this._stage.scaleY = dpi;

    // canvas 要素のスタイルを調整
    (<HTMLCanvasElement>this._stage.canvas).style.width  = `${canvasWidth}px`;
    (<HTMLCanvasElement>this._stage.canvas).style.height = `${canvasHeight}px`;
  }

  public update(data: particlejs.DrawingData): void {

    const palletW = Math.round(Number(this._data.width));
    const palletH = Math.round(Number(this._data.height));

    if (palletW !== this._backgroundSize.w
      || palletH !== this._backgroundSize.h
      || this._backgroundColorCommand.style !== data.bgColor) {
      this._backgroundColorCommand.style = data.bgColor;
      this._backgroundSize.w             = palletW;
      this._backgroundSize.h             = palletH;
      this._ruler.setSize(palletW, palletH);
      this.resizeHandler();
    }

    this._particleSystem.setData(data);
    this._particleSystem.update();
    this._ruler.update();
    this._stage.update();
  }
}
