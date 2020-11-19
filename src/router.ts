import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from './views/Home.vue';
import SignInBase from "./views/SignInPage.vue";
import Base from "./views/Base.vue";
import { SETTINGS_VIEW, STAFF_USER_LIST, STAFF_USER_FORM, PASSWORD_RESET_FORM, ACCOUNT_SECURITY } from './routers/settingsRouter';
import { CUSTOMER_LIST, CUSTOMER_FORM } from './routers/customerRoute';
import { SERVICE_CREATE, SERVICE_LIST, PACKAGE_LIST, PACKAGE_CREATE } from './routers/packageRoute';

Vue.use(VueRouter);

const routes = [

    {
        path: '/sign-in',
        name: 'SignIn',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: SignInBase,
    },
    {
        path: '/',
        name: 'base',
        component: Base,
        redirect: { name: 'dashboard' },
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import("./components/Page.vue"),
                props: { "pageHeader": "Dashboard", "componentType": "view" },
                meta: {
                    authRequired: true,
                    access_level: 0
                }
            },
            SERVICE_LIST,
            SERVICE_CREATE,
            PACKAGE_LIST,
            PACKAGE_CREATE,
            CUSTOMER_LIST,
            CUSTOMER_FORM,
            SETTINGS_VIEW,
            STAFF_USER_LIST,
            STAFF_USER_FORM,
            ACCOUNT_SECURITY,
            PASSWORD_RESET_FORM
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
