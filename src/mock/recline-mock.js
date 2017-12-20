import axios from '../util/axios.js';
import MockAdapter from 'axios-mock-adapter';

var recline_mock = new MockAdapter(axios);
// 模拟任意GET请求到 /users 
//reply的参数为 (status, data, headers) 
recline_mock.onGet('/get-line').reply(200, {
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


recline_mock.onGet('/get-more', { params: { id: 1,placeId:2,index:0 } }).reply(200, {
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

//TODO: 改POST
recline_mock.onGet('/select-replace', { params: { id: 1,placeId:2,index:0 } }).reply(200,{
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

//TODO: 改POST
recline_mock.onGet('/refresh-all',{ params: {id: 1,type:0,destination:'杭州',startTime:'2017/12/05',endTime: '2017/12/14'}}).reply(200,{
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



export default recline_mock;
