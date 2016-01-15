System.register(["angular2/core", "./drawing-data", "./property.component", "./stage.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drawing_data_1, property_component_1, stage_component_1;
    var template, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drawing_data_1_1) {
                drawing_data_1 = drawing_data_1_1;
            },
            function (property_component_1_1) {
                property_component_1 = property_component_1_1;
            },
            function (stage_component_1_1) {
                stage_component_1 = stage_component_1_1;
            }],
        execute: function() {
            template = "\n<div>\n  <stage [drawingData]=\"drawingData\"></stage>\n  <property-panel [drawingData]=\"drawingData\"></property-panel>\n</div>\n";
            AppComponent = (function () {
                function AppComponent() {
                    this.drawingData = new drawing_data_1.DrawingData();
                    this.drawingData.color = "0xFF0000";
                    this.drawingData.width = 100;
                    this.drawingData.height = 100;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: template,
                        directives: [stage_component_1.StageComponent, property_component_1.PropertyPanel]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map