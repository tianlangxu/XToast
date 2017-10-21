# XToast #
<hr>

##˵��##
>����`JavaScript`ʵ��Android ��Ӧ��`Toast`�Ի����Ч��

**Ч��ͼ:**

![xiaoguo-pc.png](xiaoguo-pc.png "")
![xiaoguo-phone.png](xiaoguo-phone.png "")

ʹ��˵��
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

##API��##

>initView() ��ʼ����ͼ



**param:**<br>
initView(y);<br>

����                      |    ˵��
-------------------------|--------------
 *y(number or string)��* | �ı���Y�����ϵ�λ�� 
 *string:top/center/bottom* |top:��ʾ�����Ϸ���center����ʾ���м�λ�ã�bottom����ʾ���·�

<br>



initView(y,textcolor):<br>

����                      |    ˵��
-------------------------|--------------
*y(number or string)��* | �ı���Y�����ϵ�λ��
*color(string)��* |�޸�������ɫ�����봫����ɫֵ


<br>

initView(bWidth, bHeight, textSize, textColor,unit,bottom);<br>

����                      |    ˵��
-------------------------|--------------
*bWidth(number):* |���ÿ��<br>
*bHeight(number):* |���ø߶�<br>
*textSize(number):* |���������С<br>
*textColor(number):* |����������ɫ<br>
*unit(number):* |���õ�λ(px/em/rem...)<br>
*bottom(number):* |���þ��봰���²��ֵľ���<br>

>showXToast() �ڽ�����ʾXToast��ʾ

**param:**<br>
showXToast(info, duration);<br>

����                      |    ˵��
-------------------------|--------------
*info(string):* |��ʾ��Ϣ<br>
*duration(number):* |��ʾʱ��<br>

>dismissXToast() ����XToast��ʾ

**param:**<br>
dismissXToast();