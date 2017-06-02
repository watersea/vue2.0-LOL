import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
//import axios from '../node_modules/axios';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import $ from 'jquery' ;
 

Vue.config.productionTip = false

Vue.use(iView);
//Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
