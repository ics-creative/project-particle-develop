cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-base64-to-gallery/www/base64ToGallery.js",
        "id": "cordova-base64-to-gallery.base64ToGallery",
        "pluginId": "cordova-base64-to-gallery",
        "clobbers": [
            "cordova.base64ToGallery"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "cordova-base64-to-gallery": "2.0.1"
}
// BOTTOM OF METADATA
});