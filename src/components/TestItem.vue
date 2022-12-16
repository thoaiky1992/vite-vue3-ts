<template>
  <div>Count:{{ count }}</div>
  <div>
    <button class="px-5 shadow" @click="$emit('update:count', count + 1)">Inc</button>
  </div>
  <div>Id:{{ id }}</div>
  <div>
    <button class="px-5 shadow" @click="$emit('update:id', id + 1)">Inc</button>
  </div>
</template>

<script setup lang="ts">
import { watch, getCurrentInstance } from 'vue';

defineEmits(['update:count', 'update:id']);
const props = defineProps({
  id: { type: Number, default: 1 },
  count: { type: Number, required: true }
});

const context = getCurrentInstance();
console.log(context?.appContext.config.globalProperties.$i18n.locale);

watch(
  () => props.id,
  (value, preValue) => {
    console.log({ preValue, value });
  }
);
</script>

<style scoped></style>
