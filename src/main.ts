import { createApp } from 'vue';
import App from '@/App.vue';
import '@/index.css';
// import { PluginSocketIo } from '@/plugins/socket.io';
import { store } from './vuex';
import router from './router';
import { i18n } from './i18n';
import BootstrapServiceWorker from './helpers/server-worker';

BootstrapServiceWorker();

const app = createApp(App);

app.use(i18n);
// app.use(PluginSocketIo, '/');
app.use(store);
app.use(router);

app.mount('#app');
