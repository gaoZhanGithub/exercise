## html
1. [meta 标签](http://segmentfault.com/blog/ciaocc/1190000002407912)
     
     **meta标签提供关于HTML文档的元数据，不会直接显示在页面上，但是对于机器是可读的，可用于浏览器（如何显示内容或重新加载页面）、渲染引擎、或其他web服务**
     1. 屏蔽chrome弹出是否翻译提示
     
     `<meta name="google" value="notranslate">`  
     
     2. 
    
2.  SVG可以使用外部SVG资源中的图标什么的，但是所有IE浏览器都不支持，只支持内联SVG。 ` <svg viewBox="0 0 100 100"> <use xlink:href="defs.svg#icon-1"></use> </svg>` 





## css
1. [css Shape](http://zhuanlan.zhihu.com/FrontendMagazine/19774074) [css Shape online tools](http://bennettfeely.com/clippy/)   

   `.element{
        shape Property:shape Function(/* parameters */);
   }`
   * shape Property
       
       形状函数接受坐标点或偏移量、或图片的Alpha通道来定义

       1. shape-outside:限制形状周围的内容
       2. shape-inside：限制形状内部的内容

   * shape Function
       
       形状函数接受坐标点或偏移量、或图片的Alpha通道来定义

       1. circle
       2. ellipse
       3. inset
       4. polygon

   **必须满足一下条件css shape 才会生效**

       1. 元素必须是浮动的
       2. 元素必须有确定的尺寸
    
2. 响应式图片srcset全新释义sizes属性、w描述符 [参考](http://www.zhangxinxu.com/wordpress/2014/10/responsive-images-srcset-size-w-descriptor/)

    `<img src="..." srcset="mm-width-128px.jpg 128w,mm-width-256px.jpg 256w,mm-width-512px.jpg" sizes="(max-width:360px) 340px,128px" />`
    
    `<img src="..." srcset="mm-width-128px.jpg 128w,mm-width-256px.jpg 256w,mm-width-512px.jpg" sizes="(max-width:360px) calc(100vw - 20px),128px" />`
    
    
    
    
    
## js    
1. [javascript patterns](https://github.com/TooBug/javascript.patterns)
2. [javascript developer文档 ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
3. mootools



## article
1. [ios 8 十个变化](http://luolei.org/safari-ios8-iphone6-web-developers-designers-chinese/)
2. [github 秘籍](https://github.com/tiimgreen/github-cheat-sheet/blob/master/README.zh-cn.md)
3. [css3 浏览器支持情况查询](http://caniuse.com/#)
4. [dom是如何和css规则匹配的](http://segmentfault.com/q/1010000000618288)

    