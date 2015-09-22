var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify({
    entries: 'app/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('public/javascripts'));
});

gulp.task('default', ['build']);

gulp.task('clean', function() {
  del(['public/javascripts/**/*.js']).then(function() { console.log("cleaned"); })
})

gulp.task('watch', function() {
  gulp.watch('app/**/*.jsx', ['clean', 'default'])
})
