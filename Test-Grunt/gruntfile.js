module.exports=function(grunt){
    require('matchdep').filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        //html���
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
        //ѹ����Դ�ļ��е����б������ͺ������Ա㾡���ܵ�ѹ���ռ䣬Ȼ���ȥ�˿ո��ע��
        uglify:{
            build:{
                files:{
                    'build/js/base.min.js':['assets/js/base.js']
                }
            }
        },
        //�ϲ�css����
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
        //ȥ���ո�#ffffffת����#fff֮��
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