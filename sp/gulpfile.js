const SRC_FOLDER = "../core/";

// gulpプラグインの読みこみ
const gulp = require('gulp');

// gulp-プラグイン名系のプラグインの一括読み込み
// plugins.(プラグイン名)という形でプラグインにアクセスできるようになる。
const plugins = require("gulp-load-plugins");

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


// wwwにcoreフォルダの必要ファイルをコピーするタスク
gulp.task("sp_copy", function () {
    return gulp.src([
            SRC_FOLDER + "**",
            "!" + SRC_FOLDER + "node_modules/**",
            "!" + SRC_FOLDER + "*.json",
            "!" + SRC_FOLDER + "typings/**",
            "!**/*.ts",
            "!**/*.*.map"
        ])
        .pipe(gulp.dest("www"))
});

// wwwフォルダをクリーンしてファイルをコピーするタスク
gulp.task("default", function () {
    console.log("default task");
    runSequence(
        "sp_clean",
        "sp_copy",
        "sp_clean2"
    );
});
