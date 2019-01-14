'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-csso'),
    browserSync = require('browser-sync').create();



var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        style: 'build/css/',
        img: 'build/img/',
        libs: 'build/libs/',
        fonts: 'build/css/font'
    },
    app: {
        html: 'app/*.html',
        js: 'app/js/main.js',
        style: 'app/style/main.scss',
        img: 'app/img/**/*.*',
        libs: 'app/libs/**/*.*',
        fonts: 'app/style/font/**/*.*'
    },
    watch: {
        html: 'app/**/*.html',
        js: 'app/js/**/*.js',
        style: 'app/style/**/*.scss',
        img: 'app/img/**/*.*',
        libs: 'app/fonts/**/*.*',
        fonts: 'app/style/font/**/*.*'
    },
    clean: './build'
};

gulp.task('serve', ['style'], function() {

    browserSync.init({
        server: "./build"
    });

    gulp.watch("app/style/*.scss", ['style']).on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});


gulp.task('html', function () {
    gulp.src(path.app.html)
        .pipe(rigger())
        .pipe(gulp.dest("build/"));
});

gulp.task('js', function () {
    gulp.src(path.app.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(sourcemaps.init())
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('style', function () {
    return gulp.src(path.app.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.style))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style))
        .pipe(browserSync.stream());
});


gulp.task('image', function () {
    gulp.src(path.app.img)
        .pipe(gulp.dest(path.build.img))
});

gulp.task('libs', function() {
    gulp.src(path.app.libs)
        .pipe(gulp.dest(path.build.libs))
});

gulp.task('fonts', function() {
    gulp.src(path.app.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html',
    'js',
    'style',
    'libs',
    'image',
    'fonts'
]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts');
    });
});

gulp.task('default', ['serve', 'build', 'watch']);

