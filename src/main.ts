import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueNumber from 'vue-number-animation';
import { RETRIEVE_AUTH_FROM_STORE } from './store/actions.names';
import { ACCESS_TOKEN } from './store/getters.names';

Vue.config.productionTip = false;

Vue.use(VueNumber);

store.dispatch(RETRIEVE_AUTH_FROM_STORE).then(() => { });

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    if (store.getters[ACCESS_TOKEN] != null) {
      next();
    } else {
      next("/auth/sign-in");
    }
  } else if (to.meta.visitorRequired) {
    if (store.getters[ACCESS_TOKEN] != null) {
      next("/admin");
    }
    else {
      next();
    }
  }
  else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
