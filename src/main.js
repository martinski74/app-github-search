import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import VueRouter from 'vue-router';
import router from './routes';
import store from './store'
import spinner from './components/layout/Spinner.vue'


Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(spinner);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i);
files
    .keys()
    .map((key) =>
        Vue.component(key.split('/').pop().split('.')[0], files(key).default)
    );
    
    Vue.config.productionTip = false


new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount('#app');