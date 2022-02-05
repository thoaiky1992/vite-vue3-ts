import { createApp } from 'vue';
import App from '@/App.vue';
import '@/index.css';
// import { PluginSocketIo } from '@/plugins/socket.io';
import { store } from './vuex';
import router from './router';

const app = createApp(App);
// app.use(PluginSocketIo, '/');
app.use(store);
app.use(router);

app.mount('#app');
