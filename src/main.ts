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
Vue.use(require('vue-moment'));

//store.dispatch(RETRIEVE_AUTH_FROM_STORE).then(() => { });

console.log("hasan ", localStorage.getItem("access_token"));

router.beforeEach((to, from, next) => {
  console.log("hasan ", localStorage.getItem("access_token"));

  if (to.meta.authRequired) {
    if (localStorage.getItem("access_token") == null) {
      console.log("Auth required");
      next("/auth/sign-in");
    } else {
      next();
    }
  } else if (to.meta.visitorRequired) {
    console.log("visitorRequired required");
    if (localStorage.getItem("access_token") != null) {
      next("/admin");
    }
    else {
      console.log("nothing required");
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
