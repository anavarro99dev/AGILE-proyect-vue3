<template>
  <div class="option-container">
    <div class="option--units-select">
      <Switch> </Switch>
    </div>
    <div class="option--city">
      <label class="option--input-container" id="city-name">
        <!-- Obtencion del nombre de la ciudad -->
        <input
          id="city-name"
          type="text"
          placeholder="Enter a city name"
          v-model="store.city_name"
        />
      </label>
      <!-- Adicionar Card -->
      <button @click="store.increment">submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch from "./Switch.vue";
import { useStore } from "../store/store";

// Variable guardada publica para todos los componentes 
let store = useStore();
</script>

<style lang="scss" scoped>
.option-container {
  width: 100%;

  font-size: 1.5rem;
  margin: 0 auto;
  * {
    color: #ffffff;
  }
}
.option--units-select {
  display: flex;
  justify-content: flex-end;

  padding: 1rem;
  @media screen and (min-width: 1100px) {
    padding: 5vh 0;
    width: 95vw;
  }
}
.option--city {
  display: flex;
  justify-content: space-evenly;
  button {
    cursor: pointer;

    border: none;
    border-radius: 2rem;
    background-color: #219ebc;

    flex-basis: 25%;
    height: 4rem;
  }
  button:hover {
    border: #6f6969 0.1rem solid;
    opacity: 0.8;
  }
  @media screen and (min-width: 650px) {
    max-width: 70rem;
    margin: 0 auto;
    button {
      flex-basis: 15%;
    }
    .option--input-container {
      flex-basis: 70%;
    }
  }
}
.option--input-container {
  cursor: text;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-style: none;
  border-radius: 0.5rem;
  background-color: #ecececfa;

  height: 4rem;
  flex-basis: 60%;
  padding: 0 1rem;
  input {
    cursor: inherit;
    color: #6f6969;

    border: none;
    background-color: inherit;

    width: 85%;
    &:focus {
      outline: none;
    }
  }
}
</style>
