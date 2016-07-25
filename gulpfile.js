var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    config = require('./gulp-config');
    sourcemaps = require('gulp-sourcemaps');

    

//==========Gulp Less===================
gulp.task('less', function(){
    gulp.src(config.less.src)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(less())
        .pipe(autoprefixer(
            {browsers: ['last 2 versions'],
			cascade: false }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.less.dest))
});

gulp.task('default', ['less'], function() {
   gulp.watch(config.less.watch, ['less']) 
});
