System.register(["../enum/view-port", "../enum/canvas-margin", "./particle-emitter", "./particle-exporter", "./particle-image-importer", "./particle-capture-image-layer", "./particle-ruler"], function(exports_1) {
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
            "use strict";
            ParticleCanvas = (function () {
                function ParticleCanvas(canvas, data) {
                    var _this = this;
                    /** 座布団 */
                    this._outerZabuton = new createjs.Shape();
                    this.data = data;
                    this.canvas = canvas;
                    this.canvas.width = data.width;
                    this.canvas.height = data.height;
                    this.stage = new createjs.Stage(this.canvas);
                    this.canvasContainer = new createjs.Container();
                    this.stage.addChild(this.canvasContainer);
                    //  キャンバスより後ろ
                    this.background = new createjs.Shape();
                    this.backgroundColorCommand = this.background.graphics.beginFill("gray").command;
                    this.backgroundSize = this.background.graphics.drawRect(0, 0, data.width, data.height).command;
                    this.backgroundColorCommand.style = data.bgColor;
                    this.backgroundSize.w = data.width;
                    this.backgroundSize.h = data.height;
                    this.canvasContainer.addChild(this.background);
                    this.captureImageLayer = new particle_capture_image_layer_1.ParticleCaptureImageLayer();
                    this.canvasContainer.addChild(this.captureImageLayer);
                    this.particleEmitter = new particle_emitter_1.ParticleEmitter();
                    this.canvasContainer.addChild(this.particleEmitter.container);
                    this.particleExporter = new particle_exporter_1.ParticleExporter(this.particleEmitter.container);
                    this.partcileImageImporter = new particle_image_importer_1.PartcicleImageImporter();
                    // 座布団
                    this.stage.addChild(this._outerZabuton);
                    // ルーラーは最前面
                    this.ruler = new particle_ruler_1.Ruler(this.stage);
                    this.ruler.setSize(data.width, data.height);
                    this.stage.addChild(this.ruler.container);
                    // リサイズイベント
                    this.resizeHandler();
                    window.addEventListener("resize", function () { return _this.resizeHandler(); });
                }
                ParticleCanvas.prototype.getSVGString = function () {
                    return this.particleExporter.getSVGString();
                };
                ParticleCanvas.prototype.runExport = function () {
                    return this.particleExporter.runExport(this.data.width, this.data.height);
                };
                ParticleCanvas.prototype.runExportSP = function () {
                    return this.particleExporter.runExportSP(this.canvas);
                };
                ParticleCanvas.prototype.runCamera = function () {
                    var _this = this;
                    var canvasWidth = this.stage.canvas.width;
                    var canvasHeight = this.stage.canvas.height;
                    return this.partcileImageImporter.getCapture(canvasWidth, canvasHeight).then(function (imageData) { return _this.insertCaptureToStage(imageData); });
                };
                /**
                 * Stageにキャプチャー画像を挿入します。
                 */
                ParticleCanvas.prototype.insertCaptureToStage = function (imageData) {
                    this.captureImageLayer.addImageFromImageData(imageData);
                    this.stage.update();
                };
                ParticleCanvas.prototype.toDataURL = function (type, params) {
                    this.canvasContainer.cache(0, 0, this.data.width, this.data.height);
                    var capture = this.canvasContainer.cacheCanvas;
                    var dataURL = capture.toDataURL(type, params);
                    this.canvasContainer.uncache();
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
                    }
                    else {
                        canvasHeight -= canvas_margin_1.CanvasMargin.TOP_MOBILE;
                        canvasWidth -= canvas_margin_1.CanvasMargin.RIGHT_MOBILE;
                    }
                    var palletW = Number(this.data.width) >> 0;
                    var palletH = Number(this.data.height) >> 0;
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
                    this.canvasContainer.x = this.ruler.container.x = canvasPoint.x;
                    this.canvasContainer.y = this.ruler.container.y = canvasPoint.y;
                    // ステージのサイズをwindowのサイズに変更
                    this.stage.canvas.width = canvasWidth;
                    this.stage.canvas.height = canvasHeight;
                };
                ParticleCanvas.prototype.update = function (data) {
                    var palletW = Number(this.data.width) >> 0;
                    var palletH = Number(this.data.height) >> 0;
                    if (palletW != this.backgroundSize.w
                        || palletH != this.backgroundSize.h
                        || this.backgroundColorCommand.style != data.bgColor) {
                        this.backgroundColorCommand.style = data.bgColor;
                        this.backgroundSize.w = palletW;
                        this.backgroundSize.h = palletH;
                        this.ruler.setSize(palletW, palletH);
                        this.resizeHandler();
                    }
                    this.particleEmitter.update(data);
                    this.ruler.update();
                    this.stage.update();
                };
                return ParticleCanvas;
            })();
            exports_1("ParticleCanvas", ParticleCanvas);
        }
    }
});
//# sourceMappingURL=particle-canvas.js.map