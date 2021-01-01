import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from './views/Home.vue';
import AuthView from "./views/AuthView.vue";
import Base from "./views/Base.vue";
import { SETTINGS_VIEW, STAFF_USER_LIST, STAFF_USER_FORM, PASSWORD_RESET_FORM, ACCOUNT_SECURITY } from './routers/settingsRouter';
import { CUSTOMER_LIST, CUSTOMER_FORM } from './routers/customerRoute';
import { SERVICE_CREATE, SERVICE_LIST, PACKAGE_LIST, PACKAGE_CREATE, SERVICE_UPDATE } from './routers/packageRoute';
import { PAYMENT_CREATE, TRANSACTION_LIST } from './routers/transactionRoute';
import { EMAIL_VERIFY_FOR_PASSWORD_RESET } from './routers/authRouter';
import { CONTACT_FORM, CONTACT_LIST } from './routers/contactRoute';
import { PRODUCT_LIST, PRODUCT_NEW_FORM } from './routers/productRoute';
import { COUPON_FORM, COUPON_LIST, INVOICE_LIST, INVOICE_NEW_FORM } from './routers/invoiceRoute';

Vue.use(VueRouter);

const routes = [

    {
        path: '/auth',
        name: 'Auth',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AuthView,
        children: [
            {
                path: "sign-in",
                name: "signin",
                component: () => import("./views/SignInForm.vue"),
                props: {},
                meta: {
                    access_level: 0,
                    visitorRequired: true
                }
            },
            {
                path: "sign-up",
                name: "signup",
                component: () => import("./views/SignUpForm.vue"),
                props: {},
                meta: {
                    visitorRequired: true,
                    access_level: 0
                }
            },
            {
                path: "verify-email",
                name: "emailVerifyPasswordReset",
                component: () => import("./views/EmailVerifyPasswordReset.vue"),
                props: {},
                meta: {
                    authRequired: false,
                    access_level: 0
                }
            },
        ]
    },
    {
        path: '/admin',
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
            {
                path: "profile",
                name: "adminProfile",
                component: () => import("./components/Page.vue"),
                props: { "pageHeader": "Admin Profile", "componentType": "view" },
                meta: {
                    authRequired: true,
                    access_level: 0
                }
            },
            SERVICE_LIST,
            SERVICE_CREATE,
            SERVICE_UPDATE,
            PACKAGE_LIST,
            PACKAGE_CREATE,
            CUSTOMER_LIST,
            CUSTOMER_FORM,
            SETTINGS_VIEW,
            STAFF_USER_LIST,
            STAFF_USER_FORM,
            ACCOUNT_SECURITY,
            PASSWORD_RESET_FORM,
            TRANSACTION_LIST,
            PAYMENT_CREATE
        ]
    },
    {
        path: '/user',
        name: 'customer',
        component: Base,
        children: [
            CONTACT_LIST,
            CONTACT_FORM,
            PRODUCT_LIST,
            PRODUCT_NEW_FORM,
            INVOICE_LIST,
            INVOICE_NEW_FORM,
            COUPON_LIST,
            COUPON_FORM
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
