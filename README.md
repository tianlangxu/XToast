# XToast #
<hr>

## ˵�� ##
>����`JavaScript`ʵ��Android Ӧ����`Toast`�Ի����Ч��

**Ч��ͼ:**

![imgs/xiaoguo-pc.png](imgs/xiaoguo-pc.png "")
![imgs/xiaoguo-phone.png](imgs/xiaoguo-phone.png "")

ʹ��˵��
```html
<script type="text/javascript" src="js/XToast.js"></script>
<script>
    // init view,not essential
    XToast.initView();
    // use toast show info 
    XToast.showXToast();
    // dismiss toast
    XToast.dismissXToast();    
</script>
```

## API�� ##

>initView() ��ʼ����ͼ



**param:**<br>
initView(option);<br>
*opation:Object*

����                      |˵��
-------------------------|--------------
*opation��Object*         |������⣺<br> width����� <br>       height���߶� <br>       fontSize�������С <br>      color��������ɫ <br>       unit����λ��px/em/rem <br>       bottom�������·���λ�� <br>       

initView(y);<br>

����                      |    ˵��
-------------------------|--------------
 *y:number or string* |�ı���Y�����ϵ�λ�� 
 *string:top/center/bottom* |top:��ʾ�����Ϸ���center����ʾ���м�λ�ã�bottom����ʾ���·�

<br>



initView(y,color):<br>

����                      |    ˵��
-------------------------|--------------
*y:number or string* | �ı���Y�����ϵ�λ��
*color:string* |�޸�������ɫ�����봫����ɫֵ


<br>

initView(bWidth, bHeight, textSize, textColor,unit,bottom);<br>

����                      |    ˵��
-------------------------|--------------
*bWidth:number* |���ÿ��<br>
*bHeight:number* |���ø߶�<br>
*textSize:number* |���������С<br>
*textColor:string* |����������ɫ<br>
*unit:string* |���õ�λ(px/em/rem...)<br>
*bottom:number* |���þ��봰���²��ֵľ���<br>

>showXToast() �ڽ�����ʾXToast��ʾ

**param:**<br>
showXToast(info, duration);<br>

����                      |    ˵��
-------------------------|--------------
*info:string* |��ʾ��Ϣ<br>
*duration:number* |��ʾʱ��<br>

>dismissXToast() ����XToast��ʾ

**param:**<br>
dismissXToast();