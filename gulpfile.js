var gulp = require('gulp'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    copy = require('gulp-copy'),
    sass = require('gulp-sass'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jade = require('gulp-jade');
//Gulp Tasks config

var cssPreprocessor = 'sass';

gulp.task('clean-assets', function(){
  gulp.src('./dist/imgs/**/*', {read:false})
    .pipe(clean());
});
gulp.task('copy-assets', function() {
  gulp.src('./assets/**/*')
    .pipe(gulp.dest('./dist/img/'))
    .pipe(connect.reload());
});
gulp.task('sass', function () {
  gulp.src('./app/styles/sass/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});
gulp.task('stylus', function(){
  gulp.src('./app/styles/stylus/**/*.styl')
    .pipe(stylus({ use: nib(), compress:true }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload());
});
gulp.task('html', function(){
  gulp.src('./app/**/*.jade')
    .pipe(jade({
      pretty: false
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});
gulp.task('js', function() {
  gulp.src('./app/js/**/*.js')
    .pipe(gulp.dest('./dist/js/'))
    .pipe(connect.reload())
});
gulp.task('server', function(){
  connect.server({
    root: './dist',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true
  });
});
gulp.task('watch', function(){
  gulp.watch(['./app/**/*.jade'], ['html']);
  gulp.watch(['./app/styles/stylus/**/*.styl'], ['stylus']);
  gulp.watch(['./app/styles/sass/**/*.scss'], ['sass']);
  gulp.watch(['./app/js/**/*.js'], ['js']);
  gulp.watch(['./assets/**/*'], ['assets']);
});
//Gulp tasks exec
gulp.task('assets', ['clean-assets','copy-assets']);
gulp.task('default', ['server','init','watch']);
gulp.task('init', ['assets',cssPreprocessor,'js','html']);
