import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta : {
            requiresAuth : true,
        }
    }
];

export default routes;
