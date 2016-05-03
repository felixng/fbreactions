var webpack = require('webpack');
var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var changed = require('gulp-changed');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function(callback) {
    // run webpack
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        callback();
    });
});

gulp.task('copy', function(){
  gulp.src('./images/**')
    .pipe(changed('dist/images'))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('build', ['copy', 'webpack']);

gulp.task('deploy',['build'], function() {
 return gulp.src('dist/**/*')
    // .pipe(file('CNAME', 'hike.code4.hk'))
   .pipe(ghPages({
    //  cname:"hike.code4.hk"
   }));
});
