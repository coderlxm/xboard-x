const routes = [
  {
    name: 'login',
    path: '/login',
    meta: {
      isLogin: true,
      title: '登录'
    },
    component: () => import('@/views/loginPage.vue')
  },
  {
    name: 'register',
    path: '/register',
    meta: {
      isLogin: true,
      title: '注册'
    },
    component: () => import('@/views/loginPage.vue')
  },
  {
    name: 'forgetpassword',
    path: '/forgetpassword',
    meta: {
      isLogin: true,
      title: '忘记密码'
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
        meta: {
          title: '流量明细'
        },
        component: () => import('@/views/traffic.vue')
      },
      {
        name: 'ticket',
        path: '/ticket',
        meta: {
          title: '我的工单'
        },
        component: () => import('@/views/ticket.vue')
      },
      {
        name: 'profile',
        path: '/profile',
        meta: {
          title: '个人中心'
        },
        component: () => import('@/views/profile.vue')
      },
      {
        name: 'node',
        path: '/node',
        meta: {
          title: '节点状态'
        },
        component: () => import('@/views/node.vue')
      },
      {
        name: 'plan',
        path: '/plan',
        meta: {
          title: '购买订阅'
        },
        component: () => import('@/views/plan.vue')
      },
      {
        name: 'invite',
        path: '/invite',
        meta: {
          title: '我的邀请'
        },
        component: () => import('@/views/invite.vue')
      },
      {
        name: 'order',
        path: '/order',
        meta: {
          title: '我的订单'
        },
        component: () => import('@/views/order.vue')
      },
      {
        name: 'knowledge',
        path: '/knowledge',
        meta: {
          title: '使用文档'
        },
        component: () => import('@/views/knowledge.vue')
      },
      {
        name: 'dashboard',
        path: '/dashboard',
        meta: {
          title: '仪表盘'
        },
        component: () => import('@/views/dashboard.vue')
      },
    ]
  }
]

export default routes