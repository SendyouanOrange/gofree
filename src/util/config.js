let baseUrl;

if (process.env.NODE_ENV !== 'production') {
    baseUrl = "http://47.92.152.181:8000"
}else {
	baseUrl = "http://47.92.152.181:8000"
}

export {baseUrl}
