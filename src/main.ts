import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router/router';
import VueDatePicker from '@vuepic/vue-datepicker';

import '../node_modules/flowbite-vue/dist/index.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'


const app = createApp(App)
app.component('VueDatePicker', VueDatePicker);
app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
