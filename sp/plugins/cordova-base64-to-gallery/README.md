# Cordova base64ToGallery Plugin
This plugin (based on [devgeeks/Canvas2ImagePlugin](http://github.com/devgeeks/Canvas2ImagePlugin)) allows you to save base64 data as a png image into the device (iOS Photo Library, Android Gallery or WindowsPhone 8 Photo Album).

The plugin is a kind of fork of the [solderzzc/Base64ImageSaverPlugin](https://github.com/solderzzc/Base64ImageSaverPlugin) but with a cleaner history (a.k.a: no tags from Canvas2ImagePlugin repo).

## Alert
In order to be more consistent with the cordova naming convention, since version 2.0 the repository name and the cordova plugin id have changed to **cordova-base64-to-gallery** (issue #1).

Please uninstall the old version and reinstall the new one.


## Usage
Call the `cordova.base64ToGallery()` method using success and error callbacks and the id attribute or the element object of the canvas to save:

### Methods
#### `cordova.base64ToGallery(data, [prefix, success, fail])`

Param       | Type       | Default           | Description
----------- | ---------- | ----------------- | ------------------
**data**    | *string*   |                   | base64 string
**prefix**  | *string*   | **img_**          | file's name prefix
**success** | *function* | **console.log**   | success callback
**fail**    | *function* | **console.error** | fail callback

### Example

```javascript
function onDeviceReady() {
    cordova.base64ToGallery(
        base64Data,

        'img_',

        function(msg){
            console.log(msg);
        },

        function(err){
            console.error(err);
        }
    );
}
```

## Authors and contributors
- [Tommy-Carlos Williams](http://github.com/devgeeks)
- [Simba Zhang](http://github.com/solderzzc)
- [StefanoMagrassi](http://github.com/StefanoMagrassi)
