
import {
        Toast
} from 'vant'

import { getToken, removeToken } from "@/utils/token.js";
export default {
        namespaced: true,
        state: {
                token: getToken() || '',
                user: JSON.parse(localStorage.getItem('userInfo') || null)
        },
        mutations: {

        },
        actions: {
        },
        getters: {
                token(state) {
                        return state.token
                },
                userInfo(state) {
                        return state.user
                }
        }
}
