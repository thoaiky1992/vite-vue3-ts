<template>
  <img class="m-auto" alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld :msg="t('common.hello')" />

  <h1 v-if="app">{{ `${app.id}---${app.app_name}` }}</h1>
  <h1 v-else>loading...</h1>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
    @click="directRoute('/')"
  >
    Route Home
  </button>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
    @click="directRoute('/about')"
  >
    Route About
  </button>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="addAlert"
  >
    add Alert
  </button>
  <alert :alerts="alerts" />
  <div class="mt-5">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="show = true"
    >
      Toogle dialog
    </button>
  </div>
  <c-dialog :show="show" @close="closeDialog" />
  <Form />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, inject, onMounted, ref } from 'vue';
import AppEntity from '@/entities/app.entity';
import HelloWorld from '@/components/HelloWorld.vue';
import { useAppService } from '@/services/app.service';
import { Socket } from 'socket.io-client';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import registerNotification from './helpers/notification';
import Alert from '@/components/Alert.vue';
import CDialog from '@/components/Dialog.vue';
import Form from '@/components/Form.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Alert,
    CDialog,
    Form
  },
  setup() {
    // const socket: Socket | undefined = inject('socket') as Socket;
    const router = useRouter();
    const { t } = useI18n();
    const show = ref<boolean>(false);

    let data = reactive<{ app: AppEntity | undefined }>({ app: undefined });
    let alerts = ref<string[]>([]);
    const service = useAppService();

    const directRoute = (path: string) => {
      router.push(path);
    };

    (() => {
      setTimeout(async () => {
        data.app = await service.getOne();
      }, 1000);
    })();

    const addAlert = () => {
      alerts.value.unshift('Hello' + Math.random());
      setTimeout(() => {
        alerts.value.pop();
      }, 2000);
    };

    onMounted(() => {
      setTimeout(() => {
        alerts.value.pop();
      }, 2000);
    });

    const registerNoti = () => {
      registerNotification();
    };

    // onMounted(() => {
    //   socket.on('socket', (data: any) => {
    //     console.log(data);
    //   });
    // });
    const closeDialog = (data: boolean) => {
      show.value = data;
    };
    return { ...toRefs(data), directRoute, t, registerNoti, alerts, addAlert, show, closeDialog };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
