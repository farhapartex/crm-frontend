export const SETTINGS_VIEW: any = {
    path: "settings",
    name: "settingsList",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Settings", "componentType": "view" },
    meta: {
        authRequired: true,
        access_level: 0
    }
}

export const STAFF_USER_LIST: any = {
    path: "staff-user/list",
    name: "staffUserList",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Staff User List", "componentType": "table" },
    meta: {
        authRequired: true,
        access_level: 0
    }
}

export const STAFF_USER_FORM: any = {
    path: "staff-user/create",
    name: "staffUserCreate",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "New Staff User", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: 0
    }
}


export const ACCOUNT_SECURITY: any = {
    path: "settings/security",
    name: "accountSecurity",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Security and Login", "componentType": "view" },
    meta: {
        authRequired: true,
        access_level: 0
    }
}


export const PASSWORD_RESET_FORM: any = {
    path: "staff-user/password-reset",
    name: "staffUserPasswordReset",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Reset Your Password", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: 0
    }
}