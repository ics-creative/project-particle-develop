System.register(["angular2/core", "../data/drawing-data", "./property.component", "./desktop-io.component", "./mobile-io.component", "./stage.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drawing_data_1, property_component_1, desktop_io_component_1, mobile_io_component_1, stage_component_1, core_2, core_3;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            },
            function (drawing_data_1_1) {
                drawing_data_1 = drawing_data_1_1;
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
            function (stage_component_1_1) {
                stage_component_1 = stage_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(element) {
                    this.drawingData = new drawing_data_1.DrawingData();
                }
                AppComponent.prototype.handleSVGClick = function () {
                    this.stageComponent.exportSVG().then(this.openSVGExportWindow);
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
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "app/components/template/app.html",
                        directives: [stage_component_1.StageComponent, property_component_1.PropertyPanel, desktop_io_component_1.DesktopIOBox, mobile_io_component_1.MobileIOBox]
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