<script setup lang="ts">
  import { ImgComparisonSlider } from "@img-comparison-slider/vue";
  import DefaultPage from "../components/DefaultPage.vue";
</script>

<template>
  <DefaultPage
    headline-key="wimmelbild:headline"
    text-key="wimmelbild:text"
  >
    <template #left>
      <ImgComparisonSlider
        hover="hover"
        value="25"
        class="slider-focus coloured-slider"
      >
        <img
          v-html-slot="'first'"
          class="w-100"
          src="../assets/img/Wimmelbild01-sw.png"
          alt="Letsfetz"
        />
        <img
          v-html-slot="'second'"
          class="w-100"
          src="../assets/img/Wimmelbild01-farbe.png"
          alt="Letsrock"
        />
      </ImgComparisonSlider>

      <ImgComparisonSlider
        hover="hover"
        value="25"
        class="slider-focus coloured-slider"
      >
        <img
          v-html-slot="'first'"
          class="w-100"
          src="../assets/img/Wimmelbild02-sw.png"
          alt="Letsfetz"
        />
        <img
          v-html-slot="'second'"
          class="w-100"
          src="../assets/img/Wimmelbild02-farbe.png"
          alt="Letsrock"
        />
      </ImgComparisonSlider>
    </template>
  </DefaultPage>
</template>
