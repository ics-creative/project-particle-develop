System.register(["angular2/core", 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, core_3;
    var template, SPPropertyPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_3 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            template = "\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">SP Canvas Settings</h3>\n  </div>\n  <div class=\"panel-body\">\n    <button class=\"btn btn-primary btn-sm btn-block visible-xs\" (click)=\"importCamera()\">\u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u3080</button>\n    <button class=\"btn btn-primary btn-sm btn-block visible-xs\" (click)=\"exportPNG()\">PNG\u4FDD\u5B58</button>\n  </div>\n</div>\n";
            SPPropertyPanel = (function () {
                function SPPropertyPanel(element) {
                    this.exportPNGEvent = new core_2.EventEmitter();
                    this.importCameraEvent = new core_2.EventEmitter();
                    this.element = element;
                }
                SPPropertyPanel.prototype.exportPNG = function () {
                    this.exportPNGEvent.emit(null);
                };
                SPPropertyPanel.prototype.importCamera = function () {
                    this.importCameraEvent.emit(null);
                };
                SPPropertyPanel = __decorate([
                    core_1.Component({
                        selector: "sp-property-panel",
                        template: template,
                        inputs: ["drawingData"],
                        events: [
                            "exportPNGEvent",
                            "importCameraEvent"
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_3.ElementRef])
                ], SPPropertyPanel);
                return SPPropertyPanel;
            })();
            exports_1("SPPropertyPanel", SPPropertyPanel);
        }
    }
});
//# sourceMappingURL=sp-property.component.js.map