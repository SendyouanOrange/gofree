import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';
import WsCache from 'web-storage-cache';

window.$wsCache = new WsCache();

Date.prototype.format = function (format) {
	var date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length === 1
				? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
};


ReactDOM.render(<App />, document.getElementById('app'));


if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
        module.hot.accept()
    }
}
