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
    var PropertyParticlePanel;
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
            PropertyParticlePanel = (function () {
                function PropertyParticlePanel(localeData) {
                    this.localeData = localeData;
                }
                PropertyParticlePanel = __decorate([
                    core_1.Component({
                        selector: "particle-property-panel",
                        template: "<div class=\"card\">\n  <header class=\"card-header\">\n    <h3>{{localeData.SP_head}}</h3>\n  </header>\n  <hr>\n  <div class=\"card-block\">\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SP_startScale}}\"\n            min=\"0.0\" max=\"1.0\" step=\"0.01\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"startScale\">\n    </input-range>\n\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SP_startScaleVariance}}\"\n            min=\"0.0\" max=\"1.0\" step=\"0.01\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"startScaleVariance\">\n    </input-range>\n\n\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SP_endScale}}\"\n            min=\"0.0\" max=\"1.0\" step=\"0.01\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"finishScale\">\n    </input-range>\n\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SP_endScaleVariance}}\"\n            min=\"0.0\" max=\"1.0\" step=\"0.01\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"finishScaleVariance\">\n    </input-range>\n\n    <hr/>\n\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SP_lifeSpan}}\"\n            min=\"1\" max=\"500\" step=\"1.0\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"lifeSpan\">\n    </input-range>\n\n    <input-range\n            class=\"input-range\"\n            label=\"{{localeData.SP_lifeSpanVariance}}\"\n            min=\"0\" max=\"500\" step=\"1.0\"\n            [drawingData]=\"drawingData\"\n            targetProperty=\"lifeSpanVariance\">\n    </input-range>\n  </div>\n</div>",
                        inputs: ["drawingData", "shapeIdList"],
                        directives: [input_range_component_1.InputRangeComponent]
                    }), 
                    __metadata('design:paramtypes', [locale_data_1.LocaleData])
                ], PropertyParticlePanel);
                return PropertyParticlePanel;
            }());
            exports_1("PropertyParticlePanel", PropertyParticlePanel);
        }
    }
});
//# sourceMappingURL=property-particle.component.js.map