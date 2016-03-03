System.register(["../i18n/locale-data", "angular2/core", "./property-color-unit.component", "./input-range.component", "angular2/common"], function(exports_1, context_1) {
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
    var locale_data_1, core_1, property_color_unit_component_1, input_range_component_1, common_1;
    var PropertyColorPanel;
    return {
        setters:[
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_color_unit_component_1_1) {
                property_color_unit_component_1 = property_color_unit_component_1_1;
            },
            function (input_range_component_1_1) {
                input_range_component_1 = input_range_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            "use strict";
            PropertyColorPanel = (function () {
                function PropertyColorPanel(localeData) {
                    this.localeData = localeData;
                    this.objArray = [
                        { name: 'Normal', value: particlejs.AlphaCurveType.Normal },
                        { name: 'Random', value: particlejs.AlphaCurveType.Random }
                    ];
                }
                PropertyColorPanel = __decorate([
                    core_1.Component({
                        selector: "color-property-panel",
                        templateUrl: "app/components-html/property-color.html",
                        inputs: ["drawingData"],
                        directives: [property_color_unit_component_1.PropertyColorUnit, input_range_component_1.InputRangeComponent, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [locale_data_1.LocaleData])
                ], PropertyColorPanel);
                return PropertyColorPanel;
            }());
            exports_1("PropertyColorPanel", PropertyColorPanel);
        }
    }
});
//# sourceMappingURL=property-color.component.js.map