import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from '../node_modules/axios';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from 'jquery' ;

Vue.use(MintUI);

Vue.config.productionTip = false;


Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
