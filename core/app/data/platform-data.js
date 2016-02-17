System.register(["../enum/platform-type"], function(exports_1) {
    "use strict";
    var platform_type_1;
    var PlatformData;
    return {
        setters:[
            function (platform_type_1_1) {
                platform_type_1 = platform_type_1_1;
            }],
        execute: function() {
            PlatformData = (function () {
                function PlatformData(platformType) {
                    this.platformType = platformType;
                }
                PlatformData.prototype.isDesktop = function () {
                    return this.platformType == platform_type_1.PlatformType.Desktop;
                };
                PlatformData.prototype.enableOutputParameter = function () {
                    return true;
                };
                PlatformData.prototype.enableInputParameter = function () {
                    return this.platformType == platform_type_1.PlatformType.Desktop;
                };
                return PlatformData;
            })();
            exports_1("PlatformData", PlatformData);
        }
    }
});
//# sourceMappingURL=platform-data.js.map