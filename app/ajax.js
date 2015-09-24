function fetch(url, options={ method: 'get', body: null }) {
    return new Promise((res, rej) => {
        let x = new(window.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
        x.open(options.method, url, 1);
        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        x.onreadystatechange = function () {
            if(x.readyState === 4)
                res(x)
        }
        x.onerror = function () {
            rej(Error("network error"))
        }
        x.send(options.body)
    })
}

export default fetch;