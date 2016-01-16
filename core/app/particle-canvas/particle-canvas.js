///<reference path="../../typings/tsd.d.ts" />
System.register(["./particle-emitter", "./particle-exporter"], function(exports_1) {
    var particle_emitter_1, particle_exporter_1;
    var ParticleCanvas;
    return {
        setters:[
            function (particle_emitter_1_1) {
                particle_emitter_1 = particle_emitter_1_1;
            },
            function (particle_exporter_1_1) {
                particle_exporter_1 = particle_exporter_1_1;
            }],
        execute: function() {
            ParticleCanvas = (function () {
                function ParticleCanvas(canvas, data) {
                    var _this = this;
                    this.exportSVG = function () {
                        _this.particleExporter.runExport();
                    };
                    this.update = function (data) {
                        _this.backgroundColorCommand.style = data.color;
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
                    this.particleEmitter = new particle_emitter_1.ParticleEmitter();
                    this.stage.addChild(this.particleEmitter.container);
                    this.particleExporter = new particle_exporter_1.ParticleExporter(this.particleEmitter.container);
                }
                return ParticleCanvas;
            })();
            exports_1("ParticleCanvas", ParticleCanvas);
        }
    }
});
//# sourceMappingURL=particle-canvas.js.map