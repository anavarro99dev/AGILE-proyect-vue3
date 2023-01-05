<template>
  <div class="card-container">
    <div class="card-header">
      <span class="card-header--icon"><i class="wi wi-cloud"> </i></span>
      <div class="card-header--city">
        <h3>Washington DC</h3>
        <span>38.9072° N, 77.0369° W</span>
      </div>
    </div>
    <div class="card--body">
      <table>
        <tr>
          <td><span class="content">TODAY</span></td>
          <td><span class="content">SUN</span></td>
          <td><span class="content">MON</span></td>
          <td><span class="content">TUE</span></td>
          <td><span>WED</span></td>
        </tr>
        <tr>
          <td><span>22°</span></td>
          <td><span>23°</span></td>
          <td><span>24°</span></td>
          <td><span>25°</span></td>
          <td><span>19°</span></td>
        </tr>
      </table>
    </div>
    <div class="card--icon-delete"><span> </span></div>
  </div>
</template>

<script setup lang="ts"></script>

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
    margin-left: 0.2rem;
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
