import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var home_mock = new MockAdapter(axios);


//获取短信验证码
home_mock.onGet('/account/veri_sms/api', { params: { phone: '15650785334' } }).reply(200, {
    "code": 200,
    "msg": '发送成功',
    "result":[]
});

//注册
//TODO:改POST
home_mock.onGet('/account/register/api',{params: {username:'test',password: 'test',confirm: 'test',phone: '15650785334',veri_code:'sssss',email:''}}).reply(200,{
	 "code": 200,
   "msg": "注册成功",
   "result":[]
});

//登录
home_mock.onPost('/account/login/api').reply(200,{
   "code": 200,
   "msg": '登录成功',
   "result":[]
});

//注销
home_mock.onGet('/account/logout').reply(200,{
	"code": 200,
    "msg": "账号已注销",
    "result":[]
});


export default home_mock;
