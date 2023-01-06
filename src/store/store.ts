import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return { 
        card_list: 0,
        city_name: "",
        temperature: false,
    };
  },
  actions: {
    increment() {
      this.card_list++;
    },
  },
});