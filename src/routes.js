import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      name: 'home',
      component: require('./components/pages/Home.vue').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('./components/pages/About.vue').default
    },
    {
      path: '/users/:username',
      name: 'user',
      component: require('./components/users/User.vue').default
    },
    {
      path: '*',
      name: 'not-found',
      component: require('./components/pages/PageNotFound.vue').default
    }
  ]
})

export default router;