(function () {
    $.AlertPicbox = {
		
		AlertPicbox01: function (title,pic) {
			GenerateHtml01(title,pic);
            btnOk();  //alert只是弹出消息，因此没必要用到回调函数callback
        },

    }
		
	//生成Html,带img
    var GenerateHtml01 = function (title,pic) {
		
        var _html = "";
        _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
		_html +='<div id="mb_btnbox">';
		_html +="<img id='mb_image' src="+pic+" width='350' height='530' >";
		_html +="<br><br>";
        _html += '<input id="mb_btn_ok" type="button" value="确定" />';
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
        $("#mb_btnbox").css({ margin: '15px 0 10px 0', textAlign: 'center' });
        $("#mb_btn_ok").css({top:0, width: '90px', height: '27px', color: 'white', border: 'none' });
        $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
        var _widht = document.documentElement.clientWidth;  //屏幕宽
        var _height = document.documentElement.clientHeight; //屏幕高
        var boxWidth = $("#mb_con").width();
        var boxHeight = $("#mb_con").height();
        //让提示框居中
        //$("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
		$("#mb_con").css({ top: 0, left: (_widht - boxWidth) / 2 + "px" });
		$("#mb_image").css({ height:_height*0.78,top:'0'});

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
	

	
})();