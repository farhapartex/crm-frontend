export const SERVICE_LIST: any = {
    path: "service/list",
    name: "serviceList",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Service List", "componentType": "table" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}