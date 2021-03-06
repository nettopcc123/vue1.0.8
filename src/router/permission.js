import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式


router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  if (sessionStorage.getItem('accessToken')) {
    next()
  } else {
    if (to.path ==="/login"|| to.path ==='/register'){
      next()
    }else {
      next('/login')
    }
    NProgress.done()
  }
});
router.afterEach(() => {
  NProgress.done() // 结束Progress
});