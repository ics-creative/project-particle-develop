System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var SmallIOBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            SmallIOBox = (function () {
                function SmallIOBox(element) {
                    this.exportPngEvent = new core_2.EventEmitter();
                    this.importCameraEvent = new core_2.EventEmitter();
                    this.element = element;
                }
                SmallIOBox.prototype.exportPng = function () {
                    this.exportPngEvent.emit(null);
                };
                SmallIOBox.prototype.importCamera = function () {
                    alert("あああああ");
                    this.importCameraEvent.emit(null);
                };
                SmallIOBox = __decorate([
                    core_1.Component({
                        selector: "small-io-box",
                        template: "<ul class=\"row hidden-md-up\">\n  <li>\n    <a class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#smallParticleTemplate\"><i class=\"fa fa-cloud\"></i></a>\n  </li>\n  <li>\n    <a class=\"btn btn-primary\" (click)=\"importCamera()\"><i class=\"fa fa-camera\"></i></a>\n  </li>\n  <li>\n    <a class=\"btn btn-primary\" (click)=\"exportPng()\"><i class=\"fa fa-file-image-o\"></i></a>\n  </li>\n</ul>\n",
                        inputs: ["drawingData"],
                        events: [
                            "exportPngEvent",
                            "importCameraEvent"
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_3.ElementRef])
                ], SmallIOBox);
                return SmallIOBox;
            }());
            exports_1("SmallIOBox", SmallIOBox);
        }
    }
});
//# sourceMappingURL=small-io.component.js.map