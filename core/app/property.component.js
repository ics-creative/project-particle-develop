System.register(["angular2/core"], function(exports_1) {
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
    var template, PropertyPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            template = "\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Canvas Settings</h3>\n  </div>\n  <div class=\"panel-body\">\n      <input type=\"range\" min=\"0\" max=\"100\" step=\"1\" [(ngModel)]=\"drawingData.width\" placeholder=\"width\" />\n      {{drawingData.width}}\n      <hr>\n      <input type=\"range\" min=\"0\" max=\"100\" step=\"1\" [(ngModel)]=\"drawingData.height\" placeholder=\"height\" />\n      {{drawingData.height}}\n      <hr>\n      <input type=\"color\" [(ngModel)]=\"drawingData.color\" placeholder=\"color\" value=\"{{drawingData.color}}\" />\n      {{drawingData.color}}\n      <hr>\n      <button class=\"btn btn-primary\">\u4FDD\u5B58</button>\n  </div>\n</div>\n";
            PropertyPanel = (function () {
                function PropertyPanel() {
                }
                PropertyPanel = __decorate([
                    core_1.Component({
                        selector: "property-panel",
                        template: template,
                        inputs: ["drawingData"]
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