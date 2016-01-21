System.register(["./app.component"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var app_component_1;
    var MobileAppComponent;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            MobileAppComponent = (function (_super) {
                __extends(MobileAppComponent, _super);
                function MobileAppComponent() {
                    _super.apply(this, arguments);
                }
                MobileAppComponent.prototype.handleSVGClick = function () {
                    alert("モバイルアプリでは使用不可能です");
                };
                MobileAppComponent.prototype.handlePNGClick = function () {
                    this.stageComponent.runExportSP().then();
                };
                MobileAppComponent.prototype.handleCamera = function () {
                    this.stageComponent.runCamera().then();
                };
                MobileAppComponent.prototype.handleExportParamaterClick = function () {
                    alert("paramater!");
                    console.log("handleExportParamaterClick");
                };
                return MobileAppComponent;
            })(app_component_1.AppComponent);
            exports_1("MobileAppComponent", MobileAppComponent);
        }
    }
});
//# sourceMappingURL=mobile-app.component.js.map