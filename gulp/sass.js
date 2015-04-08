var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config').dev.options.variables;
var src = path.join(config.src, 'main.scss');
var dest = path.join(config.dist, 'main.css');

gulp.task('sass', function () {
  return gulp.src(src)
    .pipe(sass({
      errLogToConsole: true,
      includePaths : [
        require('lego').includePath
      ]
    }))
    .pipe(gulp.dest(dest));
});
