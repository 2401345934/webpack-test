import "./react.js"

import App from './App.vue';
import router from '../router/index';
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
