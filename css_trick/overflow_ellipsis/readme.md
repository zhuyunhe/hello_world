css实现多行文本的省略号显示。

利用webkit的扩展属性实现多行文本的省略号显示需要配合其他三个属性：display: -webkit-box、-webkit-box-orient、text-overflow: ellipsis;。其中
-webkit-line-clamp设置块元素包含的文本行数；
display: -webkit-box设置块元素的布局为伸缩布局；
-webkit-box-orient设置伸缩项的布局方向；
text-overflow: ellipsis;则表示超出盒子的部分使用省略号表示。

本demo只采用标准css属性,可以兼容只实现了css2.1规范的浏览器。
