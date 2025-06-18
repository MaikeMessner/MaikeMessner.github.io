<script setup lang="ts">
  import DefaultPage from "../components/DefaultPage.vue";
</script>

<template>
  <DefaultPage
    headline-key="boardgame:headline"
    text-key="boardgame:text"
    ><template #left
      ><div
        class="d-flex flex-wrap flex-md-row gap-2 align-items-center justify-content-around"
      >
        <video
          loop
          controls
          class="w-100"
        >
          <source src="../assets/img/MaikeMessner-BoardGame.mp4" />
        </video></div
    ></template>
  </DefaultPage>
</template>
