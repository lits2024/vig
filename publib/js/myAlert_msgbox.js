(function () {
    $.MsgBox = {
		
		AlertPic: function (title,msg1,msg2,pic,callback_edit,callback_del) {
			if (pic!='-'){GenerateHtml01(title,msg1, msg2,pic);}
			else {GenerateHtml02(title,msg1, msg2);}
            btnOk();  //alert只是弹出消息，因此没必要用到回调函数callback
            btnNo();
			btnEdit(callback_edit);
			btnDel(callback_del);
        },
		/*
        Alert: function (title, msg1,msg2,callback_edit,callback_del) {
            GenerateHtml02(title,msg1, msg2);
            btnOk();  //alert只是弹出消息，因此没必要用到回调函数callback
            btnNo();
			btnEdit(callback_edit);
			btnDel(callback_del);
        },
		*/

		
        Confirm: function (title, msg, callback) {
            GenerateHtml03(title, msg);
            btnOk(callback);
            btnNo();
        } ,

    }
	
	//生成Html,带img
    var GenerateHtml01 = function (title,msg1,msg2,pic) {
        var _html = "";
        _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
        _html += '<a id="mb_ico">x</a>'
		_html +='<div id="mb_msg">' + msg1 +'</div><br>'
		_html +='<div id="mb_msg1">' + msg2 +'</div>'
		_html +='<div id="mb_btnbox">';
		_html +="<img src="+pic+" width='300' height='300'>";
		_html +="<br><br>";
        _html += '<input id="mb_btn_ok" type="button" value="确定" />';
		_html += '<input id="mb_btn_edit" type="button" value="修改" />';
		_html += '<input id="mb_btn_del" type="button" value="删除" />';
        _html += '</div></div>';
        //必须先将_html添加到body，再设置Css样式
        $("body").append(_html); 
        //生成Css
         GenerateCss();
    }
	
	//生成Html,带img
    var GenerateHtml02 = function (title,msg1,msg2,pic) {
        var _html = "";
        _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
        _html += '<a id="mb_ico">x</a>'
		_html +='<div id="mb_msg">' + msg1 +'</div><br>'
		_html +='<div id="mb_msg1">' + msg2 +'</div>'
		_html +='<div id="mb_btnbox">';
		_html +="<br><br>";
        _html += '<input id="mb_btn_ok" type="button" value="确定" />';
		_html += '<input id="mb_btn_edit" type="button" value="修改" />';
		_html += '<input id="mb_btn_del" type="button" value="删除" />';
        _html += '</div></div>';
        //必须先将_html添加到body，再设置Css样式
        $("body").append(_html); 
        //生成Css
         GenerateCss();
    }
	
	
	//生成html,带确定和退出按钮
	    var GenerateHtml03 = function (title, msg) {
        var _html = "";
        _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
        _html += '<a id="mb_ico">x</a><div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';
        _html += '<input id="mb_btn_ok" type="button" value="确定" />';
        _html += '<input id="mb_btn_no" type="button" value="取消" />';
		_html += '<input id="mb_btn_edit" type="button" value="修改" />';
		_html += '<input id="mb_btn_del" type="button" value="删除" />';
        _html += '</div></div>';
        //必须先将_html添加到body，再设置Css样式
        $("body").append(_html); 
        //生成Css
         GenerateCss();
    }
 
 
 
    //生成Css
    var GenerateCss = function () {
        $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
            filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.6'
        });
        $("#mb_con").css({ zIndex: '999999', width: '350px', position: 'fixed',
            backgroundColor: 'White', borderRadius: '15px'
        });
        $("#mb_tit").css({ display: 'block', fontSize: '14px', color: '#444', padding: '10px 15px',
            backgroundColor: '#DDD', borderRadius: '15px 15px 0 0',
            borderBottom: '2px solid #009BFE', fontWeight: 'bold'
        });
        $("#mb_msg").css({ padding: '5px', lineHeight: '20px',
            borderBottom: '2px dashed #DDD', fontSize: '14px'
        });
		$("#mb_msg1").css({ padding: '5px', lineHeight: '20px',
            borderBottom: '2px solid #DDD', fontSize: '14px'
        });
        $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
            border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',
            lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
        });
        $("#mb_btnbox").css({ margin: '15px 0 10px 0', textAlign: 'center' });
        $("#mb_btn_ok,#mb_btn_no").css({ width: '85px', height: '30px', color: 'white', border: 'none' });
        $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
        //$("#mb_btn_no").css({ backgroundColor: 'gray', marginLeft: '20px' });
		$("#mb_btn_edit").css({ backgroundColor: '#168bbb', marginLeft: '20px' });
		$("#mb_btn_del").css({ backgroundColor: 'gray', marginLeft: '20px' });
        //右上角关闭按钮hover样式
        $("#mb_ico").hover(function () {
            $(this).css({ backgroundColor: 'Red', color: 'White' });
        }, function () {
            $(this).css({ backgroundColor: '#DDD', color: 'black' });
        });
        var _widht = document.documentElement.clientWidth;  //屏幕宽
        var _height = document.documentElement.clientHeight; //屏幕高
        var boxWidth = $("#mb_con").width();
        var boxHeight = $("#mb_con").height();
        //让提示框居中
        $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
    }
    //确定按钮事件
    var btnOk = function (callback) {
        $("#mb_btn_ok").click(function () {
            $("#mb_box,#mb_con").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
    //取消按钮事件
    var btnNo = function () {
        $("#mb_btn_no,#mb_ico").click(function () {
            $("#mb_box,#mb_con").remove();
        });
    }
	//修改按钮
	var btnEdit = function (callback) {
        $("#mb_btn_edit").click(function () {
            $("#mb_box,#mb_con").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
	
	//删除按钮
	var btnDel = function (callback) {
        $("#mb_btn_del").click(function () {
            $("#mb_box,#mb_con").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
	
	
})();