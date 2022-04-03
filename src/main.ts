import { createApp } from 'vue';
import App from '@/App.vue';
import '@/index.css';
// import { PluginSocketIo } from '@/plugins/socket.io';
import { store } from '@/vuex';
import { i18n } from './config/i18n';
import BootstrapServiceWorker from './config/firebase-cloud-messaging/server-worker';
import BootstrapAxios from './config/axios';
import BootstrapRouter from './config/router';
import { createPinia } from 'pinia';
import BootstrapGlobalComponents from '@/config/global-components';
import BootstrapVeeValidate from '@/config/vee-validate';
const app = createApp(App);

BootstrapServiceWorker();
BootstrapVeeValidate(i18n);
const router = BootstrapRouter();
const { axiosPlugin } = BootstrapAxios(router, app);

app.use(i18n);
/*
 ** Add plugin
 */
// app.use(PluginSocketIo, '/');
app.use(axiosPlugin);
app.use(store);
app.use(createPinia());
app.use(router);

BootstrapGlobalComponents(app);

app.mount('#app');
