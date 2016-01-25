System.register(["./locale-ja"], function(exports_1) {
    var locale_ja_1;
    var LocaleManager;
    return {
        setters:[
            function (locale_ja_1_1) {
                locale_ja_1 = locale_ja_1_1;
            }],
        execute: function() {
            LocaleManager = (function () {
                function LocaleManager() {
                }
                LocaleManager.applyClientLocale = function (localeData) {
                    LocaleManager.changeLocale(localeData, new locale_ja_1.LocaleJaData());
                };
                LocaleManager.changeLocale = function (master, selectedLocale) {
                    for (var key in selectedLocale) {
                        if (Reflect.has(selectedLocale, key) == true) {
                            var val = selectedLocale[key];
                            Reflect.set(master, key, val);
                        }
                    }
                };
                return LocaleManager;
            })();
            exports_1("LocaleManager", LocaleManager);
        }
    }
});
//# sourceMappingURL=locale-manager.js.map