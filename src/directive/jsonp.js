//传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，
//这样客户端就可以随意定制自己的函数来自动处理返回数据了
var jsonp = function (url, data, callback) {
    var cbFuncName = 'jsonp_fun' + Math.random().toString().replace('.', '');
    window[cbFuncName] = callback;
    var queryString = url.indexOf('?') == -1 ? '?' : '&';
    for (var key in data) {
        queryString += key + '=' + data[key] + '&';
    }
    queryString += 'callback=' + cbFuncName;
    var script = document.createElement('script');
    script.src = url + queryString;
    document.body.appendChild(script);
}
export default jsonp