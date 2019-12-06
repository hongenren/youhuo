'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    ENV_CONFIG: '"dev"',
    API_ROOT_MAIN: '"http://test.dakaqi.cn:28080/html5/v2/"'
});
