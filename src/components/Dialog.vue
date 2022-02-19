<template>
  <div
    v-show="show"
    class="
      fixed
      h-full
      w-full
      bg-black bg-opacity-40
      z-50
      top-0
      inset-0
      flex
      justify-center
      items-center
      transition-all
      duration-300
    "
  >
    <div
      :class="`
        w-96
        h-48
        bg-white
        rounded-xl
        flex
        justify-center
        items-center
        shadow-2xl
        ${show && flag ? 'animate-dialog' : 'animate-leave_dialog'}  `"
    >
      <p class="text-black font-bold text-2xl" @click="close">Hello word</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref, watch } from 'vue';

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  setup(props, { emit }: SetupContext) {
    const flag = ref<Boolean>(true);
    const close = () => {
      flag.value = false;
      setTimeout(() => {
        emit('close', false);
      }, 400);
    };
    watch(
      () => props.show,
      (newVal) => {
        if (newVal) flag.value = true;
      }
    );
    return { close, flag };
  }
});
</script>

<style></style>
