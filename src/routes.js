import VueRouter from 'vue-router';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import PageNotFound from './components/pages/PageNotFound.vue';

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: 'not-found',
      component: PageNotFound
    }
  ]
})

export default router;