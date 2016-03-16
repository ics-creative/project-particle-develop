System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PartcicleImageImporter;
    return {
        setters:[],
        execute: function() {
            /**
             * 画像を読み込むクラスです
             */
            PartcicleImageImporter = (function () {
                function PartcicleImageImporter() {
                }
                /**
                 * ネイティブ機能を使ってカメラを撮影します。
                 */
                PartcicleImageImporter.prototype.getCapture = function (canvasWidth, canvasHeight) {
                    var _this = this;
                    alert("Start cao");
                    return new Promise(function (onResolve, onReject) {
                        navigator.camera.getPicture(function (imageData) { return _this.cameraSuccessHandler(imageData, onResolve); }, function (errorMessage) { return _this.cameraFailHandler(errorMessage, onReject); }, {
                            quality: 70,
                            destinationType: Camera.DestinationType.DATA_URL,
                            targetWidth: canvasWidth,
                            targetHeight: canvasHeight,
                            correctOrientation: true,
                            encodingType: Camera.EncodingType.PNG
                        });
                    });
                };
                /**
                 * カメラ撮影に成功した時
                 */
                PartcicleImageImporter.prototype.cameraSuccessHandler = function (imageData, onResolve) {
                    alert("run camera");
                    onResolve(imageData);
                };
                /**
                 * カメラ撮影に失敗した時
                 */
                PartcicleImageImporter.prototype.cameraFailHandler = function (errorMessage, onReject) {
                    alert("カメラの起動に失敗しました。");
                    onReject();
                };
                return PartcicleImageImporter;
            }());
            exports_1("PartcicleImageImporter", PartcicleImageImporter);
        }
    }
});
//# sourceMappingURL=particle-image-importer.js.map