<template>
  <div class="card-container">
    <div class="card-header">
      <span class="card-header--icon"> </span>
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
  background-color: #023047;
  border: solid 0.1rem #000000;
  border-radius: 2rem;
  width: 90vw;
  height: 15rem;
  margin: 1rem auto;
}

.card-header {
  display: flex;
  justify-content: space-evenly;
  font-size: 1rem;
  margin: 1rem;
}

.card-header--icon {
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  align-self: center;
}

.card--body {
  margin: 2rem 0;
  table {
    margin: 0 auto;
    border-collapse: 2rem;
  }
  span {
    margin-left: 0.3rem;
  }
}
.content::after {
  content: " | ";
}

.card--icon-delete{
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  margin: 0 auto;
}
</style>
