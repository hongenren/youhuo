import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import stores from './store/index';
import axios from './config/axios';
import api from './config/api';
import filters from './config/filter';
import babelPolyfill from 'babel-polyfill';
import Mint from 'mint-ui';

// API
Vue.prototype.$api = api;

// Mint-ui
Vue.prototype.$mint = Mint;
Vue.use(Mint);

// Filter
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

/* eslint-disable no-new */
new Vue({
    router,
    axios,
    store: stores,
    babelPolyfill,
    el: '#activity',
    render: (h) => h(App)
});
