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

export const SERVICE_CREATE: any = {
    path: "service/create",
    name: "serviceCreate",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "New Service", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}

export const PACKAGE_LIST: any = {
    path: "package/list",
    name: "packageList",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Package List", "componentType": "table" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}

export const PACKAGE_CREATE: any = {
    path: "package/create",
    name: "packageCreate",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "New Package", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}