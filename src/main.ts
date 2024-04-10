import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router/router';
import VueDatePicker from '@vuepic/vue-datepicker';

import '../node_modules/flowbite-vue/dist/index.css'

const app = createApp(App)
app.component('VueDatePicker', VueDatePicker);
app.use(createPinia())
app.use(router)

app.mount('#app')
