<script setup lang="ts">
  import { useTranslation } from "i18next-vue";
  import DefaultPage from "../components/DefaultPage.vue";

  useTranslation("kaffeeverpackung");
</script>

<template>
  <DefaultPage
    headline-key="kaffeeverpackung:headline"
    text-key="kaffeeverpackung:text"
  >
    <template #left>
      <img
        class="w-100 p-2"
        src="../assets/img/Kaffee-Verpackung-lg.jpg"
      />
      <img
        class="w-90 p-2"
        src="../assets/img/Vogel-Sticker-sm1.png"
      />
    </template>
  </DefaultPage>
</template>
