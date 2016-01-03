'use strict';
 
var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var ts = require("gulp-typescript");

// ブラウザープロセスのtsファイルのビルド
gulp.task('ts-compile-browser', function() {
  var tsconfig = require("./tsconfig-browser.json");
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

  // ブラウザープロセスのリスタートは特に不要にする
  //gulp.watch(['src/browser/**/*.*'], electron.restart);
});

