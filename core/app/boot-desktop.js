System.register(['angular2/platform/browser', './desktop-app.component'], function(exports_1) {
    var browser_1, desktop_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (desktop_app_component_1_1) {
                desktop_app_component_1 = desktop_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(desktop_app_component_1.DesktopAppComponent, []);
        }
    }
});
//# sourceMappingURL=boot-desktop.js.map