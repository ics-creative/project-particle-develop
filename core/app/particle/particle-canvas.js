System.register(["../enum/view-port", "../enum/canvas-margin", "./particle-emitter", "./particle-exporter", "./particle-image-importer", "./particle-capture-image-layer", "./particle-ruler"], function(exports_1) {
    ///<reference path="../../libs-typescript/createjs/createjs.d.ts"/>
    "use strict";
    var view_port_1, canvas_margin_1, particle_emitter_1, particle_exporter_1, particle_image_importer_1, particle_capture_image_layer_1, particle_ruler_1;
    var ParticleCanvas;
    return {
        setters:[
            function (view_port_1_1) {
                view_port_1 = view_port_1_1;
            },
            function (canvas_margin_1_1) {
                canvas_margin_1 = canvas_margin_1_1;
            },
            function (particle_emitter_1_1) {
                particle_emitter_1 = particle_emitter_1_1;
            },
            function (particle_exporter_1_1) {
                particle_exporter_1 = particle_exporter_1_1;
            },
            function (particle_image_importer_1_1) {
                particle_image_importer_1 = particle_image_importer_1_1;
            },
            function (particle_capture_image_layer_1_1) {
                particle_capture_image_layer_1 = particle_capture_image_layer_1_1;
            },
            function (particle_ruler_1_1) {
                particle_ruler_1 = particle_ruler_1_1;
            }],
        execute: function() {
            /**
             * パーティクル表示エリアの制御クラスです。
             */
            ParticleCanvas = (function () {
                function ParticleCanvas(canvas, data) {
                    var _this = this;
                    /** 座布団 */
                    this._outerZabuton = new createjs.Shape();
                    this._data = data;
                    this._canvas = canvas;
                    this._canvas.width = data.width;
                    this._canvas.height = data.height;
                    this._stage = new createjs.Stage(this._canvas);
                    this._canvasContainer = new createjs.Container();
                    this._stage.addChild(this._canvasContainer);
                    //  キャンバスより後ろ
                    this._background = new createjs.Shape();
                    this._backgroundColorCommand = this._background.graphics.beginFill("gray").command;
                    this._backgroundSize = this._background.graphics.drawRect(0, 0, data.width, data.height).command;
                    this._backgroundColorCommand.style = data.bgColor;
                    this._backgroundSize.w = data.width;
                    this._backgroundSize.h = data.height;
                    this._canvasContainer.addChild(this._background);
                    this._captureImageLayer = new particle_capture_image_layer_1.ParticleCaptureImageLayer();
                    this._canvasContainer.addChild(this._captureImageLayer);
                    this._particleEmitter = new particle_emitter_1.ParticleEmitter();
                    this._canvasContainer.addChild(this._particleEmitter.container);
                    this._particleExporter = new particle_exporter_1.ParticleExporter(this._particleEmitter.container);
                    this._partcileImageImporter = new particle_image_importer_1.PartcicleImageImporter();
                    // 座布団
                    this._stage.addChild(this._outerZabuton);
                    // ルーラーは最前面
                    this._ruler = new particle_ruler_1.Ruler(this._data);
                    this._ruler.setSize(data.width, data.height);
                    this._stage.addChild(this._ruler.container);
                    // リサイズイベント
                    this.resizeHandler();
                    window.addEventListener("resize", function () { return _this.resizeHandler(); });
                }
                ParticleCanvas.prototype.getSvgString = function () {
                    return this._particleExporter.getSvgString();
                };
                ParticleCanvas.prototype.runExport = function () {
                    return this._particleExporter.runExport(this._data.width, this._data.height);
                };
                ParticleCanvas.prototype.runExportSP = function () {
                    return this._particleExporter.runExportSP(this._canvas);
                };
                ParticleCanvas.prototype.runCamera = function () {
                    var _this = this;
                    var canvasWidth = this._stage.canvas.width;
                    var canvasHeight = this._stage.canvas.height;
                    return this._partcileImageImporter.getCapture(canvasWidth, canvasHeight).then(function (imageData) { return _this.insertCaptureToStage(imageData); });
                };
                /**
                 * Stageにキャプチャー画像を挿入します。
                 */
                ParticleCanvas.prototype.insertCaptureToStage = function (imageData) {
                    this._captureImageLayer.addImageFromImageData(imageData);
                    this._stage.update();
                };
                ParticleCanvas.prototype.toDataURL = function (type, params) {
                    this._canvasContainer.cache(0, 0, this._data.width, this._data.height);
                    var capture = this._canvasContainer.cacheCanvas;
                    var dataURL = capture.toDataURL(type, params);
                    this._canvasContainer.uncache();
                    return dataURL;
                };
                /**
                 * リサイズのイベント処理
                 */
                ParticleCanvas.prototype.resizeHandler = function () {
                    var canvasWidth = innerWidth;
                    var canvasHeight = innerHeight;
                    if (innerWidth > view_port_1.Viewport.sm) {
                        canvasHeight -= canvas_margin_1.CanvasMargin.TOP_DESKTOP;
                        canvasWidth -= canvas_margin_1.CanvasMargin.RIGHT_DESKTOP;
                        this._ruler.container.visible = true;
                        this._background.visible = true;
                        this._outerZabuton.visible = true;
                    }
                    else {
                        canvasHeight -= canvas_margin_1.CanvasMargin.TOP_MOBILE;
                        canvasWidth -= canvas_margin_1.CanvasMargin.RIGHT_MOBILE;
                        this._ruler.container.visible = false;
                        this._background.visible = false;
                        this._outerZabuton.visible = false;
                    }
                    var palletW = Number(this._data.width) >> 0;
                    var palletH = Number(this._data.height) >> 0;
                    var canvasX = Math.floor((canvasWidth - palletW) / 2);
                    var canvasY = Math.floor((canvasHeight - palletH) / 2);
                    //  ルーラーなどのセンタリング
                    var canvasPoint = new createjs.Point(canvasX, canvasY);
                    this._outerZabuton.graphics
                        .clear()
                        .beginFill("rgba(32, 32, 32, 0.7)")
                        .drawRect(0, 0, canvasWidth, canvasY)
                        .drawRect(0, canvasY, canvasX, palletH)
                        .drawRect(canvasX + palletW, canvasY, canvasX, palletH)
                        .drawRect(0, canvasY + palletH, canvasWidth, canvasY)
                        .endFill();
                    this._canvasContainer.x = this._ruler.container.x = canvasPoint.x;
                    this._canvasContainer.y = this._ruler.container.y = canvasPoint.y;
                    this._captureImageLayer.x = -canvasPoint.x;
                    this._captureImageLayer.y = -canvasPoint.y;
                    var dpi = window.devicePixelRatio || 1.0;
                    // ステージのサイズをwindowのサイズに変更
                    this._stage.canvas.width = canvasWidth * dpi;
                    this._stage.canvas.height = canvasHeight * dpi;
                    this._stage.scaleX = dpi;
                    this._stage.scaleY = dpi;
                    // canvas 要素のスタイルを調整
                    this._stage.canvas.style.width = canvasWidth + "px";
                    this._stage.canvas.style.height = canvasHeight + "px";
                };
                ParticleCanvas.prototype.update = function (data) {
                    var palletW = Number(this._data.width) >> 0;
                    var palletH = Number(this._data.height) >> 0;
                    if (palletW != this._backgroundSize.w
                        || palletH != this._backgroundSize.h
                        || this._backgroundColorCommand.style != data.bgColor) {
                        this._backgroundColorCommand.style = data.bgColor;
                        this._backgroundSize.w = palletW;
                        this._backgroundSize.h = palletH;
                        this._ruler.setSize(palletW, palletH);
                        this.resizeHandler();
                    }
                    this._particleEmitter.update(data);
                    this._ruler.update();
                    this._stage.update();
                };
                return ParticleCanvas;
            })();
            exports_1("ParticleCanvas", ParticleCanvas);
        }
    }
});
//# sourceMappingURL=particle-canvas.js.map