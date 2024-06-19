(function ($) {
    $.fn.extend({
        qmTabs: function () {
            var aTabBodys = $('#tabs-body > div');
            $(this).children("li").each(function (index) {
                $(this).click(function () {
                    //alert(index);
                    $(this).removeClass().addClass('tab-nav-action').siblings().removeClass().addClass('tab-nav');
                    aTabBodys.hide().eq(index).show();
                });
            });
        }

		
    });
})(jQuery);


//获取形如2020-2-1格式的日期，x是可以加减的天数
//改成形如2020-02-01的格式
function getFormatDate(x)
{
				var dateTime=new Date();
//alert(dateTime.getDate());
				dateTime=dateTime.setDate(dateTime.getDate()+x);
				dateTime=new Date(dateTime);
				var cmonth=dateTime.getMonth()+1;//js里的0代表1月，真实月份要+1
				cmonth=cmonth < 10 ? '0' + cmonth : '' + cmonth;//三木运算符，单月号变成双月号，例如3月变03月
				cdate=dateTime.getDate();
				cdate=cdate < 10 ? '0' + cdate : '' + cdate;//三木运算符，单位日号变双位日号，例４号烃０４号
				var dd=dateTime.getFullYear()+"-"+cmonth+"-"+cdate;
				return dd;
}


//这个也能获取url参数，并且不会有中文乱码
function getUrlParamCN(name)
{
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
var r = decodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
if (r != null) return unescape(r[2]); return null; //返回参数值
}



