/* manifest 后缀自定义,只需指定类型即可text/cache-manifest，
   更新方式：更新manifest 或js操作 或者删除缓存文件

   var appCache =window.applicationCache;
   appCache.update();
   if(appCache.status == window.applicationCache.UPDATEREADY){
        appCache.swapeCache();
   }
*/
/* 站点离线容量限制为5M
    如果列表中有一个下载失败，则更新失败
    引用mainfest的html必须与mainfest文件同源
    CACHE MANIFEST  必不可少且必须在第一行
    系统会自动缓存引用mainfest的html
    manifest文件中CACHE则与NETWORK，FALLBACK的位置顺序没有关系，如果是隐式声明需要在最前面
    FALLBack中的资源必须与mainfest同源
    资源被缓存后直接其绝对地址也会访问缓存的资源
    其他页面如果没被缓存，资源也会从缓存中获取
    mainfest文件改变时，资源请求本身也会触发更新
    本次更新下次生效
*/
<?php
header("Content-Type: text/cache-manifest");
?>
CACHE MANIFEST
# 2012-12-09 v6

CACHE:
# 这部分写需要缓存的资源文件列表
# 可以是相对路径也可以是绝对路径
jquery.min.js

NETWORK:
# 可选
# 这一部分是要绕过缓存直接读取的文件
*

FALLBACK
# 可选
# 这部分写当访问缓存失败后，备用访问的资源
# 每行两个文件，第一个是访问源，第二个是替换文件*.html /offline.html