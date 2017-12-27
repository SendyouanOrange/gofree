import axios from '../util/axios.js';
import MockAdapter from 'axios-mock-adapter';

var gofree_mock = new MockAdapter(axios);

gofree_mock.onGet('/get-personal-rec-list').reply(200,{
  "code": 200,
  "msg": "成功",
  "rec": [
    {
      "id": 1,
      "name": "西湖",
      "description": "未到西湖，未到杭州",
      "url": "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
    },  
    {
      "id": 2,
      "name": "西湖",
      "description": "未到西湖，未到杭州",
      "url": "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
    },  
    {
      "id": 3,
      "name": "西湖",
      "description": "未到西湖，未到杭州",
      "url": "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
    },
        {
      "id": 12,
      "name": "西湖",
      "description": "未到西湖，未到杭州",
      "url": "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
    },
        {
      "id": 13,
      "name": "西湖",
      "description": "未到西湖，未到杭州",
      "url": "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
    },
        {
      "id": 14,
      "name": "西湖",
      "description": "未到西湖，未到杭州",
      "url": "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
    },
        {
      "id": 16,
      "name": "西湖",
      "description": "未到西湖，未到杭州",
      "url": "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
    },
        {
      "id": 10,
      "name": "西湖",
      "description": "未到西湖，未到杭州",
      "url": "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
    },
    {
      "id": 4,
      "name": "西湖",
      "description": "未到西湖，未到杭州",
      "url": "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
    }
  ]
});

gofree_mock.onPost('/post-personal-submit').reply(200,{
  "code":200,
  "msg": '提交成功'
})


gofree_mock.onGet('/get-line').reply(200, {
  "code":200,
  "msg": '',
  /**地图数据**/
  "map": {
    "centerP": [
      "x": 116.404,
      "y": 39.915
    ],
    "points": [
      {
        "x": 116.301934,
        "y": 39.977552,
        "placeId": 1,
        "type": 0
      },
      {
        "x": 116.353407,
        "y": 39.978723,
        "placeId": 2,
        "type": 1
      },
      {
        "x": 116.451143,
        "y": 39.970761,
        "placeId": 3,
        "type": 2
      },
      {
        "x": 116.50832,
        "y": 39.919141,
        "placeId": 4,
        "type": 0
      }
    ]
  },
  /**总览信息**/
  "id": 1,
  "typeName": "民俗特色",
  "destination": "杭州",
  "start": "2017/12/05",
  "end": "2017/12/15",
  "price": 2000,
  /**地点信息**/
  "places": [
    {
      "placeId": 1,
      "name": "西湖",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 0  //（0 景点  1 酒店 2 饭店）
    },
    {
      "placeId": 2,
      "name": "西湖",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 1  //（0 景点  1 酒店 2 饭店）
    },
     {
      "placeId": 3,
      "name": "西湖",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 2  //（0 景点  1 酒店 2 饭店）
    },
    {
      "placeId": 4,
      "name": "西湖",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 0  //（0 景点  1 酒店 2 饭店）
    }
  ],
  /**路线信息 地点数量-1**/
  "lines": [
    {
      "fromToName": "西湖 - 杭州酒家（延安路店)",
      "description": "公交约20分钟，相距3.1公里",
      "price": 2
    },
    {
      "fromToName": "西湖 - 杭州酒家（延安路店)",
      "description": "公交约20分钟，相距3.1公里",
      "price": 2
    },
    {
      "fromToName": "西湖 - 杭州酒家（延安路店)",
      "description": "公交约20分钟，相距3.1公里",
      "price": 2
    }
  ]
});

