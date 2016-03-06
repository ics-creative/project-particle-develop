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
		.pipe(plugins.autoprefixer({
			browsers: ["last 2 versions", "ie >= 9", "Android >= 4","ios_saf >= 8"],
			cascade: false
		}))
		.pipe(plugins.rename("index.css"))
		.pipe(sourcemaps.write("../maps"))
		.pipe(gulp.dest('css/'));
});
