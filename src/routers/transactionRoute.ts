export const TRANSACTION_LIST: any = {
    path: "payment/transactions/list",
    name: "transactionList",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "Transaction List", "componentType": "table" },
    meta: {
        authRequired: true,
        access_level: 0
    }
}

export const PAYMENT_CREATE: any = {
    path: "payment/create",
    name: "paymentCreate",
    component: () => import("../components/Page.vue"),
    props: { "pageHeader": "New Payment", "componentType": "form" },
    meta: {
        authRequired: true,
        access_level: 0
    }
}