System.register(["angular2/core", "../particle/particle-canvas"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, particle_canvas_1;
    var StageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (particle_canvas_1_1) {
                particle_canvas_1 = particle_canvas_1_1;
            }],
        execute: function() {
            StageComponent = (function () {
                function StageComponent() {
                }
                StageComponent.prototype.exportSvg = function () {
                    return this.particleCanvas.runExport();
                };
                StageComponent.prototype.toDataURL = function (type, params) {
                    return this.particleCanvas.toDataURL(type, params);
                };
                StageComponent.prototype.runExportSP = function () {
                    return this.particleCanvas.runExportSP();
                };
                StageComponent.prototype.runCamera = function () {
                    return this.particleCanvas.runCamera();
                };
                StageComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    var canvas = this.myCanvas.nativeElement;
                    this.particleCanvas = new particle_canvas_1.ParticleCanvas(canvas, this.drawingData);
                    createjs.Ticker.framerate = 60;
                    createjs.Ticker.timingMode = createjs.Ticker.RAF;
                    createjs.Ticker.on("tick", this.handleTick, this);
                    canvas.addEventListener("contextmenu", function (event) {
                        _this.handleContextMenu(event);
                    });
                };
                StageComponent.prototype.getParticleSvgString = function () {
                    return this.particleCanvas.getSvgString();
                };
                StageComponent.prototype.handleTick = function () {
                    this.particleCanvas.update(this.drawingData);
                };
                StageComponent.prototype.handleContextMenu = function (event) {
                    event.preventDefault();
                };
                __decorate([
                    core_1.ViewChild("myCanvas"), 
                    __metadata('design:type', Object)
                ], StageComponent.prototype, "myCanvas", void 0);
                StageComponent = __decorate([
                    core_1.Component({
                        selector: "stage",
                        template: "<canvas #myCanvas id=\"myCanvas\"></canvas>",
                        inputs: ["drawingData"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StageComponent);
                return StageComponent;
            })();
            exports_1("StageComponent", StageComponent);
        }
    }
});
//# sourceMappingURL=stage.component.js.map