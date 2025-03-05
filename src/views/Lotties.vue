<script setup lang="ts">
  import DefaultPage from "../components/DefaultPage.vue";
</script>

<template>
  <DefaultPage
    headline-key="lotties:headline"
    text-key="lotties:text"
  >
    <template #left>
      <div
        class="d-flex flex-wrap flex-md-row gap-2 align-items-center justify-content-around"
      >
        <video
          autoplay
          loop
          muted
          class="col-12 col-md-5"
        >
          <source src="../assets/img/KisteAnimation_Crop.mp4" />
        </video>
        <video
          autoplay
          loop
          muted
          class="col-12 col-md-5"
        >
          <source src="../assets/img/TrueFalseAnimation.mp4" />
        </video>
        <video
          autoplay
          loop
          muted
          class="col-12 col-md-5"
        >
          <source src="../assets/img/AnnotationAnimationLoop.mp4" />
        </video>
        <img
          class="col-12 col-md-5"
          src="../assets/img/Factence-Diagramme.gif"
        />
      </div>
    </template>
    <template #stickyRight> </template>
  </DefaultPage>
</template>
