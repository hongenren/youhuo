import Vue from 'vue';
import axios from 'axios';
import Mint from 'mint-ui';

let token = localStorage.getItem('token');
Vue.prototype.$http = axios;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 1000 * 10;
axios.defaults.baseURL = process.env.API_ROOT_MAIN;
axios.defaults.headers.token = token;
axios.interceptors.request.use(function (config) {
    Mint.Indicator.open();
    return config;
}, function (err) {
    return Promise.reject(err);
});
axios.interceptors.response.use(function (response) {
    Mint.Indicator.close();
    return response;
}, function (err) {
    return Promise.reject(err);
});

export default {
};
