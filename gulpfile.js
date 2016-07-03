var path = require('path');  
var gulp = require('gulp');  
var clean = require('gulp-clean');  
var concat = require('gulp-concat');  //-
var uglify = require('gulp-uglify'); //- 
var less = require('gulp-less');  //+
var watch = require('gulp-watch');//-

gulp.task('clean', function () {  
  return gulp.src('build', {read: false})
    .pipe(clean());
});



gulp.task('less',['clean'], function () {
gulp.src('app/components/*/*.less')
.pipe(less())
.pipe(concat('app.css'))
.pipe(gulp.dest('build'));
});


gulp.task('default', ['clean', 'less']);