<template>
  <h1>Post</h1>
  <h5 v-for="post in posts" :key="post.id">{{ post.id }}-{{ post.title }}-{{ post.content }}</h5>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeMount, onMounted, ref } from 'vue';
export default defineComponent({
  setup() {
    const axios = inject('axios');
    const posts = ref([]);

    (async () => {
      const res = await axios.get('/posts');
      posts.value = res.data.rows;
    })();
    // onMounted(async () => {
    //   const res = await axios.get('/posts');
    //   posts.value = res.data.rows;
    // });
    return { posts };
  }
});
</script>

<style></style>
