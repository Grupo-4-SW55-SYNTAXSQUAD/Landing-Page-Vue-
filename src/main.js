import 'primeflex/primeflex.css';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css'; /* Deprecated */
import 'primeicons/primeicons.css';
import './assets/style.css'

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import Ripple from 'primevue/ripple';
import Button from "primevue/button";
import InputSwitch from 'primevue/inputswitch';
import Toolbar from 'primevue/toolbar';
import Image from "primevue/image";
import Card from 'primevue/card';
import AutoComplete from "primevue/autocomplete";
import {router} from "@/router/index.js";


createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .directive('ripple', Ripple)
    .component('pv-image',Image)
    .component('pv-inputswitch', InputSwitch)
    .component('pv-inputtext', InputText)
    .component('pv-menubar', Menubar)
    .component('pv-button', Button)
    .component('pv-toolabar',Toolbar)
    .component('pv-card',Card)
    .component('pv-autocomplete',AutoComplete)
    .mount('#app')
