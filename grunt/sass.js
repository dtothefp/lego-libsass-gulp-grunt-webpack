var path = require('path');

module.exports = {
  options: {
    includePaths: [require('lego').includePath]
  },
  dist: {
    src: path.join('<%= grunt.config.get("src") %>', 'main.scss'),
    dest: path.join('<%= grunt.config.get("dist") %>', 'main.css')
  }
};
