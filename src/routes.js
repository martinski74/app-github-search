import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import PageNotFound from './components/PageNotFound.vue'

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