System.register(["angular2/core", "../assets/particle-parameter", "../i18n/locale-data"], function(exports_1, context_1) {
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
    var core_1, particle_parameter_1, locale_data_1;
    var PropertyTemplatePanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (particle_parameter_1_1) {
                particle_parameter_1 = particle_parameter_1_1;
            },
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            }],
        execute: function() {
            "use strict";
            PropertyTemplatePanel = (function () {
                function PropertyTemplatePanel(localeData) {
                    this.localeData = localeData;
                    var template = new particle_parameter_1.ParticleParameter();
                    this.templateList = template.list;
                }
                PropertyTemplatePanel.prototype.ngOnInit = function () {
                    // テンプレートを適用
                    this.drawingData.importData(this.templateList[0].property);
                };
                PropertyTemplatePanel.prototype.selectTemplate = function (value) {
                    this.drawingData.importData(value);
                };
                PropertyTemplatePanel = __decorate([
                    core_1.Component({
                        selector: "particle-template-property-panel",
                        template: "<div class=\"card text-xs-center\">\n  <header class=\"card-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span></button>\n    <h3>{{localeData.ST_head}}</h3>\n  </header>\n  <hr>\n  <div class=\"card-block row\">\n    <figure *ngFor=\"#template of templateList\"\n            (click)=\"selectTemplate(template.property)\">\n      <img class=\"media-object\" src=\"images/particle-template/{{template.imageId}}.png\" width=\"128\" height=\"128\"/>\n      <figcaption>{{template.name}}</figcaption>\n    </figure>\n  </div>\n</div>\n",
                        inputs: ["drawingData", "templateList"]
                    }), 
                    __metadata('design:paramtypes', [locale_data_1.LocaleData])
                ], PropertyTemplatePanel);
                return PropertyTemplatePanel;
            }());
            exports_1("PropertyTemplatePanel", PropertyTemplatePanel);
        }
    }
});
//# sourceMappingURL=property-template.component.js.map