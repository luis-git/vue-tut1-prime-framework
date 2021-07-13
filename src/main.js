import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';                       //icons


import 'primevue/resources/themes/saga-blue/theme.css'      //theme
// import 'primevue/resources/themes/md-light-deeppurple/theme.css';
import 'primevue/resources/primevue.min.css'                //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';  

import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from "primevue/inputtext";
const app = createApp(App);
app.use(store)
app.use(router)
app.use(PrimeVue);
app.mount('#app')

app.component('Card', Card);
app.component('Button', Button);
app.component('InputText', InputText);

