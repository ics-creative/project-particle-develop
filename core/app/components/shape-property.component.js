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
    var ShapePropertyModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShapePropertyModal = (function () {
                function ShapePropertyModal() {
                    var _this = this;
                    this.selectShape = function (shapeId) {
                        console.log("selectapp:" + shapeId);
                        //  ラジオボタンとかにすればテンポラリ選択不要そう
                        _this.temporarySelect = shapeId;
                    };
                    this.saveChanges = function () {
                        // TODO:配列で選択できるようにする
                        _this.drawingData.shapeIdList = [_this.temporarySelect];
                    };
                }
                ShapePropertyModal = __decorate([
                    core_1.Component({
                        selector: "shape-property-modal",
                        templateUrl: "app/components/template/shape-property.html",
                        inputs: ["drawingData"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShapePropertyModal);
                return ShapePropertyModal;
            })();
            exports_1("ShapePropertyModal", ShapePropertyModal);
        }
    }
});
//# sourceMappingURL=shape-property.component.js.map