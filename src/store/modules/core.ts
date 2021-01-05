import { CoreState, RootState, User, AuthCredential } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import axios from "axios";
import {
    ACCESS_TOKEN, ACCESS_LEVEL, PERMISSIONS, GROUPS, LOGGED_IN_USER_DATA,
} from "../getters.names";
import { PACKAGE_ENDPOINT, PACKAGE_VALIDITY_ENDPOINT, SERVICE_ENDPOINT, SERVICE_TYPE_LIST_ENDPOINT, SOFT_DELETE_ENDPOINT, } from '../endpoints.names';
import { CREATE_SERVICE, SOFT_DELETE, FETCH_SERVICE_DETAIL, FETCH_SERVICE_LIST, FETCH_SERVICE_TYPE_LIST, UPDATE_SERVICE_DETAIL, FETCH_PACKAGE_VALIDITY, FETCH_PACKAGE_LIST } from '../actions.names';
import { generateAuthHeader } from '@/utils/auth';
import { buildQueryParams } from '@/utils/api';

const DEFAULT_CORE_STATE: CoreState = {
    error: false
};

export const state: CoreState = JSON.parse(JSON.stringify(DEFAULT_CORE_STATE));

const getters: GetterTree<CoreState, RootState> = {

};

const actions: ActionTree<CoreState, RootState> = {
    async [FETCH_SERVICE_TYPE_LIST]({ rootState, commit }): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(SERVICE_TYPE_LIST_ENDPOINT, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [CREATE_SERVICE]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(SERVICE_ENDPOINT, payload, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [FETCH_SERVICE_LIST]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${SERVICE_ENDPOINT}${buildQueryParams(payload)}`;
            axios.get(url, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [FETCH_SERVICE_DETAIL]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${SERVICE_ENDPOINT}${payload}/`;
            axios.get(url, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [UPDATE_SERVICE_DETAIL]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${SERVICE_ENDPOINT}${payload['uid']}/`;
            axios.put(url, payload, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [SOFT_DELETE]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(SOFT_DELETE_ENDPOINT, payload, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [FETCH_PACKAGE_VALIDITY]({ rootState, commit }): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(PACKAGE_VALIDITY_ENDPOINT, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [FETCH_PACKAGE_LIST]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${PACKAGE_ENDPOINT}${buildQueryParams(payload)}`;
            axios.get(url, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
}

const mutations: MutationTree<CoreState> = {

}


const coreStateModule: Module<CoreState, RootState> = {
    state,
    getters,
    actions,
    mutations
};


export default coreStateModule;