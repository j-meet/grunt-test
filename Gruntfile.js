module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dist: {
				files: [{
					'HTML/js/common.min.js': ['HTML/js/jquery.timelify.js', 'HTML/js/wmw-timeline.js']
				}]
			}
		},
		cssmin: {
			target: {
				files: [{
					'HTML/css/common.css': ['HTML/css/timelify.css', 'HTML/css/vmw-timeline.css'],
				}]
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task(s).
	grunt.registerTask('default', ['uglify','cssmin']);

};