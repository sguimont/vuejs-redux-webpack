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

router.start(App, '#app');
