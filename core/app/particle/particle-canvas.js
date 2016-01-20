///<reference path="../../typings/tsd.d.ts" />
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
            ParticleCanvas = (function () {
                function ParticleCanvas(canvas, data) {
                    var _this = this;
                    var canvasPoint = new createjs.Point(100, 100);
                    this.canvas = canvas;
                    this.canvas.width = data.width;
                    this.canvas.height = data.height;
                    this.stage = new createjs.Stage(this.canvas);
                    //  キャンバスより後ろ
                    this.background = new createjs.Shape();
                    this.backgroundColorCommand = this.background.graphics.beginFill("gray").command;
                    this.backgroundSize = this.background.graphics.drawRect(0, 0, data.width, data.height).command;
                    this.ruler = new particle_ruler_1.Ruler(this.stage);
                    this.ruler.setSize(data.width, data.height);
                    this.stage.addChild(this.ruler.container);
                    this.ruler.container.x = canvasPoint.x;
                    this.ruler.container.y = canvasPoint.y;
                    this.backgroundColorCommand.style = data.bgColor;
                    this.backgroundSize.w = data.width;
                    this.backgroundSize.h = data.height;
                    this.backgroundSize.x = canvasPoint.x;
                    this.backgroundSize.y = canvasPoint.y;
                    this.stage.addChild(this.background);
                    this.captureImageLayer = new particle_capture_image_layer_1.ParticleCaptureImageLayer();
                    this.captureImageLayer.x = canvasPoint.x;
                    this.captureImageLayer.y = canvasPoint.y;
                    this.stage.addChild(this.captureImageLayer);
                    this.particleEmitter = new particle_emitter_1.ParticleEmitter();
                    this.particleEmitter.container.x = canvasPoint.x;
                    this.particleEmitter.container.y = canvasPoint.y;
                    this.stage.addChild(this.particleEmitter.container);
                    this.particleExporter = new particle_exporter_1.ParticleExporter(this.stage);
                    this.partcileImageImporter = new particle_image_importer_1.PartcicleImageImporter();
                    // リサイズイベント
                    this.resizeHandler();
                    window.addEventListener("resize", function () { return _this.resizeHandler(); });
                }
                ParticleCanvas.prototype.getSVGString = function () {
                    return this.particleExporter.getSVGString();
                };
                ParticleCanvas.prototype.runExport = function () {
                    return this.particleExporter.runExport();
                };
                ParticleCanvas.prototype.runExportSP = function () {
                    return this.particleExporter.runExportSP(this.canvas);
                };
                ParticleCanvas.prototype.runCamera = function () {
                    var _this = this;
                    var canvasWidth = this.stage.canvas.width;
                    var canvasHeight = this.stage.canvas.height;
                    return this.partcileImageImporter.getCapture(canvasWidth, canvasHeight).then(function (imageData) { return _this.insertCaptureToStage(imageData); }, function () { return _this.insertDummyImageToStage(); });
                };
                /**
                 * Stageにキャプチャー画像を挿入します。
                 */
                ParticleCanvas.prototype.insertCaptureToStage = function (imageData) {
                    this.captureImageLayer.addImageFromImageData(imageData);
                    this.stage.update();
                };
                ParticleCanvas.prototype.insertDummyImageToStage = function () {
                    this.captureImageLayer.addImageFromURL("http://ics-web.jp/imgs/works/pollenmap.jpg");
                    this.stage.update();
                };
                /**
                 * リサイズのイベント処理
                 */
                ParticleCanvas.prototype.resizeHandler = function () {
                    var canvasWidth;
                    var canvasHeight;
                    var windowWidth = window.innerWidth;
                    var windowHeight = window.innerHeight;
                    canvasWidth = windowWidth;
                    canvasHeight = windowHeight;
                    if (windowWidth > view_port_1.Viewport.sm) {
                        canvasHeight -= canvas_margin_1.CanvasMargin.TOP_DESKTOP;
                        canvasWidth -= canvas_margin_1.CanvasMargin.RIGHT_DESKTOP;
                    }
                    else {
                        canvasHeight -= canvas_margin_1.CanvasMargin.TOP_MOBILE;
                        canvasWidth -= canvas_margin_1.CanvasMargin.RIGHT_MOBILE;
                    }
                    // ステージのサイズをwindowのサイズに変更
                    this.stage.canvas.width = canvasWidth;
                    this.stage.canvas.height = canvasHeight;
                };
                ParticleCanvas.prototype.update = function (data) {
                    if (data.width != this.backgroundSize.w || data.height != this.backgroundSize.h ||
                        this.backgroundColorCommand.style != data.bgColor) {
                        this.backgroundColorCommand.style = data.bgColor;
                        this.backgroundSize.w = data.width;
                        this.backgroundSize.h = data.height;
                        this.ruler.setSize(data.width, data.height);
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