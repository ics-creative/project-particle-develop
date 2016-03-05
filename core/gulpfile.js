var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});

var sourcemaps = require('gulp-sourcemaps');

gulp.task("default", function () {
	gulp.watch(["scss/*.scss", "scss/**/*.scss"], ["scssCompile"]);
});

/**
 * SCSSをコンパイルするタスク。
 */
gulp.task("scssCompile", function () {
	console.log("compile");
	return gulp.src('scss/bootstrap.scss')
		.pipe(sourcemaps.init())
		.pipe(plugins.sass({outputStyle: 'compressed'}).on("error", plugins.sass.logError))
		.pipe(plugins.rename("index.css"))
		.pipe(sourcemaps.write("../maps"))
		.pipe(gulp.dest('css/'));
});
