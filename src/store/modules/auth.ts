import { AuthState, RootState, User, AuthCredential } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import axios from "axios";
import {
    ACCESS_TOKEN, ACCESS_LEVEL, PERMISSIONS, GROUPS, LOGGED_IN_USER_DATA,
} from "../getters.names";
import { LOGIN_ENDPOINT, STAFF_USER_ENDPOINT, TOKEN_VALIDATION_ENDPOINT, ROLE_ENDPOINT, } from '../endpoints.names';
import { SET_AUTH, SET_AUTH_ERROR, CLEAR_AUTH, GET_AUTH_FROM_STORE, GET_LOGGED_IN_USER_DATA, } from "@/store/mutations.names";
import { CHECK_TOKEN_VALIDATION, FETCH_STAFF_USER, LOGIN, LOGOUT, RETRIEVE_AUTH_FROM_STORE, RETRIEVE_LOGGED_IN_USER_DATA, FETCH_ROLE, CREATE_STAFF_USER, FETCH_STAFF_USER_DETAIL, UPDATE_STAFF_USER_DETAIL, } from '../actions.names';
import { generateAuthHeader } from '@/utils/auth';
import { buildQueryParams } from "@/utils/api";


const DEFAULT_AUTH_STATE: AuthState = {
    access_token: null,
    refresh_token: null,
    expires_in: null,
    permissions: [],
    error: false,
    accessLevel: null,
    user: null,
};

export const state: AuthState = JSON.parse(JSON.stringify(DEFAULT_AUTH_STATE));

const getters: GetterTree<AuthState, RootState> = {
    [ACCESS_TOKEN](state): string | null {
        return state.access_token;
    },
    [ACCESS_LEVEL](state): any | null {
        return state.accessLevel;
    },
    [LOGGED_IN_USER_DATA](state): any | null {
        return state.user;
    },
};

const actions: ActionTree<AuthState, RootState> = {
    async [LOGIN]({ commit, dispatch }, cred: AuthCredential): Promise<any> {
        axios
            .post(LOGIN_ENDPOINT, cred)
            .then(({ data }) => {
                //const token = data.key;
                commit(SET_AUTH, data);
                // dispatch(FETCH_PROFILE);
            })
            .catch(e => {
                commit(SET_AUTH_ERROR);
            });
    },
    async [LOGOUT]({ commit }): Promise<any> {
        commit(CLEAR_AUTH);
    },
    [RETRIEVE_AUTH_FROM_STORE]({ state, commit, dispatch }) {
        commit(GET_AUTH_FROM_STORE);
    },
    [RETRIEVE_LOGGED_IN_USER_DATA]({ state, commit, dispatch }) {
        commit(GET_LOGGED_IN_USER_DATA);
    },
    async [CHECK_TOKEN_VALIDATION]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(TOKEN_VALIDATION_ENDPOINT, payload).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [FETCH_STAFF_USER]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${STAFF_USER_ENDPOINT}${buildQueryParams(payload)}`;
            axios.get(url, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [FETCH_ROLE]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(ROLE_ENDPOINT, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [CREATE_STAFF_USER]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(STAFF_USER_ENDPOINT, payload, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [FETCH_STAFF_USER_DETAIL]({ rootState, commit }, uid: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = `${STAFF_USER_ENDPOINT}${uid}/`;
            axios.get(url, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [UPDATE_STAFF_USER_DETAIL]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${STAFF_USER_ENDPOINT}${payload['uid']}/`;
            axios.put(url, payload, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
}

const mutations: MutationTree<AuthState> = {
    [SET_AUTH](state, payload: any) {
        state.access_token = payload.access_token;
        let userData = JSON.parse(JSON.stringify(payload.user));
        state.user = userData;
        window.localStorage.setItem("access_token", payload.access_token);
        window.localStorage.setItem("user", userData);
        state.error = false;
    },
    [SET_AUTH_ERROR](state) {
        state.error = true;
        state.access_token = null;
        state.user = {};
        window.localStorage.removeItem("access_token");
        window.localStorage.removeItem("user");
    },
    [CLEAR_AUTH](state: AuthState) {
        state.access_token = null;
        state.user = {};
        window.localStorage.removeItem("access_token");
        window.localStorage.removeItem("user");
        state.error = false;
    },
    [GET_AUTH_FROM_STORE](state) {
        const token = window.localStorage.getItem("access_token");
        //const accessLevel 
        if (token) {
            state.access_token = token;
            state.error = false;
        }
    },
    [GET_LOGGED_IN_USER_DATA](state) {
        const user = window.localStorage.getItem("user");
        //const accessLevel = window.localStorage.getItem("accessLevel");
        if (user) {
            state.user = JSON.parse(user);
        }
    },
}

const authStateModule: Module<AuthState, RootState> = {
    state,
    getters,
    actions,
    mutations
};

export default authStateModule;