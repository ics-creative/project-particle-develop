System.register(["./locale-data"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var locale_data_1;
    var LocaleJaData;
    return {
        setters:[
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            }],
        execute: function() {
            "use strict";
            LocaleJaData = (function (_super) {
                __extends(LocaleJaData, _super);
                function LocaleJaData() {
                    _super.apply(this, arguments);
                    this.preview_head = "プレビュー";
                    this.settings_head = "設定";
                }
                return LocaleJaData;
            })(locale_data_1.LocaleData);
            exports_1("LocaleJaData", LocaleJaData);
        }
    }
});
//# sourceMappingURL=locale-ja.js.map