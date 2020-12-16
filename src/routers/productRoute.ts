export const PRODUCT_LIST: any = {
    path: "product/list",
    name: "productList",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Product List", "componentType": "table" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}

export const PRODUCT_NEW_FORM: any = {
    path: "product/create",
    name: "productCreate",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "New Product", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}