System.register(["angular2/core", 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var template, PropertyPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            template = "\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Canvas Settings</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <input type=\"range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.width\" placeholder=\"width\"/>\n        {{drawingData.width}}\n        <hr>\n        <input type=\"range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.height\" placeholder=\"height\"/>\n        {{drawingData.height}}\n        <hr>\n        <input type=\"color\" [(ngModel)]=\"drawingData.color\" placeholder=\"color\" value=\"{{drawingData.color}}\"/>\n        {{drawingData.color}}\n        <hr>\n        x-value\n        <input type=\"range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.startX\" placeholder=\"startX\"/>\n        {{drawingData.startX}}\n        <input type=\"range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.startXVariance\"\n               placeholder=\"startXVariance\"/>\n        {{drawingData.startXVariance}}\n\n        <hr>\n        y-value\n        <input type=\"range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.startY\" placeholder=\"startY\"/>\n        {{drawingData.startY}}\n        <input type=\"range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.startYVariance\"\n               placeholder=\"startYVariance\"/>\n        {{drawingData.startYVariance}}\n\n\n        <hr>\n        speed\n        <input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" [(ngModel)]=\"drawingData.speed\" placeholder=\"speed\"/>\n        {{drawingData.speed}}\n        <input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" [(ngModel)]=\"drawingData.speedVariance\"\n               placeholder=\"speedVariance\"/>\n        {{drawingData.speedVariance}}\n      </div>\n      <div class=\"col-xs-6\">\n        angle\n        <input type=\"range\" min=\"0\" max=\"360\" step=\"0.1\" [(ngModel)]=\"drawingData.angle\" placeholder=\"angle\"/>\n        {{drawingData.angle}}\n        <input type=\"range\" min=\"0\" max=\"360\" step=\"0.1\" [(ngModel)]=\"drawingData.angleVariance\"\n               placeholder=\"angleVariance\"/>\n        {{drawingData.angleVariance}}\n\n        <hr>\n        start-alpha\n        <input type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" [(ngModel)]=\"drawingData.startAlpha\" placeholder=\"startAlpha\"/>\n        {{drawingData.startAlpha}}\n        <input type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" [(ngModel)]=\"drawingData.startAlphaVariance\"\n               placeholder=\"startAlphaVariance\"/>\n        {{drawingData.startAlphaVariance}}\n\n        <hr>\n        finish-alpha\n        <input type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" [(ngModel)]=\"drawingData.finishAlpha\"\n               placeholder=\"finishAlpha\"/>\n        {{drawingData.finishAlpha}}\n        <input type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" [(ngModel)]=\"drawingData.finishAlphaVariance\"\n               placeholder=\"finishAlphaVariance\"/>\n        {{drawingData.finishAlphaVariance}}\n\n        <hr>\n        life span\n        <input type=\"range\" min=\"10\" max=\"500\" step=\"0.01\" [(ngModel)]=\"drawingData.lifeSpan\" placeholder=\"lifeSpan\"/>\n        {{drawingData.lifeSpan}}\n        <input type=\"range\" min=\"0\" max=\"500\" step=\"0.01\" [(ngModel)]=\"drawingData.lifeSpanVariance\"\n               placeholder=\"lifeSpanVariance\"/>\n        {{drawingData.lifeSpanVariance}}\n        <div>\n          <a href=\"#\" class=\"btn btn-info btn-lg btn-block\" data-toggle=\"modal\" data-target=\"#ShapeModal\">Shapes</a>\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"exportSVG()\">\u4FDD\u5B58</button>\n  </div>\n</div>\n";
            PropertyPanel = (function () {
                function PropertyPanel() {
                    this.greetingMessage = new core_2.EventEmitter();
                }
                PropertyPanel.prototype.exportSVG = function () {
                    this.greetingMessage.emit();
                    console.log("hoge");
                };
                PropertyPanel = __decorate([
                    core_1.Component({
                        selector: "property-panel",
                        template: template,
                        inputs: ["drawingData"],
                        events: ['greetingMessage']
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