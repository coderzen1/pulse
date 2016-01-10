'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');

gulp.task('default', function() {
  nodemon({
    script: 'app',
    ext: 'js jsx jade',
    ignore: ['public/dist/scripts/*']
  });
  gulp.src('./app/assets/stylesheets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/stylesheets'));
  gulp.watch('./app/assets/stylesheets/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
  gulp.src('./app/assets/stylesheets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/stylesheets'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./app/assets/stylesheets/scss/**/*.scss', ['sass']);
});
