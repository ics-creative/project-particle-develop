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
            /**
             * Created by nyamogera on 2016/01/17.
             */
            MobileAppComponent = (function (_super) {
                __extends(MobileAppComponent, _super);
                function MobileAppComponent() {
                    _super.apply(this, arguments);
                    this.openSVGExportWindow = function () {
                        alert("モバイルアプリでは使用不可能です");
                        //window.open("data:image/svg+xml,\n"+encodeURIComponent(this.stageComponent.getParticleSVGString()));
                    };
                }
                MobileAppComponent.prototype.handleSVGClick = function () {
                    //this.stageComponent.exportSVG().then(this.openSVGExportWindow);
                };
                MobileAppComponent.prototype.handlePNGClick = function () {
                    this.stageComponent.runExportSP().then(function () {
                        alert("done");
                    });
                };
                MobileAppComponent.prototype.handleCamera = function () {
                    this.stageComponent.runCamera().then(function () {
                        alert("done");
                    });
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