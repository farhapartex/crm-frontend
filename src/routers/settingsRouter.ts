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

export const STAFF_USER_DETAIL: any = {
    path: "staff-user/detail/:uid",
    name: "staffUserDetail",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Staff User Detail", "pageType": "update", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: 0
    }
}

export const STAFF_USER_FORM: any = {
    path: "staff-user/create",
    name: "staffUserCreate",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "New Staff User", "pageType": "new", "componentType": "form" },
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


export const COUNTRY_LIST: any = {
    path: "country/list",
    name: "countryList",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Country List", "componentType": "table" },
    meta: {
        authRequired: true,
        access_level: 0
    }
}


export const COUNTRY_FORM: any = {
    path: "country/new",
    name: "newCountry",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "New Country", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: 0
    }
}