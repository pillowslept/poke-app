import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {
  MdButton, MdContent, MdDivider, MdApp, MdToolbar, MdDrawer, MdList, MdIcon, MdCard, MdTooltip, MdProgress
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false;

Vue.use(MdApp);
Vue.use(MdToolbar);
Vue.use(MdDrawer);
Vue.use(MdButton);
Vue.use(MdTooltip);
Vue.use(MdProgress);
Vue.use(MdIcon);
Vue.use(MdContent);
Vue.use(MdList);
Vue.use(MdCard);
Vue.use(MdDivider);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
