System.register(['angular2/platform/browser', './components/mobile-app.component'], function(exports_1) {
    "use strict";
    var browser_1, mobile_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (mobile_app_component_1_1) {
                mobile_app_component_1 = mobile_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(mobile_app_component_1.MobileAppComponent, []);
        }
    }
});
//# sourceMappingURL=boot-mobile.js.map