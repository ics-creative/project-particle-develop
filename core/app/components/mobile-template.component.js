System.register(["angular2/core", "../assets/particle-paramater"], function(exports_1) {
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
    var core_1, particle_paramater_1;
    var MobilePropertyTemplateModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (particle_paramater_1_1) {
                particle_paramater_1 = particle_paramater_1_1;
            }],
        execute: function() {
            MobilePropertyTemplateModal = (function () {
                function MobilePropertyTemplateModal() {
                    var template = new particle_paramater_1.ParticleParamater();
                    this.templateList = template.list;
                }
                MobilePropertyTemplateModal.prototype.ngOnInit = function () {
                    // テンプレートを適用
                    this.drawingData.into(this.templateList[0].property);
                };
                MobilePropertyTemplateModal.prototype.selectTemplate = function (value) {
                    this.drawingData.into(value);
                };
                MobilePropertyTemplateModal = __decorate([
                    core_1.Component({
                        selector: "mobile-particle-template-property-modal",
                        templateUrl: "app/components-html/property-template.html",
                        inputs: ["drawingData", "templateList"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MobilePropertyTemplateModal);
                return MobilePropertyTemplateModal;
            })();
            exports_1("MobilePropertyTemplateModal", MobilePropertyTemplateModal);
        }
    }
});
//# sourceMappingURL=mobile-template.component.js.map