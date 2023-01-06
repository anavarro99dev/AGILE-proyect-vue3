<template>
  <label class="switch">
    <!-- Obtencion del la unidad de medida -->
    <input type="checkbox" v-model="store.temperature" />
    <div class="slider round">
      <span v-show="store.temperature" class="F">F</span>
      <span v-show="!store.temperature" class="C">C</span>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { useStore } from "../store/store";

// Variable guardada publica para todos los componentes
let store = useStore();
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 7.5rem;
  height: 3.5rem;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #99a4a9;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 2.5rem;
  width: 2.5rem;
  left: 0.5rem;
  bottom: 0.55rem;
  background-color: #ececec;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #99a4a9;
}

input:checked + .slider:before {
  -webkit-transform: translateX(4rem);
  -ms-transform: translateX(4rem);
  transform: translateX(4rem);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.slider {
  span {
    color: #0230479c;
    position: absolute;
    user-select: none;
  }
  .C {
    left: 5rem;
    bottom: 0.6rem;
  }
  .F {
    left: 1rem;
    bottom: 0.6rem;
  }
}
</style>
