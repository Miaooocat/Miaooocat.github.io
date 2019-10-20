<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="/assets/js/Meting.min.js"></script>var gulp = require('gulp');

var compass = require('gulp-compass');

gulp.task('compass', function() {
    gulp.src('./scss/**')
        .pipe(compass({
            comments: false,
            css: 'css',
            sass: 'scss',
            image: 'img'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('vendor', function() {
    gulp.src(['./bower_components/pagepiling.js/jquery.pagepiling.min.js',
            './bower_components/pagepiling.js/jquery.pagepiling.css'])
        .pipe(gulp.dest('./vendor'));
});

gulp.task('default', function() {
    gulp.run('compass');
    gulp.run('vendor');

    gulp.watch('./scss/**', function(event) {
        gulp.run('compass');
    });
});
