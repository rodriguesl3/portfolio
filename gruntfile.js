
module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            temp: [
                'app/dist/js',
                'app/dist/css',
                'app/dist/view',
            ],
            all: ['app/dist']
        },
        jshint: {
            dist: {
                src: ['app/js/**/*.js', 'app/*.js']
            }
        },
        concat: {
            scripts: {
                src: ['app/js/**/*.js', 'app/*.js'],
                dest: 'app/dist/js/scripts.min.js'
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
                    'bower_components/angular-parallax/scripts/angular-parallax.js',
                    'bower_components/Materialize/dist/js/materialize.min.js'
                ],
                dest: 'app/dist/js/lib.min.js'
            },
            all: {
                src: ['app/dist/js/lib.min.js', 'app/dist/js/scripts.min.js'],
                dest: 'app/dist/vendor.min.js'
            }
        },
        uglify: {
            scripts: {
                src: ['app/dist/js/scripts.js'],
                dest: 'app/dist/js/scripts.min.js'
            }
        },
        cssmin: {
            libs: {
                src: [
                    'bower_components/angular-chart.js/dist/angular-chart.min.css',
                    'bower_components/animate.css/animate.min.css',
                    'bower_components/font-awesome/css/font-awesome.min.css',
                    'bower_components/Materialize/dist/css/materialize.min.css',
                    'bower_components/slick-carousel/slick/slick.css',
                    'bower_components/slick-carousel/slick/slick-theme.css',
                ],
                dest: 'app/dist/css/csslib.min.css'
            },
            local: {
                src: [
                    'app/css/site.css',
                    'app/css/file.css'
                ],
                dest: 'app/dist/css/csslocal.min.css'
            },
            all: {
                src: ['app/dist/css/csslib.min.css', 'app/dist/css/csslocal.min.css'],
                dest: 'app/dist/vendor.min.css'
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
                dest: 'app/dist/view',
            }
        },


    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');


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
        'htmlmin',
        'clean:temp'
        ]);
};

