
const SRC_FOLDER = "../core/";
// DEST_FOLDER
const DEST_FOLDER = "www";

// gulpプラグインの読みこみ
const gulp = require('gulp');

// gulp-プラグイン名系のプラグインの一括読み込み
// plugins.(プラグイン名)という形でプラグインにアクセスできるようになる。
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

// run-sequenceのプラグインの読み込み
const runSequence = require("run-sequence");

// delプラグインの読み込み
const del = require('del');

// sp/wwwフォルダを削除するタスク
gulp.task("sp_clean", function () {
    return del(["www"]);
});

// 空のフォルダを削除するタスク
gulp.task("sp_clean2", function () {
    return del(["www/node_modules", "www/typings"]);
});

// coreフォルダの必要ファイルをコピーするタスク
gulp.task("sp_copy", function () {
    return gulp.src([
            SRC_FOLDER + "**",
            "!" + SRC_FOLDER + "sp.html",
            "!" + SRC_FOLDER + "node_modules/**",
            "!" + SRC_FOLDER + "*.json",
            "!" + SRC_FOLDER + "typings/**",
            "!**/*.ts",
            "!**/*.*.map"
        ])
        .pipe(gulp.dest(DEST_FOLDER));
});

// sp.htmlをindex.htmlにリネーム
gulp.task("html_rename", function () {
    return gulp.src(SRC_FOLDER + "sp.html")
        .pipe(plugins.rename("index.html"))
        .pipe(gulp.dest(DEST_FOLDER));
});

// wwwフォルダをクリーンしてファイルをコピーするタスク
gulp.task("default", function () {
    console.log("default task");
    runSequence(
        "sp_clean",
        "sp_copy",
        "html_rename",
        "sp_clean2"
    );
});
