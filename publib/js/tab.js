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


//��ȡ����2020-2-1��ʽ�����ڣ�x�ǿ��ԼӼ�������
//�ĳ�����2020-02-01�ĸ�ʽ
function getFormatDate(x)
{
				var dateTime=new Date();
//alert(dateTime.getDate());
				dateTime=dateTime.setDate(dateTime.getDate()+x);
				dateTime=new Date(dateTime);
				var cmonth=dateTime.getMonth()+1;//js���0����1�£���ʵ�·�Ҫ+1
				cmonth=cmonth < 10 ? '0' + cmonth : '' + cmonth;//��ľ����������ºű��˫�ºţ�����3�±�03��
				cdate=dateTime.getDate();
				cdate=cdate < 10 ? '0' + cdate : '' + cdate;//��ľ���������λ�պű�˫λ�պţ���������������
				var dd=dateTime.getFullYear()+"-"+cmonth+"-"+cdate;
				return dd;
}


//���Ҳ�ܻ�ȡurl���������Ҳ�������������
function getUrlParamCN(name)
{
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //����һ������Ŀ�������������ʽ����
var r = decodeURI(window.location.search).substr(1).match(reg); //ƥ��Ŀ�����
if (r != null) return unescape(r[2]); return null; //���ز���ֵ
}



