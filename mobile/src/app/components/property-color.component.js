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
                        template: "<div class=\"card\">\n  <header class=\"card-header\">\n    <h3>{{localeData.SC_head_start}}</h3>\n  </header>\n  <div class=\"card-block\">\n    <color-unit-property-panel [colorData]=\"drawingData.startColor\"></color-unit-property-panel>\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SC_startAlpha}}\"\n            min=\"0.0\" max=\"1.0\" step=\"0.01\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"startAlpha\">\n    </input-range>\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SC_startAlphaVariance}}\"\n            min=\"0.0\" max=\"1.0\" step=\"0.01\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"startAlphaVariance\">\n    </input-range>\n  </div>\n</div>\n<hr>\n<div class=\"card\">\n  <header class=\"card-header\">\n    <h3>{{localeData.SC_head_end}}</h3>\n  </header>\n  <div class=\"card-block\">\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SC_endAlpha}}\"\n            min=\"0.0\" max=\"1.0\" step=\"0.01\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"finishAlpha\">\n    </input-range>\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SC_endAlphaVariance}}\"\n            min=\"0.0\" max=\"1.0\" step=\"0.01\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"finishAlphaVariance\">\n    </input-range>\n  </div>\n</div>\n<hr>\n<div class=\"card\">\n  <header class=\"card-header\">\n    <h3>{{localeData.SC_head_alphaCurve}}</h3>\n  </header>\n  <div class=\"card-block\">\n    <select [(ngModel)]=\"drawingData.alphaCurveType\" class=\"topcoat-select\">\n      <option *ngFor=\"#o of objArray\" [value]=\"o.value\">{{o.name}}</option>\n    </select>\n  </div>\n</div>\n<hr>\n<div class=\"card\">\n  <header class=\"card-header\">\n    <h3>{{localeData.SC_head_blendMode}}</h3>\n  </header>\n  <div class=\"card-block\">\n    <label class=\"topcoat-checkbox\">\n      <input type=\"checkbox\" [(ngModel)]=\"drawingData.blendMode\"/>\n      Use lighter\n    </label>\n  </div>\n</div>\n",
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