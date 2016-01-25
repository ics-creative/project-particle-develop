System.register(['angular2/platform/browser', './components/app-mobile.component.ts'], function(exports_1) {
    "use strict";
    var browser_1, app_mobile_component_ts_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_mobile_component_ts_1_1) {
                app_mobile_component_ts_1 = app_mobile_component_ts_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_mobile_component_ts_1.MobileAppComponent, []);
        }
    }
});
//# sourceMappingURL=boot-mobile.js.map