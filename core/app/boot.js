System.register(['angular2/platform/browser', './components/app.component', "./i18n/locale-data"], function(exports_1) {
    var browser_1, app_component_1, locale_data_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (locale_data_1_1) {
                locale_data_1 = locale_data_1_1;
            }],
        execute: function() {
            "use strict";
            browser_1.bootstrap(app_component_1.AppComponent, [locale_data_1.LocaleData]);
        }
    }
});
//# sourceMappingURL=boot.js.map