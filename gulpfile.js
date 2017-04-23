var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    mochaPhantomJS = require('gulp-mocha-phantomjs');

// test single js file
gulp.task('mocha', function() {
    return gulp.src('test/test.script.js')
        .pipe(mocha({ reporter: 'nyan' }))
});

// test js files which manipulates the DOM

gulp.task('mocha-dom', function() {
    return gulp.src('./index.html')
        .pipe(mochaPhantomJS({ reporter: 'nyan' }))
});


gulp.task('default', ['mocha', 'mocha-dom']);