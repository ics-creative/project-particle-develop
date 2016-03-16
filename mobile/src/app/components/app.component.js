/// <reference path="../../libs-typescript/particlejs.d.ts" />
System.register(["angular2/core", "./property.component", "./large-io.component", "./small-io.component", "./small-template.component", "./stage.component", "../enum/view-port", "../enum/canvas-margin", "../i18n/locale-data", "../i18n/locale-manager", "../data/platform-data", "../enum/platform-type", "./property-io.component"], function(exports_1, context_1) {
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
    var core_1, property_component_1, large_io_component_1, small_io_component_1, small_template_component_1, stage_component_1, core_2, view_port_1, canvas_margin_1, locale_data_1, locale_manager_1, platform_data_1, platform_type_1, property_io_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (property_component_1_1) {
                property_component_1 = property_component_1_1;
            },
            function (large_io_component_1_1) {
                large_io_component_1 = large_io_component_1_1;
            },
            function (small_io_component_1_1) {
                small_io_component_1 = small_io_component_1_1;
            },
            function (small_template_component_1_1) {
                small_template_component_1 = small_template_component_1_1;
            },
            function (stage_component_1_1) {
                stage_component_1 = stage_component_1_1;
            },
            function (view_port_1_1) {
                view_port_1 = view_port_1_1;
            },
            function (canvas_margin_1_1) {
                canvas_margin_1 = canvas_margin_1_1;
            },
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            },
            function (locale_manager_1_1) {
                locale_manager_1 = locale_manager_1_1;
            },
            function (platform_data_1_1) {
                platform_data_1 = platform_data_1_1;
            },
            function (platform_type_1_1) {
                platform_type_1 = platform_type_1_1;
            },
            function (property_io_component_1_1) {
                property_io_component_1 = property_io_component_1_1;
            }],
        execute: function() {
            "use strict";
            AppComponent = (function () {
                function AppComponent(localeData) {
                    this.localeData = localeData;
                    this.drawingData = new particlejs.DrawingData();
                    this.platformData = this.getPlatformData();
                    // ステージサイズに対して適当な値を適用する
                    var canvasWidth = innerWidth;
                    var canvasHeight = innerHeight;
                    if (innerWidth > view_port_1.Viewport.sm) {
                        canvasHeight -= canvas_margin_1.CanvasMargin.TOP_DESKTOP;
                        canvasWidth -= canvas_margin_1.CanvasMargin.RIGHT_DESKTOP;
                    }
                    else {
                        canvasHeight -= canvas_margin_1.CanvasMargin.TOP_MOBILE;
                        canvasWidth -= canvas_margin_1.CanvasMargin.RIGHT_MOBILE;
                    }
                    var sw = Math.round(canvasWidth * 2 / 3);
                    var sh = Math.round(canvasHeight * 2 / 3);
                    this.drawingData.startX = Math.round(sw / 2);
                    this.drawingData.startY = Math.round(sh / 2);
                    this.drawingData.width = sw;
                    this.drawingData.height = sh;
                    new locale_manager_1.LocaleManager().applyClientLocale(localeData);
                }
                AppComponent.prototype.getPlatformData = function () {
                    return new platform_data_1.PlatformData(platform_type_1.PlatformType.Browser);
                };
                AppComponent.prototype.ngAfterViewInit = function () {
                    this.adjustUi();
                    var lang = new locale_manager_1.LocaleManager().checkLocale();
                    if (lang != "ja") {
                        document.title = "Particle Develop - HTML5 Vector Design Tool - ICS";
                    }
                    this.setupWidgets(lang);
                };
                AppComponent.prototype.setupWidgets = function (lang) {
                    var langLong = lang == "ja" ? "ja_JP" : "en_EN";
                    (function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id))
                            return;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "https://b.st-hatena.com/js/bookmark_button.js";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'hatena'));
                    !function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
                        if (!d.getElementById(id)) {
                            js = d.createElement(s);
                            js.id = id;
                            js.src = p + '://platform.twitter.com/widgets.js';
                            fjs.parentNode.insertBefore(js, fjs);
                        }
                    }(document, 'script', 'twitter-wjs');
                    (function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id))
                            return;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "//connect.facebook.net/" + langLong + "/sdk.js#xfbml=1&version=v2.5&appId=566926136738876";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                };
                /**
                 * UIの表示制御
                 */
                AppComponent.prototype.adjustUi = function () {
                };
                AppComponent.prototype.handleSvgClick = function () {
                    var _this = this;
                    this.stageComponent.exportSvg().then(function () {
                        _this.openSvgExportWindow();
                    });
                };
                AppComponent.prototype.handleJpgClick = function () {
                    var dataUrl = this.stageComponent.toDataURL('image/jpeg', "1.0");
                    window.open(dataUrl);
                };
                AppComponent.prototype.handlePngClick = function () {
                    var dataUrl = this.stageComponent.toDataURL('image/png', null);
                    window.open(dataUrl);
                };
                AppComponent.prototype.handleWebpClick = function () {
                    var dataUrl = this.stageComponent.toDataURL('image/webp', null);
                    window.open(dataUrl);
                };
                AppComponent.prototype.openSvgExportWindow = function () {
                    window.open("data:image/svg+xml,\n" + encodeURIComponent(this.stageComponent.getParticleSvgString()));
                };
                AppComponent.prototype.handleExportParameterClick = function () {
                    var exportData = Object.assign({}, this.drawingData);
                    exportData.VERSION = particlejs.VERSION;
                    this.propetyModal.setIOButtonLink(JSON.stringify(exportData, null, "    "));
                    this.propetyModal.openIOModal();
                    //window.open("data:text/plain;charset=UTF-8,\n" + encodeURIComponent(JSON.stringify(this.drawingData)));
                };
                AppComponent.prototype.handleImportParameterClick = function () {
                    var _this = this;
                    var file = this.largeIOBox.lastSelectFile;
                    // ファイルの内容は FileReader で読み込みます.
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
                        // event.target.result に読み込んだファイルの内容が入っています。
                        var json = event.target.result;
                        var object = JSON.parse(json);
                        _this.drawingData.importData(object);
                    };
                    fileReader.readAsText(file);
                };
                __decorate([
                    core_2.ViewChild("stageComponent"), 
                    __metadata('design:type', stage_component_1.StageComponent)
                ], AppComponent.prototype, "stageComponent", void 0);
                __decorate([
                    core_2.ViewChild("propertyPanel"), 
                    __metadata('design:type', property_component_1.PropertyPanel)
                ], AppComponent.prototype, "propertyPanel", void 0);
                __decorate([
                    core_2.ViewChild("smallIOBox"), 
                    __metadata('design:type', small_io_component_1.SmallIOBox)
                ], AppComponent.prototype, "smallIOBox", void 0);
                __decorate([
                    core_2.ViewChild("largeIOBox"), 
                    __metadata('design:type', large_io_component_1.LargeIOBox)
                ], AppComponent.prototype, "largeIOBox", void 0);
                __decorate([
                    core_2.ViewChild("smallPropertyTemplateModal"), 
                    __metadata('design:type', small_template_component_1.SmallPropertyTemplateModal)
                ], AppComponent.prototype, "smallPropertyTemplateModal", void 0);
                __decorate([
                    core_2.ViewChild("propetyModal"), 
                    __metadata('design:type', property_io_component_1.PropertyIoModal)
                ], AppComponent.prototype, "propetyModal", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "<header class=\"container-fluid\">\n  <div class=\"row\">\n    <h1><img src=\"images/ui/logo.png\"/></h1>\n\n    <button class=\"hidden-sm-down btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAbout\">\n      {{localeData.H_about}}\n    </button>\n    <large-io-box class=\"large-io-box\"\n                  #largeIOBox [drawingData]=\"drawingData\"\n                  [platformData]=\"platformData\"\n                  (exportSvgEvent)=\"handleSvgClick()\"\n                  (exportPngEvent)=\"handlePngClick()\"\n                  (exportJpgEvent)=\"handleJpgClick()\"\n                  (exportWebpEvent)=\"handleWebpClick()\"\n                  (exportParameterEvent)=\"handleExportParameterClick()\"\n                  (importParameterEvent)=\"handleImportParameterClick()\">\n    </large-io-box>\n\n    <small-io-box class=\"small-io-box\"\n                  [drawingData]=\"drawingData\"\n                  (exportPngEvent)=\"handlePngClick()\"\n                  (importCameraEvent)=\"handleCamera()\">\n    </small-io-box>\n  </div>\n</header>\n\n<div id=\"wrapper\" class=\"row\">\n  <div id=\"main\">\n    <div id=\"canvasBox\" class=\"card card-primary text-xs-center\">\n      <header class=\"card-header hidden-sm-down\">\n        <h2 class=\"card-title\">{{localeData.preview_head}}</h2>\n      </header>\n      <div class=\"card-block\">\n        <stage #stageComponent [drawingData]=\"drawingData\"></stage>\n      </div>\n    </div>\n  </div>\n  <div id=\"propertyPanel\" class=\"hidden-sm-down\">\n    <property-panel\n      class=\"property-panel\"\n      [drawingData]=\"drawingData\">\n    </property-panel>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"smallParticleTemplate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"smallParticleTemplateLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <small-particle-template-property-modal\n      class=\"small-particle-template-property-modal\"\n      [drawingData]=\"drawingData\">\n    </small-particle-template-property-modal>\n  </div>\n</div>\n<footer class=\"container-fluid\">\n  <div class=\"row\">\n    <a href=\"http://createjs.com\" target=\"_blank\" class=\"hidden-xs-down\"><img src=\"images/ui/logo_createjs.svg\" height=\"24\" alt=\"Made with CreateJS\"/></a>\n    <a href=\"https://angular.io/\" target=\"_blank\" class=\"hidden-sm-down\"><img src=\"images/ui/logo_angular2.png\" height=\"24\" alt=\"Made with Angular 2\"/></a>\n    <!--<a href=\"https://twitter.com/share\" class=\"twitter-share-button\">Tweet</a>&nbsp;&nbsp;&nbsp;-->\n    <!--<div class=\"fb-like\" data-href=\"http://ics-web.jp/projects/particle-develop/\" data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"true\" data-share=\"false\"></div>-->\n    &nbsp;&nbsp;&nbsp;\n    <!--<a href=\"http://b.hatena.ne.jp/entry/\" class=\"hatena-bookmark-button\" data-hatena-bookmark-layout=\"simple-balloon\" data-hatena-bookmark-lang=\"ja\" title=\"\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0\"><img src=\"https://b.st-hatena.com/images/entry-button/button-only@2x.png\" alt=\"\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0\" width=\"20\" height=\"20\" style=\"border: none;\"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->\n    <a href=\"https://ics.media\" target=\"_blank\" class=\"logo-ics\"><img src=\"images/ui/Copyright.png\" height=\"24\" alt=\"Created By ICS INC.\"/></a>\n  </div>\n</footer>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalAbout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalAboutLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header text-xs-center\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">{{localeData.MA_head}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{localeData.MA_sentence}}</p>\n        <hr>\n        <figure>\n          <img src=\"images/ui/about.png\" style=\"width:100%;\"/>\n        </figure>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<property-io-box #propetyModal class=\"property-io-box\"></property-io-box>\n",
                        directives: [
                            stage_component_1.StageComponent,
                            property_component_1.PropertyPanel,
                            large_io_component_1.LargeIOBox,
                            small_io_component_1.SmallIOBox,
                            small_template_component_1.SmallPropertyTemplateModal,
                            property_io_component_1.PropertyIoModal
                        ],
                        providers: [locale_data_1.LocaleData],
                    }), 
                    __metadata('design:paramtypes', [locale_data_1.LocaleData])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map