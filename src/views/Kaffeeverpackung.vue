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
      <div
        class="flex-wrap d-flex flex-row align-items-center justify-content-between"
      >
        <img
          class="col-md-3 col-12"
          src="../assets/img/Vogel-Sticker-sm1.png"
        />
        <img
          class="col-md-4 col-12"
          src="../assets/img/GreenBeanLogo.png"
        />
        <img
          class="col-md-5 col-12"
          src="../assets/img/GreenBeanPiktogramme.png"
        />
      </div>
    </template>
  </DefaultPage>
</template>
