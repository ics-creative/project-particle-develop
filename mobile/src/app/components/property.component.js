System.register(["../i18n/locale-data", "angular2/core", "./property-color-unit.component", "./property-emitter.component", "./property-particle.component", "./property-color.component", "./property-template.component", "./property-shape.component", "./property-canvas.component"], function(exports_1, context_1) {
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
    var locale_data_1, core_1, property_color_unit_component_1, property_emitter_component_1, property_particle_component_1, property_color_component_1, property_template_component_1, property_shape_component_1, property_canvas_component_1;
    var PropertyPanel;
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
            function (property_emitter_component_1_1) {
                property_emitter_component_1 = property_emitter_component_1_1;
            },
            function (property_particle_component_1_1) {
                property_particle_component_1 = property_particle_component_1_1;
            },
            function (property_color_component_1_1) {
                property_color_component_1 = property_color_component_1_1;
            },
            function (property_template_component_1_1) {
                property_template_component_1 = property_template_component_1_1;
            },
            function (property_shape_component_1_1) {
                property_shape_component_1 = property_shape_component_1_1;
            },
            function (property_canvas_component_1_1) {
                property_canvas_component_1 = property_canvas_component_1_1;
            }],
        execute: function() {
            "use strict";
            PropertyPanel = (function () {
                function PropertyPanel(localeData) {
                    this.localeData = localeData;
                }
                PropertyPanel = __decorate([
                    core_1.Component({
                        selector: "property-panel",
                        template: "<div class=\"card card-primary\">\n  <header class=\"card-header\">\n    <h2 class=\"card-title\">{{localeData.settings_head}}</h2>\n  </header>\n  <div class=\"card-block\">\n    <!--\u30BF\u30D6-->\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\"><a class=\"nav-link active\" href=\"#tab1\" data-toggle=\"tab\" title=\"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u8A2D\u5B9A\"><i class=\"fa fa-cloud\"></i></a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#tab2\" data-toggle=\"tab\" title=\"\u30A8\u30DF\u30C3\u30BF\u30FC\u8A2D\u5B9A\"><i class=\"fa fa-gears\"></i></a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#tab3\" data-toggle=\"tab\" title=\"\u30D1\u30FC\u30C6\u30A3\u30AF\u30EB\u8A2D\u5B9A\"><i class=\"fa fa-sliders\"></i></a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#tab4\" data-toggle=\"tab\" title=\"\u30AB\u30E9\u30FC\u8A2D\u5B9A\"><i class=\"fa fa-paint-brush\"></i></a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#tab5\" data-toggle=\"tab\" title=\"\u5F62\u72B6\u8A2D\u5B9A\"><i class=\"fa fa-star\"></i></a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#tab6\" data-toggle=\"tab\" title=\"\u30AD\u30E3\u30F3\u30D0\u30B9\u8A2D\u5B9A\"><i class=\"fa fa-gear\"></i></a></li>\n    </ul>\n    <!-- / \u30BF\u30D6-->\n    <div class=\"tab-content\">\n      <particle-template-property-panel\n              id=\"tab1\"\n              class=\"tab-pane active particle-template-property-panel\"\n              [drawingData]=\"drawingData\">\n      </particle-template-property-panel>\n\n      <emitter-property-panel\n              class=\"tab-pane\"\n              id=\"tab2\"\n              [drawingData]=\"drawingData\">\n      </emitter-property-panel>\n\n      <particle-property-panel\n              id=\"tab3\"\n              class=\"tab-pane\"\n              [drawingData]=\"drawingData\">\n      </particle-property-panel>\n\n      <color-property-panel\n              id=\"tab4\"\n              class=\"tab-pane\"\n              [drawingData]=\"drawingData\">\n      </color-property-panel>\n\n      <shape-property-panel\n              id=\"tab5\"\n              class=\"tab-pane shape-property-panel\"\n              [drawingData]=\"drawingData\">\n      </shape-property-panel>\n\n      <canvas-property-panel\n              id=\"tab6\"\n              class=\"tab-pane\"\n              [drawingData]=\"drawingData\">\n      </canvas-property-panel>\n    </div>\n  </div>\n</div>",
                        inputs: ["drawingData"],
                        directives: [
                            property_color_unit_component_1.PropertyColorUnit,
                            property_emitter_component_1.PropertyEmitterPanel,
                            property_particle_component_1.PropertyParticlePanel,
                            property_color_component_1.PropertyColorPanel,
                            property_template_component_1.PropertyTemplatePanel,
                            property_shape_component_1.PropertyShapePanel,
                            property_canvas_component_1.PropertyCanvasPanel],
                    }), 
                    __metadata('design:paramtypes', [locale_data_1.LocaleData])
                ], PropertyPanel);
                return PropertyPanel;
            }());
            exports_1("PropertyPanel", PropertyPanel);
        }
    }
});
//# sourceMappingURL=property.component.js.map