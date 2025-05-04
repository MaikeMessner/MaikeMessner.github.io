<script setup lang="ts">
  import { useTranslation } from "i18next-vue";
  import DefaultPage from "../components/DefaultPage.vue";

  useTranslation("speisekarte");
</script>

<template>
  <DefaultPage
    headline-key="speisekarte:headline"
    text-key="speisekarte:text"
  >
    <template #left>
      <img
        class="w-100 p-2"
        src="../assets/img/Hochzeitseinladung-Mockup-ganz.jpg"
      />
      <div
        class="flex-wrap d-flex flex-row align-items-center justify-content-between"
      >
        <img
          class="col-4 p-2"
          src="../assets/img/Hochzeitseinladung-Mockup-Detail01.jpg"
        />
        <img
          class="col-4 p-2"
          src="../assets/img/Hochzeitseinladung-Mockup-Detail02.jpg"
        />
        <img
          class="col-4 p-2"
          src="../assets/img/Hochzeitseinladung-Mockup-Detail03.jpg"
        />
      </div>
    </template>
  </DefaultPage>
</template>
