<template>
  <div class="option-container">
    <div class="option--units-select">
      <Switch> </Switch>
    </div>
    <div class="option--city">
      <label class="option--input-container" id="city-name">
        <input id="city-name" type="text" placeholder="Enter a city name" />
      </label>
      <button>submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch from "./Switch.vue";
</script>

<style lang="scss" scoped>
.option-container {
  font-size: 1.5rem;
  margin: 0 auto;
  *{
    color: #FFFFFF;
  }
}
.option--units-select {
  display: flex;
  justify-content: flex-end;
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
  button:hover{
    border: #6F6969 0.1rem solid;
    opacity: 0.8;
  }
}
.option--input-container {
  cursor: text;

  display: flex;
  align-items: center;
  justify-content: center;

  border-style: none;
  border-radius: 0.5rem;
  background-color: #ecececfa;

  height: 4rem;
  flex-basis: 60%;
  input {
    cursor: inherit;
    color: #6F6969;

    border: none;
    background-color: inherit;

    width: 85%;
    &:focus {
      outline: none;
    }
  }
}
</style>
