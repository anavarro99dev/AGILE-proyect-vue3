import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      // Variable guardada publica para todos los componentes 
      card_list: 0,
      counter: 0,
      city_name: "",
      temperature: false,
    };
  },
  actions: {
    // Agregar Card
    increment() {
      this.counter++;
      this.card_list++
    },
    // Eliminar Card
    decrement() {
      // this.counter--;
      this.card_list--
    },
  },
});
