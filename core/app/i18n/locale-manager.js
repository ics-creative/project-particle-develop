System.register(["./locale-ja", "./locale-en"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var locale_ja_1, locale_en_1;
    var LocaleManager;
    return {
        setters:[
            function (locale_ja_1_1) {
                locale_ja_1 = locale_ja_1_1;
            },
            function (locale_en_1_1) {
                locale_en_1 = locale_en_1_1;
            }],
        execute: function() {
            "use strict";
            LocaleManager = (function () {
                function LocaleManager() {
                }
                LocaleManager.prototype.applyClientLocale = function (localeData) {
                    var locale = this.checkLocale();
                    var lData;
                    switch (locale) {
                        case "ja":
                            lData = new locale_ja_1.LocaleJaData();
                            break;
                        case "en":
                        default:
                            lData = new locale_en_1.LocaleEnData();
                            break;
                    }
                    this.changeLocale(localeData, lData);
                };
                LocaleManager.prototype.checkLocale = function () {
                    var ua = window.navigator.userAgent.toLowerCase();
                    try {
                        // chrome
                        if (ua.indexOf('chrome') != -1) {
                            return (navigator.languages[0] || navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2);
                        }
                        else {
                            return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2);
                        }
                    }
                    catch (e) {
                        return undefined;
                    }
                };
                LocaleManager.prototype.changeLocale = function (master, selectedLocale) {
                    for (var key in selectedLocale) {
                        if (Reflect.has(selectedLocale, key) == true) {
                            var val = selectedLocale[key];
                            Reflect.set(master, key, val);
                        }
                    }
                };
                return LocaleManager;
            }());
            exports_1("LocaleManager", LocaleManager);
        }
    }
});
//# sourceMappingURL=locale-manager.js.map