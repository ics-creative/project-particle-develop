/// <reference path="common.d.ts" />
/// <reference path="svg_exporter.d.ts" />

/**
 * Created by nyamogera on 16/01/06.
 * ブラウザーのJavaScriptのルートファイル
 */

var app:App;
window.onload = function () {
  app = new App();

  //  Export SVG
  var exportButton = document.getElementById("btn_export");
  exportButton.addEventListener("click",runExport);
}

/**
 * Export SVG
 */
var exporter:SVGExporter;

function runExport (e:any) {
    exporter = new SVGExporter(app.stage, false, false, false);
    var t = new Date().getTime();
    exporter.run();
    setTimeout(downloadFile, 1); // for some reason, it takes a tick for the browser to init the SVG
}

function downloadFile () {
    var serializer = new XMLSerializer();
    var svgStr = serializer.serializeToString(exporter.svg);
    window.open("data:image/svg+xml,\n"+encodeURIComponent(svgStr));
}