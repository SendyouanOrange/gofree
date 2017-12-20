import axios from '../util/axios.js';
import MockAdapter from 'axios-mock-adapter';

var home_mock = new MockAdapter(axios);


//reply的参数为 (status, data, headers) 
// home_mock.onGet('/users').reply(200, {
//     users: [
//         {
//             id: 1,
//             name: 'John Smith'
//         }
//     ]
// });


export default home_mock;
