<script setup lang="ts">
  import DefaultPage from "../components/DefaultPage.vue";
</script>

<template>
  <DefaultPage
    headline-key="dye:headline"
    text-key="dye:text"
  >
    <template #left>
      <div
        class="d-flex flex-wrap flex-md-row gap-2 align-items-center justify-content-around"
      >
        <video
          autoplay
          loop
          muted
          class="w-100 p-2"
        >
          <source src="../assets/img/Schwimmen.mp4" />
        </video>
        <video
          autoplay
          loop
          muted
          class="w-100 p-2"
        >
          <source src="../assets/img/Schlagen.mp4" />
        </video>
        <video
          autoplay
          loop
          muted
          class="w-100 p-2"
        >
          <source src="../assets/img/Switch-Bakterien.mp4" />
        </video>
        <video
          autoplay
          loop
          muted
          class="col-4 col-md-6"
        >
          <source src="../assets/img/Farbverlauf.mp4" />
        </video>
        <video
          autoplay
          loop
          muted
          class="col-4 col-md-6"
        >
          <source src="../assets/img/Gegner.mp4" />
        </video>
        <img
          class="w-100 p-2"
          src="../assets/img/Gegner.jpg"
        />
      </div>
    </template>
    <template #stickyRight> </template>
  </DefaultPage>
</template>
