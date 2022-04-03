import { defineStore } from 'pinia';

export type counterStateType = {
  counter: number;
};
export const useCounterStore = defineStore('counter', {
  state: (): counterStateType => ({
    counter: 0
  }),
  getters: {
    getDoubleCounter: (state: counterStateType) => {
      return state.counter * 2;
    }
  },
  actions: {
    updateCounter(value: number) {
      this.counter = value;
    }
  }
});
