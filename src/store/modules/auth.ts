import { AuthState, RootState, User, AuthCredential } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import axios from "axios";
import {
    ACCESS_TOKEN, ACCESS_LEVEL, PERMISSIONS, GROUPS,
} from "../getters.names";
import { LOGIN_ENDPOINT, } from '../endpoints.names';
import { SET_AUTH, SET_AUTH_ERROR, CLEAR_AUTH, GET_AUTH_FROM_STORE, } from "@/store/mutations.names";
import { LOGIN, LOGOUT, RETRIEVE_AUTH_FROM_STORE } from '../actions.names';
import { generateAuthHeader } from '@/utils/auth';

const DEFAULT_AUTH_STATE: AuthState = {
    access_token: null,
    refresh_token: null,
    expires_in: null,
    permissions: [],
    error: false,
    accessLevel: null
};

export const state: AuthState = JSON.parse(JSON.stringify(DEFAULT_AUTH_STATE));

const getters: GetterTree<AuthState, RootState> = {
    [ACCESS_TOKEN](state): string | null {
        return state.access_token;
    },
    [ACCESS_LEVEL](state): any | null {
        return state.accessLevel;
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
}

const mutations: MutationTree<AuthState> = {
    [SET_AUTH](state, payload: any) {
        state.access_token = payload.access_token;
        window.localStorage.setItem("access_token", payload.access_token);
        state.error = false;
    },
    [SET_AUTH_ERROR](state) {
        state.error = true;
        state.access_token = null;
        window.localStorage.removeItem("access_token");
    },
    [CLEAR_AUTH](state: AuthState) {
        state.access_token = null;
        window.localStorage.removeItem("access_token");
        state.error = false;
    },
    [GET_AUTH_FROM_STORE](state) {
        const token = window.localStorage.getItem("access_token");
        //const accessLevel = window.localStorage.getItem("accessLevel");
        // console.log(token);
        if (token) {
            state.access_token = token;
            //state.accessLevel = accessLevel;
            state.error = false;
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