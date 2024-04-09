import HomeView from "@/views/HomeView.vue";
import AuthLayout from "@/views/Layouts/AuthLayout.vue";
import LoginView from "@/views/LoginView.vue";
import EmployeeView from "../views/Employee/EmployeeView.vue";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/',
        name: 'AuthenticatedLayout',
        component: AuthLayout,
        meta : {
            requiresAuth : true,
        },
        children: [
            {
                path: '/home',
                name: 'Home',
                component: HomeView
            },
            {
                path: '/employees',
                name: 'Employees',
                component: EmployeeView

            },
        ],
    }
];

export default routes;
