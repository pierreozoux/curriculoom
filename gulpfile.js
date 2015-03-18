var gulp = require('gulp');
var connect = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true,
        middleware: function (connect, opt) {
            return [historyApiFallback];
        }
    });
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);