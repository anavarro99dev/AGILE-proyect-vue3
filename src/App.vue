<template>
  <div>
    <Options></Options>
    <Suspense>
      <Card v-for="n in store.card_list" ></Card>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Card from "./components/Card.vue";
import Options from "./components/Options.vue";
import { useStore } from "./store/store";

const store = useStore();

</script>

<style lang="scss" scoped>
body {
  background-color: #dcdfe0;
}
</style>
