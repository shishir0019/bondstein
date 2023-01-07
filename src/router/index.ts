import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import ApplicationLayout from '@/layouts/Application.vue'
import AuthLayout from '@/layouts/Auth.vue'
import ErrorLayout from '@/layouts/Error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ApplicationLayout,
      meta: { auth: true },
      children: [
        { path: '', redirect: 'dashboard' },
        { path: 'dashboard', component: () => import('@/views/Dashboard.vue'), meta: { title: 'Dashboard' } },
        { path: 'activity', component: () => import('@/views/Activity.vue'), meta: { title: 'Activity' } },
        { path: 'settings', component: () => import('@/views/Settings.vue'), meta: { title: 'Settings' } },
        { path: 'help', component: () => import('@/views/Help.vue'), meta: { title: 'Help & Support' } }
      ]
    },
    { path: '/:pathMatch(.*)*', component: ErrorLayout },
  ]
})

router.beforeEach((to, from, next: any) => {
  document.title = `${to.meta.title || 'Admin'}`
  if(!isLogin() && to.meta.auth){
    router.push('/auth/signin')
  }
  next()
})

const isLogin = () => {
  return true
}

export default router
