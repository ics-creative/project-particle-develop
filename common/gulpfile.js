'use strict';
 
var gulp = require('gulp');

// browser-syncのプラグインの読み込み
var browserSync = require("browser-sync");

gulp.task("watch", function () {

  // ブラウザープロセスのtsファイルのビルド
  gulp.watch(["index.html"], ["copy"]);
});

/** コピーするだけのタスク */
gulp.task("copy",function (){
  gulp.src("index.html")
    .pipe(gulp.dest("dist"));
});


/** */
gulp.task("sync-browser", function () {
  browserSync({
    server: {
      baseDir: "dist" // browser-syncのルートとなるディレクトリ
    }
  });

  // distフォルダ以下のファイルを監視
  gulp.watch("dist/**/*.*", function () {
    // ブラウザのリロード
    browserSync.reload();
  });
});

/** */
gulp.task("sync", ["watch","sync-browser"]);
