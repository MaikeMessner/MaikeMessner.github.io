<script setup lang="ts">
  import { useTranslation } from "i18next-vue";
  import DefaultPage from "../components/DefaultPage.vue";

  useTranslation("linokalender");
</script>

<template>
  <DefaultPage
    headline-key="linokalender:headline"
    text-key="linokalender:text"
  >
    <template #left>
      <img
        class="w-100"
        src="../assets/img/Linokalender.jpg"
      />
      <img
        class="w-100"
        src="../assets/img/Kalender-mockup.png"
      />
    </template>
  </DefaultPage>
</template>
