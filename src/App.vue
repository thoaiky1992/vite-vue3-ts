<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld :msg="t('common.hello')" />

  <h1 v-if="app">{{ `${app.id}---${app.app_name}` }}</h1>
  <h1 v-else>loading...</h1>
  <button @click="directRoute('/')">Route Home</button>
  <button @click="directRoute('/about')">Route About</button>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, inject, onMounted } from 'vue';
import AppEntity from '@/entities/app.entity';
import HelloWorld from '@/components/HelloWorld.vue';
import { useAppService } from '@/services/app.service';
import { Socket } from 'socket.io-client';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    // const socket: Socket | undefined = inject('socket') as Socket;
    const router = useRouter();
    const { t } = useI18n();

    let data = reactive<{ app: AppEntity | undefined }>({ app: undefined });
    const service = useAppService();

    const directRoute = (path: string) => {
      router.push(path);
    };

    (() => {
      setTimeout(async () => {
        data.app = await service.getOne();
      }, 1000);
    })();

    // onMounted(() => {
    //   socket.on('socket', (data: any) => {
    //     console.log(data);
    //   });
    // });

    return { ...toRefs(data), directRoute, t };
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
