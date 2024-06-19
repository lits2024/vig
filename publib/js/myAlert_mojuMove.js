(function () {
    $.mojuMsgBox = {
		
		mojuAlertPic: function (title,msg1,msg2,prt,gdgoodslcn,callback_ok,callback_edit,callback_del) {
			GenerateHtml02(title,msg1, msg2,prt);
            btnOk(callback_ok);  
            btnNo();//alert只是弹出消息，因此没必要用到回调函数callback
			btnEdit(callback_edit);
			btnDel(callback_del);
			bodyclicktest(gdgoodslcn);
			
        },
		
        mojuConfirm: function (title, msg, callback) {
            GenerateHtml03(title, msg);
            btnOk(callback);
            btnNo();
        },
		

    }

	
	//生成Html,带img
    var GenerateHtml02 = function (title,msg1,msg2,prt) {
        var _html = "";
        _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
        _html += '<a id="mb_ico">x</a>'
		_html +='<div id="mb_msg">' + msg1 +'</div><br>'
		_html +='<div id="mb_msg1">' + msg2 +'</div>'
		_html +='<div id="mb_btnbox">';
		_html +="<br>";
		_html+="<a>打印机:</a><select name='printer' id='idprinter'>"+prt+"</select><br>";
		_html += "<a>迁移到:</a><input id='mojuMoveInput'><select id='mojuselectpos'>";
		_html+="<option value='选位置'>选位置</option><option value='归位'>归位</option><option value='模具'>模具</option>";
		_html+="</select></input>";
		_html += '<br><br>';
        _html += '<input id="mb_btn_ok" type="button" value="确定迁移" />';
		_html += '<input id="mb_btn_no" type="button" value="取消" />';
		_html += '<input id="mb_btn_edit" type="button" value="打印" />';
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
        $("#mb_msg").css({ padding: '5px', lineHeight: '20px','white-space': 'pre','word-break': 'break-all','word-wrap': 'break-word',display:'block',
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
        $("#mb_btn_no").css({ backgroundColor: 'blue', marginLeft: '20px' });
		$("#mb_btn_edit").css({ backgroundColor: 'gray', marginLeft: '20px',width: '65px', height: '30px' });
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
            //$("#mb_box,#mb_con").remove();
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
	//归位按钮
	var btnEdit = function (callback) {
        $("#mb_btn_edit").click(function () {
            //$("#mb_box,#mb_con").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
	
	//模具(货位)按钮
	var btnDel = function (callback) {
        $("#mb_btn_del").click(function () {
            //$("#mb_box,#mb_con").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
	
		//表体点击测试
	var bodyclicktest = function(gdgoodslcn){
	
	//选打印机
	$("#mb_msg").on('click','li',function(){
		

	}
	
	);
	
	//选模具位置
	$("#mojuselectpos").change(function(){
		if ($("#mojuselectpos").val()=="归位")
		{
			//被调用的js想使用主html里的变量是不是行的，但主html里可以使用本js的元素
			$("#mojuMoveInput").attr("value",gdgoodslcn);
		}
		else
		{
			$("#mojuMoveInput").attr("value",$("#mojuselectpos").val());
		}
		if ($("#mojuselectpos").val()=="选位置"){$("#mojuMoveInput").attr("value","");}
		
	}
	
	);
	
	
	
	}
	
})();