var gulp = require('gulp'),
 	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');


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