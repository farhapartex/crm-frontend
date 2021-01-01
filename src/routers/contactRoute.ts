export const CONTACT_LIST: any = {
    path: "contact/list",
    name: "contactList",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Contact List", "componentType": "table" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}

export const CONTACT_FORM: any = {
    path: "contact/create",
    name: "contactCreate",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "New Contact", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: "SUPERADMIN"
    }
}