System.register(["angular2/core", "../i18n/locale-data"], function(exports_1, context_1) {
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
    var core_1, locale_data_1, core_2, core_3;
    var PropertyIoModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            },
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            }],
        execute: function() {
            "use strict";
            PropertyIoModal = (function () {
                function PropertyIoModal(element, localeData) {
                    this.localeData = localeData;
                    this.element = element;
                }
                PropertyIoModal.prototype.setIOButtonLink = function (json) {
                    var link = this.outputLink.nativeElement;
                    link.download = "paramater.json";
                    var blob = new Blob([json], { type: "application/json" });
                    link.href = window.URL.createObjectURL(blob);
                    var textarea = this.jsonValue.nativeElement;
                    //  テキストエリアに値をセットする
                    textarea.value = (json);
                    textarea.addEventListener("click", function () {
                        //テキストエリアをフォーカスする
                        textarea.focus();
                        //テキストエリアを全選択する
                        textarea.select();
                    });
                };
                PropertyIoModal.prototype.openIOModal = function () {
                    $(this.modal.nativeElement).modal('show');
                };
                __decorate([
                    core_2.ViewChild("modal"), 
                    __metadata('design:type', Object)
                ], PropertyIoModal.prototype, "modal", void 0);
                __decorate([
                    core_2.ViewChild("outputLink"), 
                    __metadata('design:type', Object)
                ], PropertyIoModal.prototype, "outputLink", void 0);
                __decorate([
                    core_2.ViewChild("jsonValue"), 
                    __metadata('design:type', Object)
                ], PropertyIoModal.prototype, "jsonValue", void 0);
                PropertyIoModal = __decorate([
                    core_1.Component({
                        selector: "property-io-box",
                        templateUrl: "app/components-html/property-io-box.html",
                        inputs: ["drawingData"],
                        events: []
                    }), 
                    __metadata('design:paramtypes', [core_3.ElementRef, locale_data_1.LocaleData])
                ], PropertyIoModal);
                return PropertyIoModal;
            }());
            exports_1("PropertyIoModal", PropertyIoModal);
        }
    }
});
//# sourceMappingURL=property-io.component.js.map