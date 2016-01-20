System.register(["./app.component"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var app_component_1;
    var DesktopAppComponent;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            DesktopAppComponent = (function (_super) {
                __extends(DesktopAppComponent, _super);
                function DesktopAppComponent() {
                    _super.apply(this, arguments);
                }
                DesktopAppComponent.prototype.handleSVGClick = function () {
                    var _this = this;
                    this.stageComponent.exportSVG().then(function () { _this.openSVGExportWindow(); });
                };
                DesktopAppComponent.prototype.openSVGExportWindow = function () {
                    var _this = this;
                    var electron = require('electron');
                    var dialog = electron.remote.dialog;
                    var options = {
                        title: 'Save Dialog Example',
                        filters: [
                            { name: 'Images', extensions: ['svg'] }
                        ]
                    };
                    dialog.showSaveDialog(options, function (filename) {
                        var fs = require('fs');
                        fs.writeFile(filename, _this.stageComponent.getParticleSVGString(), function (error) {
                            if (error != null) {
                                alert('error : ' + error);
                            }
                        });
                    });
                };
                DesktopAppComponent.prototype.handleExportParamaterClick = function () {
                    alert("paramater!");
                    console.log("handleExportParamaterClick");
                };
                return DesktopAppComponent;
            })(app_component_1.AppComponent);
            exports_1("DesktopAppComponent", DesktopAppComponent);
        }
    }
});
//# sourceMappingURL=desktop-app.component.js.map