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
            template = "\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Canvas Settings</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"row hidden-xs\">\n      <div class=\"col-xs-6\">\n        width <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.width\" placeholder=\"width\"/>\n        {{drawingData.width}}\n        height <input type=\"range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.height\" placeholder=\"height\"/>\n        {{drawingData.height}}\n        <hr>\n        <input type=\"color\" [(ngModel)]=\"drawingData.bgColor\" placeholder=\"bgColor\" value=\"{{drawingData.bgColor}}\"/>\n        {{drawingData.bgColor}}\n\n\n        <hr>\n        <input type=\"color\" [(ngModel)]=\"drawingData.startColor\" placeholder=\"startColor\" value=\"{{drawingData.startColor}}\"/>\n        {{drawingData.startColor}}\n        <hr>\n        x-value\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.startX\" placeholder=\"startX\"/>\n        {{drawingData.startX}}\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.startXVariance\"\n               placeholder=\"startXVariance\"/>\n        {{drawingData.startXVariance}}\n\n        <hr>\n        y-value\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.startY\" placeholder=\"startY\"/>\n        {{drawingData.startY}}\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"500\" step=\"1\" [(ngModel)]=\"drawingData.startYVariance\"\n               placeholder=\"startYVariance\"/>\n        {{drawingData.startYVariance}}\n\n\n        <hr>\n        initial speed\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"20\" step=\"0.1\" [(ngModel)]=\"drawingData.initialSpeed\" placeholder=\"initialSpeed\"/>\n        {{drawingData.initialSpeed}}\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"20\" step=\"0.1\" [(ngModel)]=\"drawingData.initialSpeedVariance\"\n               placeholder=\"initialSpeedVariance\"/>\n        {{drawingData.initialSpeedVariance}}\n        <hr>\n\n        start-direction(angle)\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"360\" step=\"0.1\" [(ngModel)]=\"drawingData.initialDirection\" placeholder=\"initialDirection\"/>\n        {{drawingData.initialDirection}}\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"360\" step=\"0.1\" [(ngModel)]=\"drawingData.initialDirectionVariance\"\n               placeholder=\"initialDirectionVariance\"/>\n        {{drawingData.initialDirectionVariance}}\n\n\n        <hr>\n        friction\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"0.5\" step=\"0.001\" [(ngModel)]=\"drawingData.friction\" placeholder=\"friction\"/>\n        {{drawingData.friction}}\n\n\n        <hr>\n        acceleration speed\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"20\" step=\"0.1\" [(ngModel)]=\"drawingData.accelerationSpeed\" placeholder=\"accelerationSpeed\"/>\n        {{drawingData.accelerationSpeed}}\n\n        acceleration direction\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"360\" step=\"0.1\" [(ngModel)]=\"drawingData.accelerationDirection\" placeholder=\"accelerationDirection\"/>\n        {{drawingData.accelerationDirection}}\n        <hr>\n\n      </div>\n      <div class=\"col-xs-6\">\n        <hr>\n        start-alpha\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"1\" step=\"0.01\" [(ngModel)]=\"drawingData.startAlpha\" placeholder=\"startAlpha\"/>\n        {{drawingData.startAlpha}}\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"1\" step=\"0.01\" [(ngModel)]=\"drawingData.startAlphaVariance\"\n               placeholder=\"startAlphaVariance\"/>\n        {{drawingData.startAlphaVariance}}\n\n        <hr>\n        finish-alpha\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"1\" step=\"0.01\" [(ngModel)]=\"drawingData.finishAlpha\"\n               placeholder=\"finishAlpha\"/>\n        {{drawingData.finishAlpha}}\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"1\" step=\"0.01\" [(ngModel)]=\"drawingData.finishAlphaVariance\"\n               placeholder=\"finishAlphaVariance\"/>\n        {{drawingData.finishAlphaVariance}}\n\n\n        <hr>\n        start-scale\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"5\" step=\"0.01\" [(ngModel)]=\"drawingData.startScale\" placeholder=\"startScale\"/>\n        {{drawingData.startScale}}\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"5\" step=\"0.01\" [(ngModel)]=\"drawingData.startScaleVariance\"\n               placeholder=\"startScaleVariance\"/>\n        {{drawingData.startScaleVariance}}\n\n        <hr>\n        finish-scale\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"5\" step=\"0.01\" [(ngModel)]=\"drawingData.finishScale\"\n               placeholder=\"finishScale\"/>\n        {{drawingData.finishScale}}\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"5\" step=\"0.01\" [(ngModel)]=\"drawingData.finishScaleVariance\"\n               placeholder=\"finishScaleVariance\"/>\n        {{drawingData.finishScaleVariance}}\n\n\n\n        <hr>\n        emit frequency\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"20\" step=\"1\" [(ngModel)]=\"drawingData.emitFrequency\"\n               placeholder=\"emitFrequency\"/>\n        {{drawingData.emitFrequency}}\n         <hr>\n        life span\n        <input type=\"range\" class=\"topcoat-range\" min=\"10\" max=\"500\" step=\"0.01\" [(ngModel)]=\"drawingData.lifeSpan\" placeholder=\"lifeSpan\"/>\n        {{drawingData.lifeSpan}}\n        <input type=\"range\" class=\"topcoat-range\" min=\"0\" max=\"500\" step=\"0.01\" [(ngModel)]=\"drawingData.lifeSpanVariance\"\n               placeholder=\"lifeSpanVariance\"/>\n        {{drawingData.lifeSpanVariance}}\n        <div>\n          <a href=\"#\" class=\"btn btn-info btn-lg btn-block\" data-toggle=\"modal\" data-target=\"#ShapeModal\">Shapes</a>\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-primary btn-lg btn-block hidden-xs\" (click)=\"exportSVG()\">SVG\u4FDD\u5B58</button>\n    <button class=\"btn btn-primary btn-lg btn-block hidden-xs\" (click)=\"exportParamater()\">\u30D1\u30E9\u30E1\u30FC\u30BF\u4FDD\u5B58</button>\n    <button class=\"btn btn-primary btn-lg btn-block visible-xs\" (click)=\"exportPNG()\">PNG\u4FDD\u5B58</button>\n  </div>\n</div>\n";
            PropertyPanel = (function () {
                function PropertyPanel() {
                    this.exportSVGEvent = new core_2.EventEmitter();
                    this.exportPNGEvent = new core_2.EventEmitter();
                    this.exportParamaterEvent = new core_2.EventEmitter();
                }
                PropertyPanel.prototype.exportParamater = function () {
                    this.exportParamaterEvent.emit(null);
                };
                PropertyPanel.prototype.exportSVG = function () {
                    this.exportSVGEvent.emit(null);
                };
                PropertyPanel.prototype.exportPNG = function () {
                    this.exportPNGEvent.emit(null);
                };
                PropertyPanel = __decorate([
                    core_1.Component({
                        selector: "property-panel",
                        template: template,
                        inputs: ["drawingData"],
                        events: ["exportSVGEvent", "exportParamaterEvent", "exportPNGEvent"]
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