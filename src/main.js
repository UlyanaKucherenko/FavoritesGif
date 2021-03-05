
import './styles/style.scss';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import XIcon from './components/common/XIcon.vue';

Vue.config.productionTip = false
Vue.component("XIcon", XIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
