System.register(["../i18n/locale-data", "angular2/core", "./input-range.component"], function(exports_1, context_1) {
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
    var locale_data_1, core_1, input_range_component_1;
    var PropertyCanvasPanel;
    return {
        setters:[
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_range_component_1_1) {
                input_range_component_1 = input_range_component_1_1;
            }],
        execute: function() {
            "use strict";
            PropertyCanvasPanel = (function () {
                function PropertyCanvasPanel(localeData) {
                    this.localeData = localeData;
                }
                PropertyCanvasPanel = __decorate([
                    core_1.Component({
                        selector: "canvas-property-panel",
                        template: "<div class=\"card\">\n  <header class=\"card-header\">\n    <h3>{{localeData.SF_head}}</h3>\n  </header>\n  <div class=\"card-block\">\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SF_stageW}}\"\n            min=\"0\" max=\"1024\" step=\"1\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"width\">\n    </input-range>\n\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SF_stageH}}\"\n            min=\"0\" max=\"1024\" step=\"1\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"height\">\n    </input-range>\n  </div>\n</div>\n<hr>\n<div class=\"card\">\n  <header class=\"card-header\">\n    <h3>{{localeData.SF_bgColor}}</h3>\n  </header>\n  <div class=\"card-block\">\n    <input type=\"color\"\n           [(ngModel)]=\"drawingData.bgColor\"\n           placeholder=\"bgColor\"\n           value=\"{{drawingData.bgColor}}\"/>\n    {{drawingData.bgColor}}\n  </div>\n</div>\n",
                        inputs: ["drawingData"],
                        directives: [input_range_component_1.InputRangeComponent]
                    }), 
                    __metadata('design:paramtypes', [locale_data_1.LocaleData])
                ], PropertyCanvasPanel);
                return PropertyCanvasPanel;
            }());
            exports_1("PropertyCanvasPanel", PropertyCanvasPanel);
        }
    }
});
//# sourceMappingURL=property-canvas.component.js.map