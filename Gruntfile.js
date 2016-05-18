/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description Gruntfile.js
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        expand: true,     // Enable dynamic expansion.
        cwd: './public/js/',      // Src matches are relative to this path.
        src: ['**/*.js', '!**/*.min.js'], // Actual pattern(s) to match.
        dest: './assets/js/',   // Destination path prefix.
        ext: '.min.js',   // Dest filepaths will have this extension.
        extDot: 'first'   // Extensions in filenames begin after the first dot
        /*options: {
          process: function(content, srcpath) {
            // do sth
          }
        }*/
      }
    },
    less: {
      custom_build: {
        options: {
          paths: ['./public/less/'],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
            new (require('less-plugin-clean-css'))({})
          ],
          modifyVars: {}  // global vars
        },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: './public/less/',      // Src matches are relative to this path.
            src: ['*.less'], // Actual pattern(s) to match.
            dest: './assets/css/',   // Destination path prefix.
            ext: '.min.css',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          }
        ]
      },
      bootstrap_build: {
        options: {
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
            new (require('less-plugin-clean-css'))({})
          ],
          modifyVars: {}  // global vars
        },
        files: {
          './assets/css/bootstrap.min.css': './public/less/bootstrap-3.3.5/less/bootstrap.less'
        }
      }
    },
    uglify: {
      build: {
        options: {
          preserveComments: 'some'
        },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: './public/js/',      // Src matches are relative to this path.
            src: ['**/*.js', '!**/*.min.js'], // Actual pattern(s) to match.
            dest: './assets/js/',   // Destination path prefix.
            ext: '.min.js',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          }
        ]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['./public/js/**/*.js', '!./public/js/**/*.min.js'],
        tasks: ['copy:main'],
        options: {
          interrupt: true,
          spawn: true
        }
      },
      less_custom: {
        files: ['./public/less/*.less'],
        tasks: ['less:custom_build'],
        options: {
          interrupt: true,
          spawn: true
        }
      },
      less_bootstrap: {
        files: ['./public/less/bootstrap-3.3.5/less/**/*.less'],
        tasks: ['less:bootstrap_build'],
        options: {
          interrupt: true,
          spawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['less', 'uglify']);
};
