<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>    var string="<ul class="\"cbp_tmtimeline\"" id="\"maina\"" pagesize="+per+">";
    var pos="";
    var oss="";
    $.ajaxSettings.async=false;
    $(document).ready(function() {
        $.getJSON("https://api.ip.sb/geoip?callback=?",
            function(json) {
                pos+=(json.city)+" "+(json.region)+" "+(json.country);
            }
        );
    });
    var info = new Browser();
    oss=info.os;
    window.onload=function(){
        seecontent();
    }
    function ok() {
        var cbp_tmtimeline = function ($children, n) {
            //显示某jquery元素下的前n个隐藏的子元素
            var $hiddenChildren = $children.filter(":hidden");
            var cnt = $hiddenChildren.length;
            for (var i = 0; i < n && i < cnt ; i++) {
                $hiddenChildren.eq(i).show();
            }
            return cnt - n;//返回还剩余的隐藏子元素的数量
        }
     
        jQuery.showMore = function (selector) {
            if (selector == undefined) { selector = ".cbp_tmtimeline" }
            //对页中现有的class=showMorehandle的元素，在之后添加显示更多条，并绑定点击行为
            $(selector).each(function () {
                var pagesize = $(this).attr("pagesize") || 10;
                var $children = $(this).children();
                if ($children.length > pagesize) {
                    for (var i = pagesize; i < $children.length; i++) {
                        $children.eq(i).hide();
                    }
                    $("<div class="\"vpage" txt-center\" style="\"display:" block; text-align: center;\"><button type="\"button\"" class="\"button\"">加载更多...</button></div><br>").insertAfter($(this)).click(function () {
                        if (cbp_tmtimeline($children, pagesize) <= 10 0) { 如果目标元素已经没有隐藏的子元素了，就隐藏“点击更多的按钮条” $(this).hide(); document.getelementbyid("sa").innerhtml="<center>已经到底啦~</center>" }; }); } function p(s){ return s < ? '0' + : preview(){ var pre="document.getElementById("neirong").value;" document.getelementbyid("preview").innerhtml="pre;" savecontent(){ shuoshuo="document.getElementById("neirong").value;" password="document.getElementById("key").value;" if(password="=""){" alert("请输入密码"); ; av.user.login(username,password).then(function (logineduser) }, (error) console.dir(error); if(error.code="==211){" alert('本页面只允许站长发布说说'); }else if(shuoshuo="=""){" alert("内容不能为空"); testobject="AV.Object.extend('shuoshuo');" testobject(); testobject.set('content', shuoshuo); testobject.set('postion', pos); testobject.set('os', oss); testobject.save().then(function (testobject) location.reload(); }) seecontent(){ av.init({ appid: appid, appkey: appkey, currentuser="AV.User.current();" if (currentuser) av.user.logout(); query="new" av.query('shuoshuo'); query.descending('createdat'); query.find().then(function (remarks) remarks.foreach(function(atom){ uncle="atom.attributes.content;" posti="atom.attributes.postion;" os="atom.attributes.os;" fake="atom.createdAt;" d="new" date(fake); const resdate="d.getFullYear()" '-' this.p((d.getmonth() 1)) this.p(d.getdate()) restime="this.p(d.getHours())" ':' this.p(d.getminutes()) this.p(d.getseconds()) li="document.createElement('li');" cc="<li><span class=\" shuoshuo_author_img\"><img src= "http://qdraqx6e2.bkt.clouddn.com/blog/20200720/173251995.gif" data-src="/foxscallion11/foxscallion11.github.io.git/chat/artitalk1.0.0.j/""+img+"\"class=\"avatar" avatar-48\" width="\"48\"" height="\"48\""><span class="\"cbp_tmlabel\""><p></p><p>"+uncle+"</p><p></p><p class="\"shuoshuo_time\"">"+"<span style="\"float:left;\""><i class="\"fas" fa-user-edit\"></i>由   "+OS+"发表</span><span style="\"float:right;\""><i class="\"fa" fa-clock-o\"></i>"+" "+ resDate+" "+resTime+"     "+"</span></p></span>"
                string+=cc;
            })
            string+='</=></ul>';
            document.getElementById("ccontent").innerHTML=string;
            ok();
            $.showMore(".cbp_tmtimeline");
            $('#lazy').fadeOut();
        });
    }
