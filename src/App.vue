<script setup lang="ts">
  import Footer from "./components/Footer.vue";
  import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="flex-container">
    <div class="no-grow-wrapper">
      <Navigation></Navigation>
    </div>
    <div class="grow-wrapper">
      <router-view v-slot="{ Component }">
        <component :is="Component"></component>
      </router-view>
    </div>
    <div class="no-grow-wrapper">
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="css">
  .flex-container {
    height: 100%;
    flex-flow: column;
    display: flex;
    min-height: 100vh;
  }

  .flex-container .no-grow-wrapper {
    flex: 0 1 auto;
  }

  .flex-container .grow-wrapper {
    flex: 1 1 auto;
  }
</style>
