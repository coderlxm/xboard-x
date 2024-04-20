import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // 检查用户是否已登录，如果尝试访问非公开路由则重定向到登录页面
  const token = localStorage.getItem('token');
  const publicPages = ['login', 'register', 'forgetpassword']; // 不需要身份验证的页面路由名称

  const authRequired = !publicPages.includes(to.name);
  if (authRequired && !token) {
    return next({ name: 'login' }); // 重定向到登录页面
  }

  // 如果上面的验证通过了，则设置页面标题
  const pageTitle = to.meta.title;
  if (pageTitle) {
    document.title = pageTitle + ' | 小明云加速 Pro';
  }

  next(); // 确保调用 next()！
})
export default router
