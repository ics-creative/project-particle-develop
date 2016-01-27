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
            "use strict";
            DesktopAppComponent = (function (_super) {
                __extends(DesktopAppComponent, _super);
                function DesktopAppComponent(localeData) {
                    _super.call(this, localeData);
                }
                DesktopAppComponent.prototype.handleSvgClick = function () {
                    var _this = this;
                    this.stageComponent.exportSvg().then(function () {
                        _this.openSvgExportWindow();
                    });
                };
                DesktopAppComponent.prototype.handlePngClick = function () {
                    var _this = this;
                    var electron = require('electron');
                    var dialog = electron.remote.dialog;
                    var options = {
                        title: 'PNGとして保存',
                        defaultPath: 'particle.png',
                        filters: [
                            { name: 'Images', extensions: ['png'] }
                        ]
                    };
                    dialog.showSaveDialog(options, function (filename) {
                        if (!filename) {
                            return;
                        }
                        var dataUrl = _this.stageComponent.toDataURL('image/png', null);
                        // 「data:image/png;base64,」の文字列を置換して削除
                        var data = dataUrl.replace(/^data:image\/png;base64,/, "");
                        var fs = require('fs');
                        fs.writeFile(filename, data, 'base64', function (error) {
                            if (error != null) {
                                alert('error : ' + error);
                            }
                        });
                    });
                };
                DesktopAppComponent.prototype.handleJpgClick = function () {
                    var _this = this;
                    var electron = require('electron');
                    var dialog = electron.remote.dialog;
                    var options = {
                        title: 'JPEGとして保存',
                        defaultPath: 'particle.jpg',
                        filters: [
                            { name: 'Images', extensions: ['jpeg'] }
                        ]
                    };
                    dialog.showSaveDialog(options, function (filename) {
                        if (!filename) {
                            return;
                        }
                        var dataUrl = _this.stageComponent.toDataURL('image/jpeg', "0.9");
                        // 「data:image/jpeg;base64,」の文字列を置換して削除
                        var data = dataUrl.replace(/^data:image\/jpeg;base64,/, "");
                        var fs = require('fs');
                        fs.writeFile(filename, data, 'base64', function (error) {
                            if (error != null) {
                                alert('error : ' + error);
                            }
                        });
                    });
                };
                DesktopAppComponent.prototype.openSvgExportWindow = function () {
                    var _this = this;
                    var electron = require('electron');
                    var dialog = electron.remote.dialog;
                    var options = {
                        title: 'SVGとして保存',
                        defaultPath: 'particle.svg',
                        filters: [
                            { name: 'Images', extensions: ['svg'] }
                        ]
                    };
                    dialog.showSaveDialog(options, function (filename) {
                        if (!filename) {
                            return;
                        }
                        var fs = require('fs');
                        fs.writeFile(filename, _this.stageComponent.getParticleSvgString(), function (error) {
                            if (error != null) {
                                alert('error : ' + error);
                            }
                        });
                    });
                };
                DesktopAppComponent.prototype.handleExportParamaterClick = function () {
                    var _this = this;
                    var electron = require('electron');
                    var dialog = electron.remote.dialog;
                    var options = {
                        title: 'パラメータを保存',
                        defaultPath: 'particle.json',
                        filters: [
                            { name: 'Documents', extensions: ['json'] }
                        ]
                    };
                    dialog.showSaveDialog(options, function (filename) {
                        if (!filename) {
                            return;
                        }
                        var fs = require('fs');
                        var data = JSON.stringify(_this.drawingData);
                        fs.writeFile(filename, data, function (error) {
                            if (error != null) {
                                alert('error : ' + error);
                            }
                        });
                    });
                };
                return DesktopAppComponent;
            })(app_component_1.AppComponent);
            exports_1("DesktopAppComponent", DesktopAppComponent);
        }
    }
});
//# sourceMappingURL=app-desktop.component.js.map