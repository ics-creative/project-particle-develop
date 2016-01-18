System.register(['angular2/platform/browser', './components/app.component.ts'], function(exports_1) {
    var browser_1, app_component_ts_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_ts_1_1) {
                app_component_ts_1 = app_component_ts_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_ts_1.AppComponent, []);
        }
    }
});
//# sourceMappingURL=boot.js.map