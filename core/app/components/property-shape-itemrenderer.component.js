System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PropertyShapeItemRenderer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            "use strict";
            PropertyShapeItemRenderer = (function () {
                function PropertyShapeItemRenderer() {
                }
                PropertyShapeItemRenderer.prototype.ngAfterViewInit = function () {
                    var canvas = this.myCanvas.nativeElement;
                    var stage = new createjs.Stage(canvas);
                    // Adobe Animate CCから書きだしたシェイプを使う
                    var namespaceObj = window["lib"];
                    var cls = namespaceObj[this.shapeId];
                    var shape = new cls();
                    shape.x = 32;
                    shape.y = 32;
                    shape.scaleX = shape.scaleY = 0.5;
                    // はい、レンダーする
                    stage.addChild(shape);
                    // おわり
                    stage.update();
                };
                __decorate([
                    core_1.ViewChild("myCanvas"), 
                    __metadata('design:type', Object)
                ], PropertyShapeItemRenderer.prototype, "myCanvas", void 0);
                PropertyShapeItemRenderer = __decorate([
                    core_1.Component({
                        selector: "shape-itemrenderer",
                        templateUrl: "app/components-html/property-shape-itemrenderer.html",
                        inputs: ["shapeId"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyShapeItemRenderer);
                return PropertyShapeItemRenderer;
            })();
            exports_1("PropertyShapeItemRenderer", PropertyShapeItemRenderer);
        }
    }
});
//# sourceMappingURL=property-shape-itemrenderer.component.js.map