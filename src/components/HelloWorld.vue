<template>
  <h1>{{ msg }}</h1>
  <h2>{{ counter }}</h2>
  <button class="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" @click="inc">
    increment counter
  </button>
</template>

<script lang="ts">
import { ActionTypes, useStore } from '@/vuex';
import { ref, defineComponent, toRefs } from 'vue';
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const store = useStore();
    const inc = () => {
      store.dispatch(ActionTypes.INC_COUNTER);
    };

    const count = ref(0);
    return { count, ...toRefs(store.state), inc };
  }
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
