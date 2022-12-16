<template>
  <test-item v-model:count="count" v-model:id="id" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(10);
const id = ref(5);
</script>
