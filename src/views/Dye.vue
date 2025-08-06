<script setup lang="ts">
  import DefaultPage from "../components/DefaultPage.vue";
</script>

<template>
  <DefaultPage
    headline-key="dye:headline"
    text-key="dye:text"
  >
    <template #left>
      <video
        autoplay
        loop
        muted
        class="w-100 pb-1"
      >
        <source src="../assets/img/Schwimmen.mp4" />
      </video>
      <video
        autoplay
        loop
        muted
        class="w-100 pb-1 pt-1"
      >
        <source src="../assets/img/Schlagen.mp4" />
      </video>
      <video
        autoplay
        loop
        muted
        class="w-100 pb-1 pt-1"
      >
        <source src="../assets/img/Switch-Bakterien.mp4" />
      </video>
      <div class="w-100 pb-1 pt-1 d-flex flex-wrap flex-column flex-md-row justify-content-between">
        <video
          autoplay
          loop
          muted
          class="col-12 col-md-6 pe-md-1 pb-1 pb-md-0"
        >
          <source src="../assets/img/Farbverlauf.mp4" />
        </video>

        <img
          class="col-12 col-md-6 ps-md-1 pb-1 pb-md-0"
          src="../assets/img/Gegner.gif"
        />

      </div>
      <img
        class="w-100 pb-1 pt-1"
        src="../assets/img/Gegner.jpg"
      />
    </template>
    <template #stickyRight> </template>
  </DefaultPage>
</template>
