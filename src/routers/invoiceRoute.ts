export const INVOICE_LIST: any = {
    path: "invoice/list",
    name: "invoiceList",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Invoice List", "componentType": "table" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}

export const INVOICE_NEW_FORM: any = {
    path: "invoice/create",
    name: "invoiceCreate",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "New Invoice", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}