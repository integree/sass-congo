module.exports = function (grunt) {
    grunt.initConfig({
      
    // Metadata
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Sass-Congo v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            // ' * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n' +
            ' */\n',   
    
    // Concat
    
    concat: {
      options: {
        stripBanners: true,
        banner: '<%= banner %>',
        process: function(src, filepath) {
          var filepath = filepath.match(/\/([^/]*)$/)[1];
          
          var separator = '\n/*! ========================================================================\n' +
                          ' * \n' +
                          ' * Sass-Congo: ' + filepath + ' \n' +
                          ' * \n' +
                          ' * ======================================================================== */\n\n' + src;
          return separator;
        }
      },      
      
      // Materials
      
      materials: {
        src: [
          'assets/javascripts/materials/material.js',
          'assets/javascripts/materials/ripples.js',
          'assets/javascripts/materials/velocity.js',

          // 'assets/javascripts/materials/dropdown.js',
          'assets/javascripts/materials/letters.js',
          'assets/javascripts/materials/tabs.js',
        ],
        
        dest: 'dist/js/materials.js'
      }
      
    },
    
    // Minify files
        
    uglify: {
        files: { 
            src: 'dist/js/*.js',  // source files mask
            dest: 'dist/js/',    // destination folder
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: '.min.js'   // replace .js to .min.js
        },
    },

    watch: {
        js:  { files: 'assets/javascripts/materials/*.js', tasks: [ 'uglify', 'concat' ] },
    }
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

// register at least this one task
grunt.registerTask('default', [ 'uglify', 'concat' ]);

};