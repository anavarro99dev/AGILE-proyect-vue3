<template>
  <div class="body-container">
    <Options></Options>
    <div class="wait-container" v-if="store.card_list === 0">
      <i class="wi wi-day-cloudy"></i>
      <span>Submit a city to fill up this space</span>
    </div>
      <Suspense>
        <div class="row-container">
          <Card v-for="n in store.counter"></Card>
        </div>
      </Suspense>
  </div>
</template>

<script setup lang="ts">
import Card from "./components/Card.vue";
import Options from "./components/Options.vue";
import { useStore } from "./store/store";

// Variable guardados publicos para todos los componentes 
const store = useStore();
</script>

<style lang="scss" scoped>
body {
  background-color: #dcdfe0;
}

.body-container {
  width: 90vw;
  margin: 0 auto;

  @media screen and (min-width: 1100px) {
    width: auto;
  }
}

.row-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (min-width: 1100px) {
    margin: 10vh 0 !important;
  }
  @media screen and (min-width: 520px) {
    margin: 5rem 0;
  }
}

.wait-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 25vh 0;

  color: #9faaae;
  span {
    font-size: 2rem;
    margin: 0 2rem;
  }
  i {
    margin: 0 auto;
    font-size: 15rem;
  }
  @media screen and (min-width: 1100px) {
    flex-direction: row;
    span {
      font-size: 3.5rem;
    }
    i {
      margin: 0 0;
      font-size: 15rem;
    }
  }
}
</style>
