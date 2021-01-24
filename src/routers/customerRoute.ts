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

export const CUSTOMER_FORM: any = {
    path: "customer/create",
    name: "customerCreate",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "New Customer", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}