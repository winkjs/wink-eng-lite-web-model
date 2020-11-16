module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-terser');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    terser: {
      options: {
        mangle: false
      },
      main: {
        files: {
          'dist/cer-transformers.js': ['src/cer-transformers.js'],
          'dist/constants.js': ['src/constants.js'],
          'dist/feature.js': ['src/feature.js'],
          'dist/load-cer-meta-model.js': ['src/load-cer-meta-model.js'],
          'dist/load-core-model.js': ['src/load-core-model.js'],
          'dist/load-negation-model.js': ['src/load-negation-model.js'],
          'dist/load-pos-model.js': ['src/load-pos-model.js'],
          'dist/load-ner-model.js': ['src/load-ner-model.js'],
          'dist/load-sa-model.js': ['src/load-sa-model.js'],
          'dist/load-sbd-model.js': ['src/load-sbd-model.js'],
          'dist/model.js': ['src/model.js'],
          'dist/negation-setter.js': ['src/negation-setter.js'],
          'dist/ner-transformers.js': ['src/ner-transformers.js'],
          'dist/pos-setter.js': ['src/pos-setter.js'],
          'dist/pos-transformers.js': ['src/pos-transformers.js'],
          'dist/pos-updater.js': ['src/pos-updater.js'],
          'dist/read-core-model.js': ['src/read-core-model.js'],
          'dist/sa-setter.js': ['src/sa-setter.js'],
          'dist/sbd-setter.js': ['src/sbd-setter.js'],
          'dist/sbd-transformers.js': ['src/sbd-transformers.js'],
          'dist/token-categories.js': ['src/token-categories.js'],
          'dist/porter-stemmer.js': ['src/porter-stemmer.js'],
        }
      }
    },
    copy: {
      files: {
        expand: true,
        flatten: true,
        src: ['src/languages/cur/models/**'],
        dest: 'dist/languages/cur/models',
        filter: 'isFile'
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['terser', 'copy'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Default task(s).
  grunt.registerTask('default', ['terser', 'copy']);

};
