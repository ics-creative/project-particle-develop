System.register(["angular2/core", "../data/data-drawing", "./property.component", "./desktop-io.component", "./mobile-io.component", "./mobile-template.component", "./stage.component", "../enum/view-port", "../enum/canvas-margin"], function(exports_1) {
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
    var core_1, data_drawing_1, property_component_1, desktop_io_component_1, mobile_io_component_1, mobile_template_component_1, stage_component_1, core_2, core_3, view_port_1, canvas_margin_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            },
            function (data_drawing_1_1) {
                data_drawing_1 = data_drawing_1_1;
            },
            function (property_component_1_1) {
                property_component_1 = property_component_1_1;
            },
            function (desktop_io_component_1_1) {
                desktop_io_component_1 = desktop_io_component_1_1;
            },
            function (mobile_io_component_1_1) {
                mobile_io_component_1 = mobile_io_component_1_1;
            },
            function (mobile_template_component_1_1) {
                mobile_template_component_1 = mobile_template_component_1_1;
            },
            function (stage_component_1_1) {
                stage_component_1 = stage_component_1_1;
            },
            function (view_port_1_1) {
                view_port_1 = view_port_1_1;
            },
            function (canvas_margin_1_1) {
                canvas_margin_1 = canvas_margin_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(element) {
                    this.drawingData = new data_drawing_1.DrawingData();
                    // ステージサイズに対して適当な値を適用する
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
                    var sw = canvasWidth * 2 / 3;
                    var sh = canvasHeight * 2 / 3;
                    this.drawingData.startX = sw / 2;
                    this.drawingData.startY = sh / 2;
                    this.drawingData.width = sw;
                    this.drawingData.height = sh;
                    this.adjustUi();
                }
                /**
                 * UIの表示制御
                 */
                AppComponent.prototype.adjustUi = function () {
                    document.getElementById("fileSelectUi").style.display;
                };
                AppComponent.prototype.handleSVGClick = function () {
                    var _this = this;
                    this.stageComponent.exportSVG().then(function () {
                        _this.openSVGExportWindow();
                    });
                };
                AppComponent.prototype.handleJPEGClick = function () {
                    var dataUrl = this.stageComponent.toDataURL('image/jpeg', "0.8");
                    window.open(dataUrl);
                };
                AppComponent.prototype.handlePNGClick = function () {
                    var dataUrl = this.stageComponent.toDataURL('image/png', null);
                    window.open(dataUrl);
                };
                AppComponent.prototype.openSVGExportWindow = function () {
                    window.open("data:image/svg+xml,\n" + encodeURIComponent(this.stageComponent.getParticleSVGString()));
                };
                AppComponent.prototype.handleExportParamaterClick = function () {
                    window.open("data:text/plain;charset=UTF-8,\n" + encodeURIComponent(JSON.stringify(this.drawingData)));
                };
                __decorate([
                    core_2.ViewChild("stageComponent"), 
                    __metadata('design:type', stage_component_1.StageComponent)
                ], AppComponent.prototype, "stageComponent", void 0);
                __decorate([
                    core_2.ViewChild("propertyPanel"), 
                    __metadata('design:type', property_component_1.PropertyPanel)
                ], AppComponent.prototype, "propertyPanel", void 0);
                __decorate([
                    core_2.ViewChild("desktopIOBox"), 
                    __metadata('design:type', desktop_io_component_1.DesktopIOBox)
                ], AppComponent.prototype, "desktopIOBox", void 0);
                __decorate([
                    core_2.ViewChild("mobileIOBox"), 
                    __metadata('design:type', mobile_io_component_1.MobileIOBox)
                ], AppComponent.prototype, "mobileIOBox", void 0);
                __decorate([
                    core_2.ViewChild("MobilePropertyTemplateModal"), 
                    __metadata('design:type', mobile_template_component_1.MobilePropertyTemplateModal)
                ], AppComponent.prototype, "mobilePropertyTemplateModal", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "app/components/template/app.html",
                        directives: [stage_component_1.StageComponent, property_component_1.PropertyPanel, desktop_io_component_1.DesktopIOBox, mobile_io_component_1.MobileIOBox, mobile_template_component_1.MobilePropertyTemplateModal]
                    }), 
                    __metadata('design:paramtypes', [core_3.ElementRef])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map