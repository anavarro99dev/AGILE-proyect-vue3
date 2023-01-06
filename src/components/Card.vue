<template>
  <div
    class="card-container"
    v-if="!hide"
    :style=" color_card ">
    <div class="card-header">
      <span
        class="card-header--icon">
        <i 
        :class="'wi ' + icon
        ">
        </i></span>
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
    <!-- Eliminar tarjeta actual -> no es lo mas optimo pero si lo mas sencillo -->
    <div class="card--icon-delete"><span @click="()=>hide = true"> </span></div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../store/store";
import { geocode, openMeteor } from "../store/data";
import { code_data } from "../store/weathercode.json";
import { ref, watch } from "vue";

let hide = ref(false);

const store = useStore();
let geocode_data = ref(await geocode(store.city_name));
let list_day = ref(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]);

let dataTF = (
  await openMeteor(geocode_data.value.latitude, geocode_data.value.longitude)
).dataTF;
let dataTC = (
  await openMeteor(geocode_data.value.latitude, geocode_data.value.longitude)
).dataTC;
let data = ref( !store.temperature ? dataTF : dataTC );

let color_card = ref({
  'background-color' :  store.temperature ?
  // 30C = 86F => 22C = 71F para pruebas
  (data.value[0].temperature_media>=22 ? '#FFB703':'#023047') :
  (data.value[0].temperature_media>=71 ? '#FFB703':'#023047')
})

let icon = ref( code_data.find( (val)=>val.num==data.value[0].weathercode ).icon  );
console.log(icon.value);

watch(
  () => store.temperature,
  (val) => {
    if (val) data.value = dataTC;
    else data.value = dataTF;
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

  border: solid 0.1rem #000000;
  border-radius: 2rem;

  height: 25rem;

  * {
    color: #ffffff;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0 4rem;

  span {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 2rem;
  }
  .card-header--city{
    margin: 0 auto;
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
