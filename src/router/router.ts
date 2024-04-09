import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useAuthStore } from '@/stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  console.log(to.matched.some(record => record.meta.requiresAuth), !authStore.isAuthenticated);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next(); 
    }
  } else {
    next();
  }
});

export default router