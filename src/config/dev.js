'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',
  baseUrl: 'http://localhost:8000'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
