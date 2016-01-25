System.register(["./locale-data"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var locale_data_1;
    var LocaleEnData;
    return {
        setters:[
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            }],
        execute: function() {
            "use strict";
            LocaleEnData = (function (_super) {
                __extends(LocaleEnData, _super);
                function LocaleEnData() {
                    _super.apply(this, arguments);
                    this.preview_head = "Preview";
                    this.settings_head = "Settings";
                }
                return LocaleEnData;
            })(locale_data_1.LocaleData);
            exports_1("LocaleEnData", LocaleEnData);
        }
    }
});
//# sourceMappingURL=locale-en.js.map