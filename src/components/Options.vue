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
  .option--units-select {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0.5rem;
  }
  .option--city {
    display: flex;
    justify-content: space-around;
    .option--input-container {
      border-style: none;
      background-color: #ecececfa;
      height: 3rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      input{
        border: none;
        background-color: inherit;
        &:focus{
          outline: none;
        }
      }
    }
    button {
      background-color: #219ebc;
      width: 5.5rem;
      height: 3rem;
      border: none;
      border-radius: 2rem;
      &:focus{
      }
    }
  }
}
</style>
