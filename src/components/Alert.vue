<template>
  <div class="alert">
    <transition-group name="list" tag="div">
      <div v-for="(item, index) in alerts" :key="index">
        <p class="item">{{ item }}</p>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

export default defineComponent({
  props: {
    alerts: {
      type: Array as PropType<Array<String>>,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  }
});
</script>
<style lang="scss">
.alert {
  position: fixed;
  z-index: 200;
  top: 10px;
  right: 10px;

  .item {
    width: 400px;
    height: 100px;
    background-color: #0000;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0 0 5px #000;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
