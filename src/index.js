import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/': {
    component: require('./views/home.vue')
  }
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/'
});

router.start(App, '#app');
