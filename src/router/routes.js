const routes = [
  {
    name: 'login',
    path: '/login',
    meta: {
      isLogin: true
    },
    component: () => import('@/views/loginPage.vue')
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/homePage.vue')
  },
  {
    redirect: 'home',
    path: '/'
  }
]

export default routes