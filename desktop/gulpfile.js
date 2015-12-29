'use strict';
 
var gulp = require('gulp');
var electron = require('electron-connect').server.create();
 
gulp.task('serve', function () {
 
  // Start browser process 
  electron.start();
 
  // Restart browser process
  gulp.watch(['src/browser/**/*'], electron.restart);

  // Reload renderer process
  gulp.watch(['src/renderer/**/*.*','index.html'], electron.reload);

  electron.on('quit', () => {process.exit(0)});
});

