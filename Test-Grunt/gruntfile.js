module.exports=function(grunt){
    require('matchdep').filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        //html检测
        htmlhint:{
            build:{
                options:{
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src:['index.html']
            }
        },
        watch:{
            html:{
                files:['index.html'],
                tasks:['htmlhint']
            },
            js:{
                files:['assets/js/*.js'],
                tasks:['uglify']
            },
            css:{
                files:['assets/css/*.css'],
                tasks:['buildcss']
            }
        },
        //压缩了源文件中的所有变量名和函数名以便尽可能的压缩空间，然后出去了空格和注释
        uglify:{
            build:{
                files:{
                    'build/js/base.min.js':['assets/js/base.js']
                }
            }
        },
        //合并css规则
        cssc:{
            build:{
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors:    true,
                    consolidateMediaQueries:    true
                },
                files: {
                    'build/css/base-min.css': 'build/css/base-min.css'
                }
            }
        },
        //去除空格，#ffffff转化成#fff之类
        cssmin:{
            build: {
                src: 'assets/css/base.css',
                dest: 'build/css/base-min.css'
            }
        }
    });
    grunt.registerTask('default',[]);
    grunt.registerTask('buildcss',['cssc','cssmin']);
}