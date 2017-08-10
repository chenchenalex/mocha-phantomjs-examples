var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
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

gulp.task('pre-test', function () {
  return gulp.src(['src/*.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
})

gulp.task('istanbul-report', ['pre-test'], function() {
    return gulp.src('test/test.script.js')
        .pipe(mocha({ reporter: 'nyan' }))
        .pipe(istanbul.writeReports())
});


gulp.task('test', ['mocha', 'mocha-dom']);
gulp.task('reporter', ['istanbul-report']);