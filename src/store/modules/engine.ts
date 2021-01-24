import { EngineState, RootState, User, AuthCredential } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import axios from "axios";
import { generateAuthHeader } from '@/utils/auth';
import { buildQueryParams } from '@/utils/api';
import { CREATE_COUNTRY, FETCH_COUNTRIES, FETCH_COUNTRY_DETAILS } from "../actions.names";
import { COUNTRY_ENDPOINT } from "../endpoints.names";

const DEFAULT_CORE_STATE: EngineState = {
    error: false
};

export const state: EngineState = JSON.parse(JSON.stringify(DEFAULT_CORE_STATE));

const getters: GetterTree<EngineState, RootState> = {

};

const actions: ActionTree<EngineState, RootState> = {
    async [FETCH_COUNTRIES]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${COUNTRY_ENDPOINT}${buildQueryParams(payload)}`;
            axios.get(url, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [CREATE_COUNTRY]({ rootState, commit }, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(COUNTRY_ENDPOINT, payload, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
    async [FETCH_COUNTRY_DETAILS]({ rootState, commit }, uid: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = `${COUNTRY_ENDPOINT}${uid}/`;
            axios.get(url, generateAuthHeader(localStorage.getItem("access_token"))).then(({ data }) => {
                resolve(data);
            }).catch(e => {
                reject(e);
            });

        });
    },
}

const mutations: MutationTree<EngineState> = {

}


const engineStateModule: Module<EngineState, RootState> = {
    state,
    getters,
    actions,
    mutations
};


export default engineStateModule;