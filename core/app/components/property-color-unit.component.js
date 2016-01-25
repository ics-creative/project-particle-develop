System.register(["angular2/core", "./input-range.component"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, input_range_component_1;
    var PropertyColorUnit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_range_component_1_1) {
                input_range_component_1 = input_range_component_1_1;
            }],
        execute: function() {
            PropertyColorUnit = (function () {
                function PropertyColorUnit() {
                }
                PropertyColorUnit = __decorate([
                    core_1.Component({
                        selector: "color-unit-property-panel",
                        templateUrl: "app/components-html/property-color-unit.html",
                        inputs: ["colorData"],
                        directives: [input_range_component_1.InputRangeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyColorUnit);
                return PropertyColorUnit;
            })();
            exports_1("PropertyColorUnit", PropertyColorUnit);
        }
    }
});
//# sourceMappingURL=property-color-unit.component.js.map