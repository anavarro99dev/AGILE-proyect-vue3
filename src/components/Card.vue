<template>
  <div class="card-container">
    <div class="card-header">
      <div class="card-header--icon"><span> </span></div>
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
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  justify-items: center;
  align-items: center;

  background-color: #023047;
  border: solid 0.1rem #000000;
  border-radius: 2rem;
  height: 25rem;
}

.card-header {
  display: flex;
  justify-content: space-around;
  width: inherit;
  span {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 2rem;
  }
}

.card-header--icon {
  width: 5rem;
  height: 5rem;
  background-color: white;
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
  width: 3rem;
  height: 3rem;
  background-color: white;
}
</style>
