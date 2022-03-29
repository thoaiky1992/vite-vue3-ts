<template>
  <div
    v-show="show"
    :class="`
      fixed
      inset-0
      top-0
      z-50 flex
      h-full
      w-full
      items-center
      justify-center
      bg-black
      bg-opacity-40
      ${show && flag ? 'animate-dialog_leave_opacity' : 'animate-dialog_opacity'}`"
  >
    <div
      :class="`
        flex
        h-48
        w-96
        items-center
        justify-center
        rounded-xl
        bg-white
        shadow-2xl
        ${show && flag ? 'animate-dialog' : 'animate-leave_dialog'}`"
    >
      <p class="text-2xl font-bold text-black" @click="close">Hello word</p>
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
      }, 200);
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
