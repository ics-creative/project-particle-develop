System.register(["angular2/core", 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, core_3;
    var DesktopIOBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_3 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            DesktopIOBox = (function () {
                function DesktopIOBox(element) {
                    this.exportSVGEvent = new core_2.EventEmitter();
                    this.exportParamaterEvent = new core_2.EventEmitter();
                    this.element = element;
                    this.setDragAndDropSettings(element);
                }
                DesktopIOBox.prototype.exportParamater = function () {
                    this.exportParamaterEvent.emit(null);
                };
                DesktopIOBox.prototype.exportSVG = function () {
                    this.exportSVGEvent.emit(null);
                };
                DesktopIOBox.prototype.selectParameterFile = function (obj) {
                    this.importParameterFile(obj.target.files[0]);
                };
                DesktopIOBox.prototype.importParameterFile = function (file) {
                    var _this = this;
                    alert(file);
                    // ファイルの内容は FileReader で読み込みます.
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
                        // event.target.result に読み込んだファイルの内容が入っています。
                        var json = event.target.result;
                        var object = JSON.parse(json);
                        _this.drawingData.into(object);
                    };
                    fileReader.readAsText(file);
                };
                DesktopIOBox.prototype.setDragAndDropSettings = function (element) {
                    /** documentにドラッグされた場合 / ドロップされた場合 */
                    document.ondragover = document.ondrop = function (e) {
                        e.preventDefault(); // イベントの伝搬を止めて、アプリケーションのHTMLとファイルが差し替わらないようにする
                        return false;
                    };
                    var holder = element.nativeElement;
                    /** hoverエリアにドラッグされた場合 */
                    holder.ondragover = function () {
                        return false;
                    };
                    /** hoverエリアから外れた or ドラッグが終了した */
                    holder.ondragleave = holder.ondragend = function () {
                        return false;
                    };
                    /** hoverエリアにドロップされた */
                    holder.ondrop = this.onDrop;
                };
                DesktopIOBox.prototype.onDrop = function (e) {
                    e.preventDefault(); // イベントの伝搬を止めて、アプリケーションのHTMLとファイルが差し替わらないようにする
                    var file = e.dataTransfer.files[0];
                    this.importParameterFile(file);
                    return false;
                };
                DesktopIOBox = __decorate([
                    core_1.Component({
                        selector: "desktop-io-box",
                        templateUrl: "app/components/template/desktop-io-box.html",
                        inputs: ["drawingData"],
                        events: [
                            "exportSVGEvent",
                            "exportParamaterEvent"
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_3.ElementRef])
                ], DesktopIOBox);
                return DesktopIOBox;
            })();
            exports_1("DesktopIOBox", DesktopIOBox);
        }
    }
});
//# sourceMappingURL=desktop-io.component.js.map