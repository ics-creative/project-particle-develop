System.register(["angular2/core", "./drawing-data", "./property.component", "./shape-property.component", "./stage.component", "./particle-canvas/particle-shape-types"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drawing_data_1, property_component_1, shape_property_component_1, stage_component_1, core_2, particle_shape_types_1;
    var template, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (drawing_data_1_1) {
                drawing_data_1 = drawing_data_1_1;
            },
            function (property_component_1_1) {
                property_component_1 = property_component_1_1;
            },
            function (shape_property_component_1_1) {
                shape_property_component_1 = shape_property_component_1_1;
            },
            function (stage_component_1_1) {
                stage_component_1 = stage_component_1_1;
            },
            function (particle_shape_types_1_1) {
                particle_shape_types_1 = particle_shape_types_1_1;
            }],
        execute: function() {
            template = "\n<div class=\"container\">\n    <div class=\"col-sm-7 col-xs-12\">\n        <stage #stageComponent [drawingData]=\"drawingData\"></stage>\n    </div>\n    <div class=\"col-sm-5 col-xs-12\">\n        <property-panel [drawingData]=\"drawingData\" (exportSVGEvent)=\"handleSVGClick()\" (exportParamaterEvent)=\"handleExportParamaterClick()\"></property-panel>\n    </div>\n    <shape-property-modal [drawingData]=\"drawingData\"></shape-property-modal>\n</div>\n";
            AppComponent = (function () {
                function AppComponent() {
                    var _this = this;
                    this.openSVGExportWindow = function () {
                        window.open("data:image/svg+xml,\n" + encodeURIComponent(_this.stageComponent.getParticleSVGString()));
                    };
                    this.drawingData = new drawing_data_1.DrawingData();
                    this.drawingData.bgColor = "#00000";
                    this.drawingData.width = 500;
                    this.drawingData.height = 500;
                    this.drawingData.friction = 0;
                    this.drawingData.startColor = "#FFFFFF";
                    this.drawingData.startX = 250;
                    this.drawingData.startXVariance = 50;
                    this.drawingData.startY = 250;
                    this.drawingData.startYVariance = 50;
                    this.drawingData.lifeSpan = 100;
                    this.drawingData.lifeSpanVariance = 30;
                    this.drawingData.initialDirection = 270;
                    this.drawingData.initialDirectionVariance = 60;
                    this.drawingData.initialSpeed = 0.5;
                    this.drawingData.initialSpeedVariance = 0.5;
                    this.drawingData.accelerationSpeed = 0;
                    this.drawingData.accelerationDirection = 0;
                    this.drawingData.startAlpha = 1;
                    this.drawingData.startAlphaVariance = 0;
                    this.drawingData.finishAlpha = 1;
                    this.drawingData.finishAlphaVariance = 0.5;
                    this.drawingData.startScale = 1;
                    this.drawingData.startScaleVariance = 0;
                    this.drawingData.finishScale = 1;
                    this.drawingData.finishScaleVariance = 0;
                    this.drawingData.shapeIdList = [particle_shape_types_1.ParticleShapeTypes.Star, particle_shape_types_1.ParticleShapeTypes.MailFace, particle_shape_types_1.ParticleShapeTypes.Heart, particle_shape_types_1.ParticleShapeTypes.MailMark];
                    this.drawingData.friction;
                    this.drawingData.emitFrequency = 1;
                }
                AppComponent.prototype.handleSVGClick = function () {
                    this.stageComponent.exportSVG().then(this.openSVGExportWindow);
                };
                AppComponent.prototype.handleExportParamaterClick = function () {
                    console.log("handleExportParamaterClick");
                };
                __decorate([
                    core_2.ViewChild("stageComponent"), 
                    __metadata('design:type', stage_component_1.StageComponent)
                ], AppComponent.prototype, "stageComponent", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: template,
                        directives: [stage_component_1.StageComponent, property_component_1.PropertyPanel, shape_property_component_1.ShapePropertyModal],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map