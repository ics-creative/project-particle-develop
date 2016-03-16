const SRC_FOLDER = "src/";
// DEST_FOLDER
const DEST_FOLDER = "cordova/www";

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
	return del([DEST_FOLDER]);
});

// coreフォルダの必要ファイルをコピーするタスク
gulp.task("sp_copy", function () {
	return gulp.src([
			SRC_FOLDER + "**",
			"!" + SRC_FOLDER + "node_modules/**",
			"!" + SRC_FOLDER + "scss/**",
			"!" + SRC_FOLDER + "maps/**",
			"!" + SRC_FOLDER + "*.json",
			"!" + SRC_FOLDER + "gulpfile.js",
			"!" + SRC_FOLDER + "typings/**",
			"!" + SRC_FOLDER + ".idea/**",
			"!**/*.ts",
			"!**/*.*.map"
		])
		.pipe(gulp.dest(DEST_FOLDER));
});

// wwwフォルダをクリーンしてファイルをコピーするタスク
gulp.task("default", function () {
	console.log("default task");
	runSequence(
		"sp_clean",
		"sp_copy"
	);
});
