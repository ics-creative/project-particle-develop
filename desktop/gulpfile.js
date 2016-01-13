'use strict';
 
var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var ts = require("gulp-typescript");
var sass = require('gulp-sass');

// ブラウザープロセスのtsファイルのビルド
gulp.task('ts-compile-browser', function() {
  var tsconfig = require("./tsconfig-browser.json");
  var filesGLob = tsconfig.files[0];
  gulp.src(filesGLob)
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(gulp.dest('.'));
});

// レンダラーープロセスのtsファイルのビルド
gulp.task('ts-compile-renderer', function() {
    var tsconfig = require("./tsconfig.json");
    var filesGLob = tsconfig.files[0];
    gulp.src(filesGLob)
        .pipe(ts(tsconfig.compilerOptions))
        .pipe(gulp.dest('.'));
});



gulp.task('serve', function () {
 
  // ブラウザープロセスの開始
  electron.start();

  // レンダラープロセスのリロード
  gulp.watch(['src/renderer/**/*.*'], electron.reload);

  // レンダラープロセスのビルドはwebstormで自動でするので不要

  // electronプロセスが終わったらプロセスの停止
  electron.on('quit', () => {process.exit(0)});

  // ブラウザープロセスのtsファイルのビルド
  gulp.watch(['ts/browser/**/*.*'], ['ts-compile-browser']);

  // ブラウザープロセスのtsファイルのビルド
  gulp.watch(['ts/renderer/**/*.*'], ['ts-compile-renderer']);

  // ブラウザープロセスのリスタートは特に不要にする
  //gulp.watch(['src/browser/**/*.*'], electron.restart);
});


/** index.htmlをコピーするだけのタスク */
gulp.task("copy-index",function (){
  gulp.src("../common/index.html")
      .pipe(gulp.dest("src/renderer"));
});

/** lib以下ををコピーするだけのタスク */
gulp.task("copy-lib",function (){
  gulp.src("../common/libs/**/*.*")
      .pipe(gulp.dest("src/renderer/libs/"));
});

/** sass */
gulp.task("build-scss", function () {
  // scssファイルの配置ディレクトリ及びマッチパターン
  gulp.src("../common/styles/**/*.scss")
      // scssファイルの変換処理と、エラーが起こった場合のログ書き出し
      .pipe(sass().on("error", sass.logError))
      // cssを書き出すディレクトリの指定
      .pipe(gulp.dest("src/renderer/css"));
});


gulp.task("build-all", ["build-scss","ts-compile-browser","copy-lib","copy-index"] );