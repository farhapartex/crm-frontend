export const CUSTOMER_LIST: any = {
    path: "customer/list",
    name: "customerList",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Customer List", "componentType": "table" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}