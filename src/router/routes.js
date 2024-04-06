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
    name: 'register',
    path: '/register',
    meta: {
      isLogin: true
    },
    component: () => import('@/views/loginPage.vue')
  },
  {
    name: 'forgetpassword',
    path: '/forgetpassword',
    meta: {
      isLogin: true
    },
    component: () => import('@/views/loginPage.vue')
  },
  {
    path: '/',
    component: () => import('@/views/homePage.vue'),
    redirect: 'dashboard',
    children: [
      {
        name: 'traffic',
        path: '/traffic',
        component: () => import('@/views/traffic.vue')
      },
      {
        name: 'ticket',
        path: '/ticket',
        component: () => import('@/views/ticket.vue')
      },
      {
        name: 'profile',
        path: '/profile',
        component: () => import('@/views/profile.vue')
      },
      {
        name: 'node',
        path: '/node',
        component: () => import('@/views/node.vue')
      },
      {
        name: 'plan',
        path: '/plan',
        component: () => import('@/views/plan.vue')
      },
      {
        name: 'invite',
        path: '/invite',
        component: () => import('@/views/invite.vue')
      },
      {
        name: 'order',
        path: '/order',
        component: () => import('@/views/order.vue')
      },
      {
        name: 'knowledge',
        path: '/knowledge',
        component: () => import('@/views/knowledge.vue')
      },
      {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('@/views/dashboard.vue')
      },
    ]
  }
]

export default routes