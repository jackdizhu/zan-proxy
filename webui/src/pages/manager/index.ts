// element-ui
import ElementUI from 'element-ui';
import 'reflect-metadata';
import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';
import './iconfont.css';
import './index.scss';

axios.interceptors.response.use(
  v => v,
  error => {
    throw error.response.data.message;
  },
);

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
