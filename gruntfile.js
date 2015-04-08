module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
    jitGrunt: {
      staticMappings: {
      }
    },
    init: true
  });

	// The development server (the recommended option for development)
	grunt.registerTask('default', ['config:dev', 'sass']);

};
