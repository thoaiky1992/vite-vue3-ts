import { createApp } from 'vue';
import App from '@/App.vue';
import '@/index.css';
// import { PluginSocketIo } from '@/plugins/socket.io';
import { store } from '@/vuex';
import { i18n } from './config/i18n';
import BootstrapServiceWorker from './helpers/server-worker';
import BootstrapVeeValidate from './helpers/vee-validate';
import { Form, Field, ErrorMessage } from 'vee-validate';
import BootstrapAxios from './config/axios';
import BootstrapRouter from './config/router';

const app = createApp(App);

BootstrapServiceWorker();
BootstrapVeeValidate(i18n);
const router = BootstrapRouter();
const { axiosPlugin } = BootstrapAxios(router, app);

app.use(i18n);
// add plugin
// app.use(PluginSocketIo, '/');
app.use(axiosPlugin);
app.use(store);
app.use(router);

app.component('VForm', Form);
app.component('VField', Field);
app.component('VErrorMessage', ErrorMessage);

app.mount('#app');
