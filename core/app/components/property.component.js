System.register(["angular2/core", "./color-unit-property.component", "./emitter-property.component", "./particle-property.component", "./color-property-panel", "./particle-template-property", "./shape-property.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, color_unit_property_component_1, emitter_property_component_1, particle_property_component_1, color_property_panel_1, particle_template_property_1, shape_property_component_1;
    var PropertyPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (color_unit_property_component_1_1) {
                color_unit_property_component_1 = color_unit_property_component_1_1;
            },
            function (emitter_property_component_1_1) {
                emitter_property_component_1 = emitter_property_component_1_1;
            },
            function (particle_property_component_1_1) {
                particle_property_component_1 = particle_property_component_1_1;
            },
            function (color_property_panel_1_1) {
                color_property_panel_1 = color_property_panel_1_1;
            },
            function (particle_template_property_1_1) {
                particle_template_property_1 = particle_template_property_1_1;
            },
            function (shape_property_component_1_1) {
                shape_property_component_1 = shape_property_component_1_1;
            }],
        execute: function() {
            PropertyPanel = (function () {
                function PropertyPanel() {
                }
                PropertyPanel = __decorate([
                    core_1.Component({
                        selector: "property-panel",
                        templateUrl: "app/components/template/property.html",
                        inputs: ["drawingData"],
                        directives: [
                            color_unit_property_component_1.ColorUnitPropertyPanel,
                            emitter_property_component_1.EmitterPropertyPanel,
                            particle_property_component_1.ParticlePropertyPanel,
                            color_property_panel_1.ColorPropertyPanel,
                            particle_template_property_1.ParticleTemplatePropertyPanel,
                            shape_property_component_1.ShapePropertyModal]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyPanel);
                return PropertyPanel;
            })();
            exports_1("PropertyPanel", PropertyPanel);
        }
    }
});
//# sourceMappingURL=property.component.js.map