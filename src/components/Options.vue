<template>
  <div class="option-container">
    <div class="option--units-select">
      <Switch> </Switch>
    </div>
    <div class="option--city">
      <div class="option--input-container">
        <input type="text" placeholder="Enter a city name" />
      </div>
      <button type="submit">submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch from "./Switch.vue";
</script>

<style lang="scss" scoped>
.option-container {
  margin: 0 auto;
  font-size: 1.5rem;
}
.option--units-select {
  display: flex;
  justify-content: flex-end;
}
.option--city {
  display: flex;
  justify-content: space-between;
  button {
    flex-basis: 25%;
    background-color: #219ebc;
    height: 4rem;
    border: none;
    border-radius: 2rem;
  }
}
.option--input-container {
  border-style: none;
  background-color: #ecececfa;
  height: 4rem;
  flex-basis: 60%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  input {
    border: none;
    background-color: inherit;
    &:focus {
      outline: none;
    }
  }
}
</style>
