//创建一个XMLHttpRequest
function GetXmlHttpObject() {
    var xmlHttp = null;

    try{
        //Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }catch(e){
        //Internet Explorer
        try{
            xmlHttp = new ActiveXObject('Msxm12.XMLHTTP');
        }catch(e){
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
    }
    return xmlHttp;
}
//建立一个ajax请求
var xmlHttp;
function showHint(str) {
    if(str.length == 0) {
        document.getElementById('txtHint').innerHTML = "";
        return;
    }
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null) {
        console.log('Browser does not support HTTP Request');
        return;
    }
    var url = ''gethint.php;
    url = url + '?q=' + str +'&sid=' + Math.random();
    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open('GET', url, true);
    xmlHttp.send(null);
}
//判断状态是否改变
function stateChanged() {
    if(xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
        document.getElementById('txtHint').innerHTML = xmlHttp.responseText;
    }
}