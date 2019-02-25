(function(undefined){

    var _global;
    //工具函数
    //配置合并
    function extend (def,opt,override) {
        for(var k in opt){
            if(opt.hasOwnProperty(k) && (!def.hasOwnProperty(k) || override)){
                def[k] = opt[k]
            }
        }
        return def;
    }
    //日期格式化
    function formartDate (y,m,d,symbol) {
        symbol = symbol || '-';
        m = (m.toString())[1] ? m : '0'+m;
        d = (d.toString())[1] ? d : '0'+d;
        return y+symbol+m+symbol+d
    }

    // 前面调用
    function Schedule (opt){
        var def = {},
            opt = extend(def,opt,true),
            curDate = opt.date ? new Date(opt.date) : new Date(),
            year = curDate.getFullYear(),//年份
            month = curDate.getMonth(),//月份
            day = curDate.getDate(),  //日
            currentYear = curDate.getFullYear(),//年份
            currentMonth = curDate.getMonth(), //月份
            currentDay = curDate.getDate(),     //日
            selectedDate = '',
            el = document.querySelector(opt.el) || document.querySelector('body'),
            _this = this;
        var fullDay = new Date(year,month+1,0).getDate(); //当月总天数
        // console.log(fullDay,"当月总天数");
        // console.log(currentYear,currentMonth+1,currentDay);
        // console.log(opt);


        // 循环 添加 日历天数
        var li = "";
        for(var i = 1; i <= fullDay; i++){
            if(i == day){
                li +="<li class='tian' data-align="+i+">"+i+"</li>";
            }
            else{
                li +="<li data-align="+i+">"+i+"</li>";
            }
            // console.log(li)
            $(".uls").html(li)
        }

        // 高度判断
        if(fullDay % 7 == 0){
            $(".uls").css("height","240px")
        }
        else{
            $(".uls").css("height","300px")
        }


        // 查询 用户 已签到次数，并渲染后页面上
        var arr = [1,2,3,4,8,9,10];//后台返回签到数组
        // console.log(arr.length)
        $(".yiqiandao_text").html("已签到"+arr.length+"天");

        for(var i = 1;i<=fullDay; i++){
            arr.forEach(function(item,index){
                // console.log(item,index)
                if(i == item){
                    var inde = $(".uls li").eq(i-1).addClass("qiandao");
                    // console.log(inde);
                    // console.log(i,item,"相同")
                }
            });
        }


        // 点击签到
        var off = $(".off").val();
        if(off == 0){
            $(".btn").bind("click",function(){
                $(".uls li").each(function(index,item){
                    if($(item).hasClass("tian")){
                        $(item).addClass("qiandao");
                        arr.push($(this).data("align"));
                        $(".yiqiandao_text").html("已签到"+arr.length+"天");
                        // console.log(item,index+1)
                        alert("签到成功")//签到成功，弹出模板，点击确定，刷新页面
                    }
                });
            });
        }
        else{
            $(".btn").bind("click",function(){
                alert("已签到")
            });
        }







        // 补签
        $(".uls").on("click","li",function(){
            // console.log(day);//当天
            // console.log($(this).data("align")); //点击的天数
            var click_tian = $(this).data("align");
            if(click_tian == day){
                if($(this).hasClass("qiandao")){
                   alert("已签到")
                }
                else{
                    alert("请点击下方签到按钮")
                }
            }
            else if(click_tian < day){
                if($(this).hasClass("qiandao")){
                    alert("已签到")
                }
                else{
                    alert("未签到，是否补签");//点击确定补签，查看用户是否可以补签，然后提示补签成功或者失败，成功刷新页面，失败不刷新
                }
            }
            else if(click_tian > day){
                alert("签到还未开始")
            }

        })

    }






    //将插件暴露给全局对象
    _global = (function(){return this || (0,eval)('this')}());
    if(typeof module !== 'undefined' && module.exports){
        module.exports = Schedule;
    }else if (typeof define === "function" && define.amd){
        define(function () {
            return Schedule;
        })
    }else {
        !('Schedule' in _global) && (_global.Schedule = Schedule);
    }

}());




