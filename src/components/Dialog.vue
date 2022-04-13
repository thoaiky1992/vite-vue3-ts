<template>
  <div
    v-show="modelValue"
    :class="{
      'fixed inset-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50': true,
      'animate-dialog_leave_opacity': modelValue && flag,
      'animate-dialog_opacity': modelValue && !flag
    }"
  >
    <div
      :class="{
        'flex h-48 w-96 items-center justify-center rounded-xl bg-white shadow-xl shadow-black': true,
        'animate-dialog': modelValue && flag,
        'animate-leave_dialog': modelValue && !flag
      }"
    >
      <p class="text-2xl font-bold text-black" @click="close">Hello word</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref, watch } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'update:modelValue'],
  setup(props, { emit }: SetupContext) {
    const flag = ref<Boolean>(true);
    const close = () => {
      flag.value = false;
      setTimeout(() => {
        emit('close', false);
        emit('update:modelValue', false);
      }, 200);
    };
    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal) flag.value = true;
      }
    );
    return { close, flag };
  }
});
</script>

<style></style>
