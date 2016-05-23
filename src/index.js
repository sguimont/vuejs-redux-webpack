import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import App from './app';
import Form from './plugin/form'

let english = require('./assets/i18n/en/translation.json');
let french = require('./assets/i18n/fr/translation.json');

require('./theme/style.scss');

require('./vendor');

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(Form);

Vue.config.lang = 'en';
Vue.locale('en', english);
Vue.locale('fr', french);

const router = new VueRouter();

router.map({
  '/': {
    component: require('./views/buckets')
  }
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/'
});

router.start(App, '#app');
