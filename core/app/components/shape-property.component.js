System.register(["angular2/core", "../data/shape-data"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shape_data_1;
    var ShapePropertyModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shape_data_1_1) {
                shape_data_1 = shape_data_1_1;
            }],
        execute: function() {
            ShapePropertyModal = (function () {
                function ShapePropertyModal() {
                    this.shapeIdList = new shape_data_1.ShapeData().assetList;
                }
                ShapePropertyModal.prototype.handleClick = function (shapeId) {
                    var index = this.drawingData.shapeIdList.indexOf(shapeId);
                    if (index == -1) {
                        // 追加
                        this.drawingData.shapeIdList.push(shapeId);
                    }
                    else {
                        // 削除
                        this.drawingData.shapeIdList.splice(index, 1);
                    }
                };
                ShapePropertyModal = __decorate([
                    core_1.Component({
                        selector: "shape-property-panel",
                        templateUrl: "app/components/template/shape-property.html",
                        inputs: ["drawingData", "shapeIdList"]
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