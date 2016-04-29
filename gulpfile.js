var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var connect = require('gulp-connect');
var copy = require('gulp-copy');
var uglify = require('gulp-uglifyjs');


// Run webpack
gulp.task('webpack', function(){
  return gulp.src('src/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/dist/'))
    .pipe(connect.reload());
});

// Run the webserver
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: 'dist'
  });
});


// Copy index.html file
gulp.task('build.index', function(){
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});


gulp.task('uglify', function() {
  gulp.src('dist/dist/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/dist/'))
});

// Default task
gulp.task('default', ['webpack', 'webserver', 'build.index']);
gulp.task('fuck', ['uglify']);
