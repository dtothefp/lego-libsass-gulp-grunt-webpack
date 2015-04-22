var path = require('path');

module.exports = {
  dist: {
    options: {
      //imagesPath: '',
      outputStyle: 'expanded',
      sassDir: '<%= grunt.config.get("src") %>',
      cssDir: '<%= grunt.config.get("dist") %>',
      //environment: '',
      importPath: [
        require('lego').includePath,
        path.join(process.cwd(), 'bower_components/css-smart-grid/sass')
      ],
      specify: [path.join('<%= grunt.config.get("src") %>' ,'main.scss')]
    }
  }
};
