var path = require('path');
var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var legoPath = require('lego').includePath;
var pathPrefix = legoPath.replace('src/scss', '');
var styles = [
    'src/scss/**/*.scss',
    '!src/scss/library/**/*.scss',
    '!src/scss/desktop/partials/legacy_overrides/**/*.scss'
];

var prefixedSrc = styles.map(function(scssPath) {
  if(scssPath[0] === '!') {
    return '!' + pathPrefix + scssPath.substr(1);
  } else {
    return pathPrefix + scssPath;
  }
});

gulp.task('scss-lint', function() {
  gulp.src(prefixedSrc)
    .pipe(scsslint({
      'config': path.join(pathPrefix, '.scss-lint.yml')
    }));
});
