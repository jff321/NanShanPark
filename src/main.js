import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'popper.js/dist/esm/popper'

// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

// 引入font-awesome
import 'font-awesome/css/font-awesome.css'

// 引入axios
import Axios from 'axios'

// 引入公共css
import './common.css'

// 引入vue-scroller
import VueScroller from "vue-scroller"

Vue.prototype.$axios = Axios;

Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(VueScroller);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
