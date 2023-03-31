const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const changed = require('gulp-changed');

function buildScss() {
  return gulp.src('styles/**/*.scss')
    .pipe(changed('styles/dist'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/dist'));
}

function watchScss() {
  gulp.watch('styles/**/*.scss', buildScss);
}

exports.buildScss = buildScss;
exports.watchScss = watchScss;