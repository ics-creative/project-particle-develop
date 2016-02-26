System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var InputRangeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputRangeComponent = (function () {
                function InputRangeComponent() {
                }
                InputRangeComponent.prototype.handleChange = function (event) {
                    // なぜか string になっている可能性がある
                    var tmp = this.drawingData;
                    var value = tmp[this.targetProperty];
                    // そのため、明示的な型変換を行う
                    tmp[this.targetProperty] = Number(value);
                };
                InputRangeComponent = __decorate([
                    core_1.Component({
                        selector: "input-range",
                        templateUrl: "app/components-html/input-range.html",
                        inputs: ["drawingData", "targetProperty", "label", "min", "max", "step"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputRangeComponent);
                return InputRangeComponent;
            }());
            exports_1("InputRangeComponent", InputRangeComponent);
        }
    }
});
//# sourceMappingURL=input-range.component.js.map