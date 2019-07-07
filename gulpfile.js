// --------------------------------------------
// Dependencies
// --------------------------------------------
var autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');


// paths
var styleSrc = 'source/sass/**/*.scss';


// Compiles all SCSS files
gulp.task('sass', function(done) {
    gulp.src(styleSrc)
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
          }))

        .pipe(gulp.dest('build/assets/css'));
    done();
});

// Watch for changes
gulp.task('watch', function(){
    gulp.watch(styleSrc, gulp.series('sass'));
});



// gulp.task('default', [ 'scss', 'watch'], function () {});  //gulp v3
gulp.task('default', gulp.parallel('sass', 'watch'));