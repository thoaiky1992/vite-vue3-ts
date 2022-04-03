<template>
  <h1>Post</h1>
  <h5 v-for="post in posts" :key="post.id">{{ post.id }}-{{ post.title }}-{{ post.content }}</h5>
  <h2>counter: {{ counter }}</h2>
  <button
    class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
    @click="updateCounter(counter + 5)"
  >
    increment
  </button>
  <button
    class="focus:shadow-outline ml-1 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
    @click="reset"
  >
    reset
  </button>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import { useCounterStore } from '@/config/pinia/useCounterStore';
import { storeToRefs } from 'pinia';

const axios: any = inject('axios');
const posts = ref<any>([]);
const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);
const { updateCounter } = counterStore;

onMounted(async () => {
  const res = await axios.get('/posts');
  posts.value = res.data.rows;
});

const reset = () => {
  counterStore.$reset();
};
</script>

<style></style>
