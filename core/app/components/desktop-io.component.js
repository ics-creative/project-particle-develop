System.register(["angular2/core", "../i18n/locale-data", "../i18n/locale-en", "../i18n/locale-ja", "../i18n/locale-manager"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, locale_data_1, locale_en_1, locale_ja_1, locale_manager_1;
    var DesktopIoBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            },
            function (locale_en_1_1) {
                locale_en_1 = locale_en_1_1;
            },
            function (locale_ja_1_1) {
                locale_ja_1 = locale_ja_1_1;
            },
            function (locale_manager_1_1) {
                locale_manager_1 = locale_manager_1_1;
            }],
        execute: function() {
            "use strict";
            DesktopIoBox = (function () {
                function DesktopIoBox(localeData) {
                    this.localeData = localeData;
                    this.exportSvgEvent = new core_1.EventEmitter();
                    this.exportPngEvent = new core_1.EventEmitter();
                    this.exportJpgEvent = new core_1.EventEmitter();
                    this.exportWebpEvent = new core_1.EventEmitter();
                    this.exportParamaterEvent = new core_1.EventEmitter();
                    this.importParameterEvent = new core_1.EventEmitter();
                }
                DesktopIoBox.prototype.exportParamater = function () {
                    this.exportParamaterEvent.emit(null);
                };
                DesktopIoBox.prototype.exportSvg = function () {
                    this.exportSvgEvent.emit(null);
                };
                DesktopIoBox.prototype.exportPng = function () {
                    this.exportPngEvent.emit(null);
                };
                DesktopIoBox.prototype.exportJpg = function () {
                    this.exportJpgEvent.emit(null);
                };
                DesktopIoBox.prototype.exportWebp = function () {
                    this.exportWebpEvent.emit(null);
                };
                DesktopIoBox.prototype.selectParameterFile = function (obj) {
                    this.lastSelectFile = obj.target.files[0];
                    this.importParameterEvent.emit(null);
                };
                DesktopIoBox.prototype.selectEn = function () {
                    new locale_manager_1.LocaleManager().changeLocale(this.localeData, new locale_en_1.LocaleEnData());
                };
                DesktopIoBox.prototype.selectJa = function () {
                    new locale_manager_1.LocaleManager().changeLocale(this.localeData, new locale_ja_1.LocaleJaData());
                };
                DesktopIoBox = __decorate([
                    core_1.Component({
                        selector: "desktop-io-box",
                        templateUrl: "app/components-html/desktop-io-box.html",
                        inputs: ["drawingData", "platformData"],
                        events: [
                            "exportSvgEvent",
                            "exportPngEvent",
                            "exportJpgEvent",
                            "exportWebpEvent",
                            "exportParamaterEvent",
                            "importParameterEvent"
                        ]
                    }), 
                    __metadata('design:paramtypes', [locale_data_1.LocaleData])
                ], DesktopIoBox);
                return DesktopIoBox;
            })();
            exports_1("DesktopIoBox", DesktopIoBox);
        }
    }
});
//# sourceMappingURL=desktop-io.component.js.map