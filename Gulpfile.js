var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('default', ['express'], function() {
	
});

gulp.task('express', function() {
	var express = require('express');
	var app = express();
	app.use(express.static(__dirname + '/app'));
	app.listen(process.env.PORT || 3000);
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});