var featurebook = require('featurebook');

module.exports = function(grunt) {

  grunt.registerTask('default', ['spec-build']);

  grunt.registerTask('spec-build', 'Build specification', function() {
    grunt.log.write('Building specification... ').ok();
  });

  grunt.registerTask('spec-serve', 'Serve specification', function() {
    grunt.log.write('Serving specification... ').ok();
    grunt.log.write(featurebook);
  });

};
