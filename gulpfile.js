// move my html
//compie js using webpack
// watch
//default task (gulp)
const { series, parallel } = require('gulp');

var gulp = require("gulp")
var browserSync = require('browser-sync').create();
var webpack = require('webpack-stream')


function html() {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('dist'))
}

function js() {
  return gulp.src('src/js/*.js')
  .pipe(webpack({
    mode: 'production',
    devtool: 'source-map',
    output: {
      filename: 'app.js'
    }
  }))
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.stream())
}


function watch() {
  browserSync.init ({
    server: {
      baseDir: "dist"
    }
  })

  gulp.watch('src/*.html', html).on('change', browserSync.reload)
  gulp.watch('src/js/*.js', js)
}


exports.default = series(html, js, watch);
