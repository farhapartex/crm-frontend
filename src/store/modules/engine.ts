import { EngineState, RootState, User, AuthCredential } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import axios from "axios";
import { generateAuthHeader } from '@/utils/auth';
import { buildQueryParams } from '@/utils/api';
import { FETCH_COUNTRIES } from "../actions.names";
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