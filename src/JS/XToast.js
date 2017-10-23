(function (document, owner) {

    var dMess = document.createElement("div");
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;

    var getTimeoutFirst = 0;
    var getTimeoutSecond = 0;

    var boxWidth = 0;
    var boxHeight = 0;
    var fontSize = 0;
    var fontColor = "";
    var unit = "";
    var windowTop = "null";
    var windowBottom = 0;

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
     * @return {[undefined]}        [description]
     */
    owner.initView = function (bWidth, bHeight, textSize, textColor, unit, bottom) {
        var paramLength = arguments.length;
        if (paramLength == 0) {
            windowBottom = 100;
            createView()
        }
        if (paramLength == 1) {
            if (typeof arguments[0] == "object") {
                // this is object
                createView(arguments[0].width, arguments[0].height, arguments[0].fontSize, arguments[0].color, arguments[0].unit, arguments[0].buttom)
            } else {
                createView2ChangeY(arguments[0])
            }

        } else if (paramLength == 2) {
            createView2ChangeY(arguments[0], arguments[1])
        } else {
            createView(bWidth, bHeight, textSize, textColor, unit, bottom)
        }

    }

    /**
     * 创建视图并修改在Y轴上的位置
     * @param  {[number or string]} y  [description] Y轴方向的大小，"top":最上方，"center":中间位置,"bottom":最下方
     * @param  {[string]} color        [description] 字体颜色值
     * @return {[undefined]}           [description]
     */
    function createView2ChangeY(y, color) {
        if (typeof y == "string") {
            y = y.toLocaleLowerCase();
            if (y == "top") {
                windowTop = 0;
                windowBottom = "null";
            } else if (y == "center") {
                windowTop = clientHeight / 2;
                windowBottom = "null";
            } else if (y == "bottom") {
                windowTop = "null";
                windowBottom = 0;
            } else {
                y = parseFloat(y);
                if (isNaN(y)) {
                    throw new Error("Please set the display position:top/center/bottom");
                }
            }
        }
        if (typeof y == "number") {
            if (y <= 0) {
                windowTop = 0;
                windowBottom = "null";
            } else if (y >= clientHeight) {
                windowTop = "null";
                windowBottom = 0;
            } else {
                windowTop = y;
                windowBottom = "null"
                //windowBottom = y;
            }

        }
        if (typeof color == undefined) {
            color = "#FFF";
            if (typeof color != "string") {
                throw new Error("Please set color string value!");
            }
        }

        fontColor = color;
        createView()
    }

    /*创建视图*/
    function createView(bWidth, bHeight, textSize, textColor, unit, bottom) {
        if (bottom == undefined) {
            windowBottom = windowBottom || 1;
        } else {
            windowBottom = bottom || 1;
        }
        if (textColor == undefined) {
            fontColor = "" + fontColor
        } else {
            fontColor = "" + textColor
        }

        boxWidth = parseFloat(bWidth) || 200;
        boxHeight = parseFloat(bHeight) || 40;
        fontSize = parseFloat(textSize) || 16;

        unit = getUnit(unit + "");

        windowTop = windowTop || 1;

        /** 初始化CSS样式 */
        dMess.style.width = boxWidth + "" + unit;
        dMess.style.height = boxHeight + "" + unit;
        dMess.style.background = "rgba(0,0,0,0.5)";
        dMess.style.position = "fixed";
        dMess.style.left = "50%";
        dMess.style.marginLeft = (-boxWidth / 2) + "" + unit

        dMess.style.borderRadius = (boxHeight / 2) + "" + unit;
        dMess.style.font = (+fontSize) + "px/" + (+boxHeight) + unit + " '楷体','宋体'";
        dMess.style.textAlign = 'center';
        dMess.style.color = fontColor + "";

        dMess.id = "toastInfo";
        dMess.style.display = "none";

        if (typeof windowBottom == "number") {
            dMess.style.bottom = windowBottom + "" + unit;
        } else if (typeof windowTop == "number") {
            dMess.style.top = windowTop + "" + unit;
        }

        document.body.appendChild(dMess);
    }

    function getUnit(unit) {
        unit = unit || "px";
        var str = "";

        switch (unit) {
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