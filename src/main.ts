import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './system/store/app'
import Toaster from "@meforma/vue-toaster";
import 'bootstrap';

import { PageView,Grid,WelcomeView } from "@/components";


var app = createApp(App).use(store).use(router).use(Toaster);

app.component("page-view", PageView);
app.component("grid", Grid);
app.component("welcome-view", WelcomeView);




app.mount('#app');
