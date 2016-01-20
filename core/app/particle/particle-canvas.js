///<reference path="../../typings/tsd.d.ts" />
System.register(["../enum/view-port", "./particle-emitter", "./particle-exporter", "./particle-image-importer", "./particle-capture-image-layer"], function(exports_1) {
    var view_port_1, particle_emitter_1, particle_exporter_1, particle_image_importer_1, particle_capture_image_layer_1;
    var ParticleCanvas;
    return {
        setters:[
            function (view_port_1_1) {
                view_port_1 = view_port_1_1;
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
            }],
        execute: function() {
            ParticleCanvas = (function () {
                function ParticleCanvas(canvas, data) {
                    var _this = this;
                    this.runExport = function () {
                        return _this.particleExporter.runExport();
                    };
                    this.update = function (data) {
                        _this.backgroundColorCommand.style = data.bgColor;
                        _this.backgroundSize.w = data.width;
                        _this.backgroundSize.h = data.height;
                        _this.particleEmitter.update(data);
                        _this.stage.update();
                    };
                    this.canvas = canvas;
                    this.canvas.width = data.width;
                    this.canvas.height = data.height;
                    this.stage = new createjs.Stage(this.canvas);
                    //  キャンバスより後ろ
                    this.background = new createjs.Shape();
                    this.backgroundColorCommand = this.background.graphics.beginFill("gray").command;
                    this.backgroundSize = this.background.graphics.drawRect(0, 0, data.width, data.height).command;
                    this.stage.addChild(this.background);
                    this.captureImageLayer = new particle_capture_image_layer_1.ParticleCaptureImageLayer();
                    this.stage.addChild(this.captureImageLayer);
                    this.particleEmitter = new particle_emitter_1.ParticleEmitter();
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
                ParticleCanvas.prototype.runExportSP = function () {
                    return this.particleExporter.runExportSP(this.canvas);
                };
                ParticleCanvas.prototype.runCamera = function () {
                    var _this = this;
                    return this.partcileImageImporter.getCapture().then(function (imageData) { return _this.insertCaputureToStage(imageData); }, function () { return _this.insertDummyImageToStage(); });
                };
                /**
                 * Stageにキャプチャー画像を挿入します。
                 */
                ParticleCanvas.prototype.insertCaputureToStage = function (imageData) {
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
                    canvasHeight = windowHeight - 100;
                    if (windowWidth > view_port_1.Viewport.xs)
                        canvasWidth -= 400;
                    // ステージのサイズをwindowのサイズに変更
                    this.stage.canvas.width = canvasWidth;
                    this.stage.canvas.height = canvasHeight;
                };
                return ParticleCanvas;
            })();
            exports_1("ParticleCanvas", ParticleCanvas);
        }
    }
});
//# sourceMappingURL=particle-canvas.js.map