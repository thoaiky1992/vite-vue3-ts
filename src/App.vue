<template>
  <el-config-provider :locale="getLocaleElementPlus">
    <component :is="getLayout" />
  </el-config-provider>
</template>

<script setup lang="ts">
import { defineComponent, reactive, toRefs, inject, onMounted, ref, computed } from 'vue';
import AppEntity from '@/entities/app.entity';
import HelloWorld from '@/components/HelloWorld.vue';
import { useAppService } from '@/services/app.service';
import { Socket } from 'socket.io-client';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import registerNotification from './config/firebase-cloud-messaging/notification';
import Alert from '@/components/Alert.vue';
import CDialog from '@/components/Dialog.vue';
import Form from '@/components/Form.vue';
import { ElConfigProvider } from 'element-plus';
import localeVi from '@/config/i18n/locales/vi';
import localeEn from '@/config/i18n/locales/en';
import localeJa from '@/config/i18n/locales/ja';
import AppLayout from '@/components/layout/app-layout.vue';
import AuthLayout from '@/components/layout/auth-layout.vue';
import { LAYOUT } from './config/router';
import defaultLayoutVue from './components/layout/default-layout.vue';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const show = ref<boolean>(false);
const { locale } = useI18n();

const getLocaleElementPlus = computed(() => {
  switch (locale.value) {
    case 'en':
      return localeEn;
    case 'ja':
      return localeJa;
    default:
      return localeVi;
  }
});

const getLayout = computed(() => {
  switch (route.meta.layout) {
    case LAYOUT.APP:
      return AppLayout;
    case LAYOUT.AUTH:
      return AuthLayout;
    default:
      return defaultLayoutVue;
  }
});

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
