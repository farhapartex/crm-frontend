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