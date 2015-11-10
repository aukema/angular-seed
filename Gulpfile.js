var gulp = require('gulp');

gulp.task('express', function() {
	var express = require('express');
	var app = express();
	app.use(express.static(__dirname + '/app'));
	app.listen(process.env.PORT || 3000);
});

gulp.task('default', ['express'], function() {

});

gulp.task('serveprod', function() {
  connect.server({
    root: [your_project_path],
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});