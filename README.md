# XToast #
<hr>

##说明##
>采用`JavaScript`实现Android 中应用`Toast`对话框的效果

**效果图:**

![xiaoguo-pc.png](xiaoguo-pc.png "")
![xiaoguo-phone.png](xiaoguo-phone.png "")

使用说明
```html
<script type="text/javascript" src="js/XToast.js"></script>
<script>
    // init view,not essential
    XToast.initView();
    // use toast show info 
    XToast.showXTaost();
    // dismiss toast
    XToast.dismissXToast();    
</script>
```

##API：##

>initView() 初始化视图



**param:**<br>
initView(y);<br>

参数                      |    说明
-------------------------|--------------
 *y(number or string)：* | 改变在Y方向上的位置 
 *string:top/center/bottom* |top:显示在最上方，center：显示在中间位置，bottom：显示在下方

<br>



initView(y,textcolor):<br>

参数                      |    说明
-------------------------|--------------
*y(number or string)：* | 改变在Y方向上的位置
*color(string)：* |修改字体颜色，必须传入颜色值


<br>

initView(bWidth, bHeight, textSize, textColor,unit,bottom);<br>

参数                      |    说明
-------------------------|--------------
*bWidth(number):* |设置宽度<br>
*bHeight(number):* |设置高度<br>
*textSize(number):* |设置字体大小<br>
*textColor(number):* |设置字体颜色<br>
*unit(number):* |设置单位(px/em/rem...)<br>
*bottom(number):* |设置距离窗口下部分的距离<br>

>showXToast() 在界面显示XToast提示

**param:**<br>
showXToast(info, duration);<br>

参数                      |    说明
-------------------------|--------------
*info(string):* |显示信息<br>
*duration(number):* |显示时长<br>

>dismissXToast() 隐藏XToast提示

**param:**<br>
dismissXToast();