var path = require('path');

module.exports = {
  dist: {
    options: {
      style: 'expanded',
      noCache: true,
      loadPath: [
        require('lego').includePath,
        path.join(process.cwd(), 'bower_components/css-smart-grid/sass')
      ]
    },
    src: path.join('<%= grunt.config.get("src") %>', 'main.scss'),
    dest: path.join('<%= grunt.config.get("dist") %>', 'main.css')
  }
};
