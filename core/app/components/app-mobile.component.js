System.register(["../enum/platform-type", "../data/platform-data", "./app.component"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var platform_type_1, platform_data_1, app_component_1;
    var MobileAppComponent;
    return {
        setters:[
            function (platform_type_1_1) {
                platform_type_1 = platform_type_1_1;
            },
            function (platform_data_1_1) {
                platform_data_1 = platform_data_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            "use strict";
            MobileAppComponent = (function (_super) {
                __extends(MobileAppComponent, _super);
                function MobileAppComponent() {
                    _super.apply(this, arguments);
                }
                MobileAppComponent.prototype.handleSvgClick = function () {
                    alert("モバイルアプリでは使用不可能です");
                };
                MobileAppComponent.prototype.getPlatformData = function () {
                    return new platform_data_1.PlatformData(platform_type_1.PlatformType.Mobile);
                };
                MobileAppComponent.prototype.handlePngClick = function () {
                    this.stageComponent.runExportSP().then();
                };
                MobileAppComponent.prototype.handleCamera = function () {
                    this.stageComponent.runCamera().then();
                };
                MobileAppComponent.prototype.handleExportParameterClick = function () {
                    alert("モバイルアプリでは使用不可能です");
                };
                return MobileAppComponent;
            })(app_component_1.AppComponent);
            exports_1("MobileAppComponent", MobileAppComponent);
        }
    }
});
//# sourceMappingURL=app-mobile.component.js.map