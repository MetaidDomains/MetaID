import axios from 'axios';
import { showMessage } from "./status";   
import { Toast, Dialog } from "vant";


axios.defaults.timeout = 8000;

console.log('loadEnv：',import.meta.env.VITE_APP_BASE_API);



axios.defaults.baseURL =import.meta.env.MODE === 'development'?'/api':import.meta.env.VITE_APP_BASE_API;   



import { getToken, removeToken } from "@/utils/token.js";


axios.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'X-Access-Token': getToken(),
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        const { code=''} = response.data||'';
        if(code!=200){
            Toast(response.data.message||response.data.msg||'');
        }
        return response;
    },
    error => {
        const { response } = error;
        if (response) {
            if (response.status == 401) {
                Toast('login out');
                androidJS.login();
                return
            };
            if (response.data.message) {
                Toast(response.data.message);
            } else {
                Toast(showMessage(response.status));
            }
            return Promise.reject(response.data);
        } else {
            Toast('again');
        }
    }
);


export function request(url = '', params = {}, type = 'POST') {
    return new Promise((resolve, reject) => {
        let promise
        if (type.toUpperCase() === 'GET') {
            promise = axios({
                url,
                params
            })
        } else if (type.toUpperCase() === 'POST') {
            promise = axios({
                method: 'POST',
                url,
                data: params
            })
        }

        promise.then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
