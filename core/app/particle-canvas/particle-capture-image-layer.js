System.register([], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ParticleCaptureImageLayer;
    return {
        setters:[],
        execute: function() {
            /**
             * キャプチャーした画像を配置するレイヤーです。
             *
             */
            ParticleCaptureImageLayer = (function (_super) {
                __extends(ParticleCaptureImageLayer, _super);
                function ParticleCaptureImageLayer() {
                    _super.call(this);
                }
                /**
                 * 画像を追加します。
                 */
                ParticleCaptureImageLayer.prototype.addImageFromImageData = function (imageData) {
                    this.removeImage();
                    var base64 = "data:image/jpeg;base64," + imageData.replace("file:///", "");
                    this.captureImage = new createjs.Bitmap(base64);
                    this.captureImage.scaleX = 0.3;
                    this.captureImage.scaleY = 0.3;
                    this.addChild(this.captureImage);
                };
                /**
                 * URLから画像を追加します。
                 *
                 */
                ParticleCaptureImageLayer.prototype.addImageFromURL = function (imageURL) {
                    this.removeImage();
                    this.captureImage = new createjs.Bitmap(imageURL);
                    this.addChild(this.captureImage);
                };
                /**
                 * 画像を削除します。
                 */
                ParticleCaptureImageLayer.prototype.removeImage = function () {
                    if (this.numChildren > 0) {
                        this.removeAllChildren();
                    }
                };
                return ParticleCaptureImageLayer;
            })(createjs.Container);
            exports_1("ParticleCaptureImageLayer", ParticleCaptureImageLayer);
        }
    }
});
//# sourceMappingURL=particle-capture-image-layer.js.map