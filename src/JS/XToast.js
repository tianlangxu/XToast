(function (document, owner) {

    var dMess = document.createElement("div");
    // var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;

    var getTimeoutFirst = 0;
    var getTimeoutSecond = 0;

    // ------------------
    var mBoxWidth = 0;
    var mBoxHeight = 0;
    var mFontSize = 0;
    var mFontColor = "";
    var mUnit = "";
    var mWindowTop = "null";
    var mWindowBottom = 0;
    var mBorderRadius = 0;

    /* init view */
    createView(200, 40, 14, "#FFF", "px", 100);


    /**
     * 初始化XToast样式
     * @param  {[number]} bWidth    [description] 设置宽度
     * @param  {[number]} bHeight   [description] 设置高度
     * @param  {[number]} textSize  [description] 设置字体大小
     * @param  {[string]} textColor [description] 设置字体颜色
     * @param  {[string]} unit      [description] 设置单位(px/em/rem...)
     * @param  {[number]} bottom    [description] 设置距离窗口下部分的距离
     * @param  {[number]} borderRadius [description] 设置边框圆角
     * @return {[undefined]}        [description]
     */
    owner.initView = function (bWidth, bHeight, textSize, textColor, unit, bottom, borderRadius) {
        var paramLength = arguments.length;
        if (paramLength == 0) {
            mWindowBottom = 100;
            createView()
        }
        if (paramLength == 1) {
            if (isObject(arguments[0])) {
                // this is object
                createView(arguments[0].width, arguments[0].height, arguments[0].fontSize, arguments[0].color, arguments[0].unit, arguments[0].buttom, arguments[0].borderRadius)
            } else {
                setWindowTopOrBottom(arguments[0])
                createView();
            }

        } else if (paramLength == 2 || paramLength == 3) {
            setWindowTopOrBottom(arguments[0]);
            setFontColor(arguments[1]);
            setBorderRadius(arguments[2]);
            createView()
        } else {
            createView(bWidth, bHeight, textSize, textColor, unit, bottom, borderRadius)
        }
    }


    /**
     * 设置边框弧度
     * @param borderRadius {[number]}
     */
    function setBorderRadius(borderRadius) {
        mBorderRadius = borderRadius;
    }

    /**
     * 设置字体颜色
     * @param color {[String]}
     */
    function setFontColor(color) {
        if (typeof color == undefined) {
            color = "#FFF";
            if (typeof color != "string") {
                throw new Error("Please set color string value!");
            }
        }
        mFontColor = color;
    }

    /**
     * 设置XToast在屏幕上的显示位置
     * @param y {[number]}
     */
    function setWindowTopOrBottom(y) {
        if (typeof y == "string") {
            y = y.toLocaleLowerCase();
            if (y == "top") {
                mWindowTop = 0;
                mWindowBottom = "null";
            } else if (y == "center") {
                mWindowTop = clientHeight / 2;
                mWindowBottom = "null";
            } else if (y == "bottom") {
                mWindowTop = "null";
                mWindowBottom = 0;
            } else {
                y = parseFloat(y);
                if (isNaN(y)) {
                    throw new Error("Please set the display position:top/center/bottom");
                }
            }
        }
        if (typeof y == "number") {
            if (y <= 0) {
                mWindowTop = 0;
                mWindowBottom = "null";
            } else if (y >= clientHeight) {
                mWindowTop = "null";
                mWindowBottom = 0;
            } else {
                mWindowTop = y;
                mWindowBottom = "null"
                //mWindowBottom = y;
            }

        }
    }

    /*创建视图*/
    function createView(bWidth, bHeight, textSize, textColor, unit, bottom, borderRadius) {
        if (bottom == undefined) {
            mWindowBottom = mWindowBottom || 1;
        } else {
            mWindowBottom = bottom || 1;
        }

        if (textColor == undefined) {
            mFontColor = "" + mFontColor
        } else {
            mFontColor = "" + textColor
        }

        mBoxWidth = parseFloat(bWidth) || 200;
        mBoxHeight = parseFloat(bHeight) || 40;
        mFontSize = parseFloat(textSize) || 16;

        if (borderRadius == undefined) {
            mBorderRadius = parseFloat(mBorderRadius) || (mBoxWidth / 2);
        } else {
            mBorderRadius = parseFloat(borderRadius) || (mBoxWidth / 2);
        }


        mUnit = getUnit(unit + "");

        mWindowTop = mWindowTop || 1;

        /** 初始化CSS样式 */
        dMess.style.width = mBoxWidth + "" + mUnit;
        dMess.style.height = mBoxHeight + "" + mUnit;
        dMess.style.background = "rgba(0,0,0,0.5)";
        dMess.style.position = "fixed";
        dMess.style.left = "50%";
        dMess.style.marginLeft = (-mBoxWidth / 2) + "" + mUnit

        dMess.style.borderRadius = mBorderRadius + "" + mUnit;
        dMess.style.font = (+mFontSize) + "px/" + (+mBoxHeight) + mUnit + " '楷体','宋体'";
        dMess.style.textAlign = 'center';
        dMess.style.color = mFontColor + "";

        dMess.id = "toastInfo";
        dMess.style.display = "none";
        if (typeof mWindowBottom == "number") {
            dMess.style.bottom = mWindowBottom + "" + mUnit;
        } else if (typeof mWindowTop == "number") {
            dMess.style.top = mWindowTop + "" + mUnit;
        }

        document.body.appendChild(dMess);
    }

    /*获取当前的单位（px/em/rem）*/
    function getUnit(mUnit) {
        mUnit = mUnit || "px";
        var str = "";

        switch (mUnit) {
            case "em":
                str = "em";
                break;
            case "rem":
                str = "rem";
                break;
            default:
                str = "px";
                break;
        }
        return str;
    }

    /**
     * 判断当前对象是否为Object类型
     * @param  {[All]}  obj [description] 需要检测的对象
     * @return {Boolean}     [description] true:Object类型 <br>
     *                                     false:表示为其他类型
     */
    function isObject(obj) {
        return Object.prototype.toString.call(obj) == '[object Object]';
    }


    /**
     * 在界面显示XToast
     * @param  {[string]} info     [description] 显示信息
     * @param  {[number]} duration [description] 显示时长
     */
    owner.showXToast = function (info, duration) {
        info = info || '';
        duration = parseFloat(duration) || 3000;

        this.dismissXToast();
        clearTimeout(getTimeoutFirst); // 取消第一个setTimeout
        clearTimeout(getTimeoutSecond);

        getTimeoutFirst = setTimeout(function () {
            toastInfo.innerHTML = info + "";

            if (toastInfo.style.display == "none" || toastInfo.style.display == "") {
                toastInfo.style.display = "block";
            }

            getTimeoutSecond = setTimeout(function () {
                if (toastInfo.style.display == "block") {
                    toastInfo.style.display = "none";
                }
            }, duration);

        }, 200);
    };

    /**
     * 隐藏XToast显示
     */
    owner.dismissXToast = function () {
        if (toastInfo.style.display == "block") {
            toastInfo.style.display = "none";
        }
    }

})(document, window.XToast = {});