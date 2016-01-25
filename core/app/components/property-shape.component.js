System.register(["../i18n/locale-data", "angular2/core", "../data/data-shape", "./property-shape-itemrenderer.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var locale_data_1, core_1, data_shape_1, property_shape_itemrenderer_component_1;
    var PropertyShapePanel;
    return {
        setters:[
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_shape_1_1) {
                data_shape_1 = data_shape_1_1;
            },
            function (property_shape_itemrenderer_component_1_1) {
                property_shape_itemrenderer_component_1 = property_shape_itemrenderer_component_1_1;
            }],
        execute: function() {
            "use strict";
            PropertyShapePanel = (function () {
                function PropertyShapePanel(localeData) {
                    this.localeData = localeData;
                    this.shapeIdList = new data_shape_1.ShapeData().assetList;
                }
                PropertyShapePanel.prototype.handleClick = function (shapeId) {
                    var index = this.drawingData.shapeIdList.indexOf(shapeId);
                    if (index == -1) {
                        // 追加
                        this.drawingData.shapeIdList.push(shapeId);
                    }
                    else {
                        // 2個以上のときのみ
                        if (this.drawingData.shapeIdList.length >= 2) {
                            // 削除
                            this.drawingData.shapeIdList.splice(index, 1);
                        }
                    }
                };
                PropertyShapePanel = __decorate([
                    core_1.Component({
                        selector: "shape-property-panel",
                        templateUrl: "app/components-html/property-shape.html",
                        inputs: ["drawingData", "shapeIdList"],
                        directives: [property_shape_itemrenderer_component_1.PropertyShapeItemRenderer]
                    }), 
                    __metadata('design:paramtypes', [locale_data_1.LocaleData])
                ], PropertyShapePanel);
                return PropertyShapePanel;
            })();
            exports_1("PropertyShapePanel", PropertyShapePanel);
        }
    }
});
//# sourceMappingURL=property-shape.component.js.map