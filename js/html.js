function clickStr(){
    //$("head").append("<script src='http://www.le-me.cn:8080/eddy/codeStr.do?back=new'><\/script>");
    $.ajax({
        type: "get",    // 此处只能是get请求 post请求后端即使修改（method = RequestMethod.POST）了也不行
        async: true,
        url: "http://192.168.2.131:8011/codeStr.do?callback="+"",
        dataType: "json",
        jsonp: "callback",
//        jsonpCallback:"back",
        success: function(json){
            console.log(json)
            alert(json.callback);
        },
        error: function(){
            alert('fail');
        }
    });
}