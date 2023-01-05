<template>
  <div class="card-container">
    <div class="card-header">
      <span class="card-header--icon"><i class="wi wi-cloud"> </i></span>
      <div class="card-header--city">
        <h3>{{ geocode_data.name }}</h3>
        <!-- TODO: codigo para detectar cuando es latitud(norte, sur), longitud(este, oeste) -->
        <span
          >{{ geocode_data.latitude }}° N, {{ geocode_data.longitude }}° W</span
        >
      </div>
    </div>
    <div class="card--body">
      <table>
        <tr>
          <td><span class="content">TODAY</span></td>
          <td v-for="(val, index) in data.slice(0, 4)">
            <span
              :class="
                // Para que la clase 'content' no se aplique al ultimo elemento
                index < dataTF.slice(0, 4).length - 1 ? 'content' : ' '
              "
            >
              {{ list_day[val.day] }}</span
            >
          </td>
        </tr>
        <tr>
          <td v-for="(val, index) in data">
            <span> {{ val.temperature_media }}°</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="card--icon-delete"><span> </span></div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../store/store";
import { geocode, openMeteor } from "../store/data";
import { ref, watch } from "vue";

const store = useStore();
let geocode_data = ref(await geocode(store.city_name));
let list_day = ref(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]);

let dataTF = (
  await openMeteor(geocode_data.value.latitude, geocode_data.value.longitude)
).dataTF;
let dataTC = (
  await openMeteor(geocode_data.value.latitude, geocode_data.value.longitude)
).dataTC;
let data = ref(dataTF);

watch(
  () => store.temperature,
  (val) => {
    if (val) data.value = dataTC;
    else data.value = dataTF;
    console.log(val);
  }
);
</script>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;

  background-color: #023047;
  border: solid 0.1rem #000000;
  border-radius: 2rem;

  height: 25rem;

  * {
    color: #ffffff;
  }
}

.card-header {
  display: flex;
  justify-content: space-evenly;

  width: 100%;

  span {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 2rem;
  }
}

.card-header--icon {
  i {
    font-size: 5rem;
  }
}

.card--body {
  font-size: 1.6rem;

  span {
    margin-left: 0.4rem;
    text-align: center;
    display: inline-block;
    width: 100%;
  }
}

.content::after {
  content: " | ";
}

.card--icon-delete {
  align-self: center;
  justify-self: center;

  span {
    display: inline-block;

    background-image: url("../assets/eliminar.svg");
    background-repeat: no-repeat;
    background-size: contain;

    width: 2.5rem;
    height: 2.5rem;
  }

  span:hover {
    cursor: pointer;

    width: 3.5rem;
    height: 3.5rem;
  }
}
</style>