gofree_mock.onGet('/get-more').reply(200, {
  "code":200,
  "msg":'',
  "places": [
    {
      "placeId": 1,
      "name": "西湖s",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 0 
    },
    {
      "placeId": 1,
      "name": "西湖aaa",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 0 
    },
    {
      "placeId": 1,
      "name": "西湖ss",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 0 
    },
    {
      "placeId": 1,
      "name": "西湖sss",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 0  
    }
  ],
  /*与places索引对应*/
  "map_data": [
    {
      "x": 116.376979,
      "y": 39.921198,
      "placeId": 1,
      "type": 2
    },
    {
      "x": 116.376979,
      "y": 39.921198,
      "placeId": 1,
      "type": 2
    },
    {
      "x": 116.376979,
      "y": 39.921198,
      "placeId": 1,
      "type": 2
    },
    {
      "x": 116.376979,
      "y": 39.921198,
      "placeId": 1,
      "type": 2
    }
  ]
});

gofree_mock.onPost('/select-replace').reply(200,{
  "code":200,
  "msg":'',
  "relate_lines": [
    {
      "fromToName": "西湖 - 杭州酒家（延安路店)ss",
      "description": "公交约20分钟，相距3.1公里",
      "price": 2
    },
    {
      "fromToName": "西湖 - 杭州酒家（延安路店)sss",
      "description": "公交约20分钟，相距3.1公里",
      "price": 2
    }
  ]
})

gofree_mock.onPost('/refresh-all').reply(200,{
  "code":200,
  "msg":'',
  /**地图数据**/
  "map": {
    "centerP": [
      "x": 116.404,
      "y": 39.915
    ],
    "points": [
      {
        "x": 116.301934,
        "y": 39.977552,
        "placeId": 1,
        "type": 1
      },
      {
        "x": 116.353407,
        "y": 39.978723,
        "placeId": 2,
        "type": 1
      },
      {
        "x": 116.451143,
        "y": 39.970761,
        "placeId": 3,
        "type": 1
      },
      {
        "x": 116.50832,
        "y": 39.919141,
        "placeId": 4,
        "type": 1
      }
    ]
  },
  /**总览信息**/
  "id": 2,
  "typeName": "民俗特色",
  "destination": "杭州",
  "start": "2017/12/05",
  "end": "2017/12/15",
  "price": 2002,
  /**地点信息**/
  "places": [
    {
      "placeId": 1,
      "name": "西湖",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 0  //（0 景点  1 酒店 2 饭店）
    },
    {
      "placeId": 2,
      "name": "西湖",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 1  //（0 景点  1 酒店 2 饭店）
    },
     {
      "placeId": 3,
      "name": "西湖",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 2  //（0 景点  1 酒店 2 饭店）
    },
    {
      "placeId": 4,
      "name": "西湖",
      "score": 4.9,
      "zanNum": 2233,
      "tags": [
        "情侣出行",
        "风景名胜",
        "必去"
      ],
      "description": "好地方啊好地方！！！！",
      "price": 10,
      "imgs": [
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg",
        "http://ojtlrnjhy.bkt.clouddn.com/2017-12-08-img_1.jpg"
      ],
      "type": 0  //（0 景点  1 酒店 2 饭店）
    }
  ],
  /**路线信息 地点数量-1**/
  "lines": [
    {
      "fromToName": "西湖 - 杭州酒家（延安路店)",
      "description": "公交约20分钟，相距3.1公里",
      "price": 2
    },
    {
      "fromToName": "西湖 - 杭州酒家（延安路店)",
      "description": "公交约20分钟，相距3.1公里",
      "price": 2
    },
    {
      "fromToName": "西湖 - 杭州酒家（延安路店)",
      "description": "公交约20分钟，相距3.1公里",
      "price": 2
    }
  ]
})

//获取短信验证码
gofree_mock.onGet('/account/veri_sms/api').reply(200, {
    "code": 200,
    "msg": "发送成功",
    "result":[]
});

//注册
gofree_mock.onPost('/account/register/api').reply(200,{
   "code": 200,
   "msg": "注册成功",
   "result":[]
});

//登录
gofree_mock.onPost('/account/login/api').reply(200,{
   "code": 200,
   "msg": '登录成功',
   "result":[]
});

//注销
gofree_mock.onGet('/account/logout/api').reply(200,{
  "code": 200,
    "msg": "账号已注销",
    "result":[]
});




export default gofree_mock;
