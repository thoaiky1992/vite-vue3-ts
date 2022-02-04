import { createApp } from 'vue';
import App from '@/App.vue';
import '@/index.css';
import { PluginSocketIo } from '@/plugins/socket.io';

const app = createApp(App);
app.use(PluginSocketIo, '/');

app.mount('#app');
