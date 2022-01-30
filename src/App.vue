<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld :msg="a" />
  <p>{{ data }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const a = 'hello';
    const data = ref();

    (async () => {
      const res = await fetch('https://random-data-api.com/api/food/random_food');
      data.value = await res.json();
    })();

    return { a, data };
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
