﻿
module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            temp: [
                'app/publish/js',
                'app/publish/css',
            ],
            all: ['app/publish']
        },
        jshint: {
            dist: {
                src: ['app/js/**/*.js', 'app/*.js']
            }
        },
        concat: {
            scripts: {
                src: ['app/js/**/*.js', 'app/*.js'],
                dest: 'app/publish/js/scripts.js'
            },
            libs: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/Chart.js/Chart.js',
                    'bower_components/slick-carousel/slick/slick.min.js',
                    'bower_components/angular-slick-carousel/dist/angular-slick.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                    'bower_components/d3/d3.min.js',
                    'bower_components/c3/c3.min.js',
                    'bower_components/angular-chart.js/dist/angular-chart.min.js',
                    'bower_components/angular-sanitize/angular-sanitize.min.js',
                    'bower_components/angular-parallax/scripts/angular-parallax.js',
                    'bower_components/Materialize/dist/js/materialize.min.js'
                ],
                dest: 'app/publish/js/lib.min.js'
            },
            all: {
                src: ['app/publish/js/lib.min.js', 'app/publish/js/scripts.min.js'],
                dest: 'app/publish/vendor.min.js'
            }
        },
        uglify: {
            scripts: {
                src: ['app/publish/js/scripts.js'],
                dest: 'app/publish/js/scripts.min.js'
            }
        },
        cssmin: {
            libs: {
                src: [
                    'bower_components/Materialize/dist/css/materialize.min.css',
                    'bower_components/angular-chart.js/dist/angular-chart.min.css',
                    'bower_components/animate.css/animate.min.css',
                    'bower_components/font-awesome/css/font-awesome.min.css',
                    'bower_components/slick-carousel/slick/slick.css',
                    'bower_components/slick-carousel/slick/slick-theme.css',
                ],
                dest: 'app/publish/css/csslib.min.css'
            },
            local: {
                src: [
                    'app/css/site.css',
                    'app/css/file.css'
                ],
                dest: 'app/publish/css/csslocal.min.css'
            },
            all: {
                src: ['app/publish/css/csslib.min.css', 'app/publish/css/csslocal.min.css'],
                dest: 'app/publish/vendor.min.css'
            }
        },
        htmlmin: {
            views: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                expand: true,
                cwd: 'app/views/',
                src: ['**/*.html'],
                dest: 'app/publish/views',
            },
            index: {
                options: {
                    removeComments: false,
                    collapseWhitespace: false
                },
                src: ['app/index-prod.html'],
                dest: 'app/publish/index.html'
            }
        },
        copy: {
            materialize :{
                expand: true,
                cwd:'bower_components/Materialize/publish/css/',
                src: 'materialize.min.css',
                dest: 'app/publish/'
            },
            images: {
                expand: true,
                filter: 'isFile',
                cwd:'app/img/',
                src: '**',
                dest: 'app/publish/img/'
            },
            fonts: {
                expand: true,
                filter: 'isFile',
                cwd: 'app/fonts/',
                src: '**',
                dest: 'app/publish/fonts/'
            },
            font: {
                expand: true,
                filter: 'isFile',
                cwd: 'app/font/',
                src: '**',
                dest: 'app/publish/font/'
            },
           
        },
        watch: {
            project: {
               files: ['**/*.html',
                       'app/css/site.css',
                       'app/css/file.css',
                       'app/js/**/*.js', 
                       'app/*.js'],
                tasks: [
                    'clean:all',
                    'jshint',
                    'concat:scripts',
                    'concat:libs',
                    'uglify',
                    'concat:all',
                    'cssmin:libs',
                    'cssmin:local',
                    'cssmin:all',
                    'htmlmin:views',
                    'htmlmin:index',
                    'copy:materialize',
                    'copy:images',
                    'copy:fonts',
                    'copy:font',
                    'clean:temp'
                    ]
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('prod',
        [
        'clean:all',
        'jshint',
        'concat:scripts',
        'concat:libs',
        'uglify',
        'concat:all',
        'cssmin:libs',
        'cssmin:local',
        'cssmin:all',
        'htmlmin:views',
        'htmlmin:index',
        'copy:materialize',
        'copy:images',
        'copy:fonts',
        'copy:font',
        'clean:temp'
        ]);
};

