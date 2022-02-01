<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld :msg="a" />

  <h1 v-if="app">{{ `${app.id}---${app.app_name}` }}</h1>
  <h1 v-else>loading...</h1>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import AppEntity from '@/entities/app.entity';
import HelloWorld from '@/components/HelloWorld.vue';
import { useAppService } from '@/services/app.service';
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const a = 'Hello world !!';
    let data = reactive<{ app: AppEntity | undefined }>({ app: undefined });
    const service = useAppService();

    (() => {
      setTimeout(async () => {
        data.app = await service.getOne();
      }, 1000);
    })();

    return { a, ...toRefs(data) };
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
