import {
	createApp
} from 'vue'
import App from './App.vue'
import Router from './router/index';
import 'amfe-flexible';

import 'vant/es/toast/style';
import 'vant/es/dialog/style';

import VConsole from 'vconsole';
import NavBar from '@/components/NavBar/NavBar.vue'

if (
	import.meta.env.MODE === 'development') {
	new VConsole()
}

const app = createApp(App);
app.use(Router).mount('#app')
app.component('NavBar', NavBar); 
