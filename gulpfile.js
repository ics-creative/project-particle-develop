// gulpプラグインの読みこみ
const gulp = require('gulp');

// gulp-プラグイン名系のプラグインの一括読み込み
// plugins.(プラグイン名)という形でプラグインにアクセスできるようになる。
const plugins = require("gulp-load-plugins");

// run-sequenceのプラグインの読み込み
var runSequence = require("run-sequence");

// delプラグインの読み込み
const del = require('del');

// sp/wwwフォルダを削除するタスク
gulp.task("sp_clean", function () {
    return del(["sp/www"]);
});

// sp/wwwにcoreフォルダの必要ファイルをコピーするタスク
gulp.task("sp_copy_file", function () {
    return gulp.src([
            "core/**",
            "!core/*.json",
            "!core/typings/**",
            "!**/*.ts",
            "!**/*.*.map"
        ])
        .pipe(gulp.dest("sp/www"))
});

// sp/wwwフォルダをクリーンしてファイルをコピーするタスク
gulp.task("sp", function () {
    console.log("default task");
    runSequence(
        "clean",
        "copy_file"
    );
});
