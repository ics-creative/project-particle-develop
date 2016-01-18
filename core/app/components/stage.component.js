System.register(["angular2/core", "../particle/particle-canvas"], function(exports_1) {
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
                    var _this = this;
                    this.exportSVG = function () {
                        return _this.particleCanvas.runExport();
                    };
                }
                StageComponent.prototype.runExportSP = function () {
                    return this.particleCanvas.runExportSP();
                };
                StageComponent.prototype.runCamera = function () {
                    return this.particleCanvas.runCamera();
                };
                StageComponent.prototype.ngAfterViewInit = function () {
                    var canvas = this.myCanvas.nativeElement;
                    this.particleCanvas = new particle_canvas_1.ParticleCanvas(canvas, this.drawingData);
                    this.tick();
                };
                StageComponent.prototype.getParticleSVGString = function () {
                    return this.particleCanvas.getSVGString();
                };
                StageComponent.prototype.tick = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        _this.tick();
                    });
                    this.particleCanvas.update(this.drawingData);
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