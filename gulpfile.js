var gulp = require('gulp');
	sass = require('gulp-sass');
	del  = require('del');
	autoprefixer = require('gulp-autoprefixer');
	//browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss') 
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']); 
});

gulp.task('clean', function() {
    return del.sync('dist'); 
});

gulp.task('build', ['clean', 'sass'], function() {

    var buildCss = gulp.src([ 
        'app/css/style.css',
        ])
    .pipe(gulp.dest('dist/css'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') 
    .pipe(gulp.dest('dist'));

});

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['watch']);