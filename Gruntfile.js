module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ''
      },
      form: {
        src: ['./src/**/*.js'],
        dest: './concat/form.js'
      }
    },
    uglify:{
      options: {
        sourceMap: true,
        souceMapIncludeSources: true
      },
      form: {
        files: {
          'dist/form.min.js' : ['concat/form.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify']);
};
