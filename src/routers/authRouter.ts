export const EMAIL_VERIFY_FOR_PASSWORD_RESET: any = {
    path: "auth/verify-email",
    name: "emailVerifyPasswordReset",
    component: () => import("../views/AuthView.vue"),
    props: {},
    meta: {
        authRequired: false,
        access_level: ""
    }
}