var App = (function () {
    function App() {
        console.log("app");
    }
    return App;
})();
var Index = (function () {
    function Index() {
        this.connect = function () {
            if (process.env.NODE_ENV === 'production') {
                require('electron-connect').client.create();
            }
        };
    }
    return Index;
})();
var index = new Index();
window.addEventListener("load", function (e) {
    index.connect();
    console.log("connect-test");
});
//# sourceMappingURL=index.js.map