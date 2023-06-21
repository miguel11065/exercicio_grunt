module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: ['src/styles/**/*.less'],
            tasks: ['less:development']
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/sum.min.js': 'src/scripts/sum.js',
                    'dist/scripts/aritimetica.min.js': 'src/scripts/aritimetica.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('js', ['uglify']);
}