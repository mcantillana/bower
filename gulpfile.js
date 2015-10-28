var gulp = require('gulp'),
 	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');
var sass = require('gulp-sass');



gulp.task('saludar',function(){
	console.log("Hola");
});


gulp.task('minjs', function() {

	return gulp.src('source/js/*.js') 
		.pipe(concat('javascript.js'))
		.pipe(uglify()) 
		.pipe(gulp.dest('dist/js/')); 
});

gulp.task('watch',function(){
	gulp.watch('source/js/*.js',['minjs']);
});



gulp.task('styles', function() {
    gulp.src('source/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'))
});

//Watch task
gulp.task('watch2',function() {
    gulp.watch('source/sass/*.scss',['styles']);
});