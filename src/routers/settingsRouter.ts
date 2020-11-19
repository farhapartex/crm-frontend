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