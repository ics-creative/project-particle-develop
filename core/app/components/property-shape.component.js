System.register(["angular2/core", "../data/shape-data", "./property-shape-itemrenderer.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shape_data_1, property_shape_itemrenderer_component_1;
    var PropertyShapePanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shape_data_1_1) {
                shape_data_1 = shape_data_1_1;
            },
            function (property_shape_itemrenderer_component_1_1) {
                property_shape_itemrenderer_component_1 = property_shape_itemrenderer_component_1_1;
            }],
        execute: function() {
            PropertyShapePanel = (function () {
                function PropertyShapePanel() {
                    this.shapeIdList = new shape_data_1.ShapeData().assetList;
                }
                PropertyShapePanel.prototype.handleClick = function (shapeId) {
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
                PropertyShapePanel = __decorate([
                    core_1.Component({
                        selector: "shape-property-panel",
                        templateUrl: "app/components/template/property-shape.html",
                        inputs: ["drawingData", "shapeIdList"],
                        directives: [property_shape_itemrenderer_component_1.PropertyShapeItemRenderer]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyShapePanel);
                return PropertyShapePanel;
            })();
            exports_1("PropertyShapePanel", PropertyShapePanel);
        }
    }
});
//# sourceMappingURL=property-shape.component.js.map