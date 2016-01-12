/// <reference path="common.d.ts" />
/// <reference path="svg-exporter.d.ts" />

/**
 * Created by nyamogera on 16/01/06.
 * ブラウザーのJavaScriptのルートファイル
 */

interface JQuery {
  spectrum(value:any):void;
}

var app:App;
window.onload = function () {
  app = new App();

  //  Export SVG
  var exportButton = document.getElementById("btn_export");
  exportButton.addEventListener("click",runExport);

  load();

}

var queue:createjs.LoadQueue;

// 読み込み完了
function handleComplete() {
  // 読み込んだアイテムを配置
  var image = queue.getResult("myImage");

  app.addImage(image);
}

// 読み込み開始
function load() {
  console.log("load");
  queue = new createjs.LoadQueue(false);
  queue.addEventListener("complete", handleComplete);
  queue.loadManifest([
    {id: "myImage", src:"https://ics.media/wp-content/uploads/2015/12/1512_js_indent.jpg"}
  ]);
}

/**
 * Export SVG
 */
var exporter:SVGExporter;

function runExport (e:any) {
    exporter = new SVGExporter(app.drawLayerContainer, false, false, false);
    var t = new Date().getTime();
    exporter.run();
    setTimeout(downloadFile, 1); // for some reason, it takes a tick for the browser to init the SVG
}

function downloadFile () {
    var serializer = new XMLSerializer();
    var svgStr = serializer.serializeToString(exporter.svg);
    window.open("data:image/svg+xml,\n"+encodeURIComponent(svgStr));
}