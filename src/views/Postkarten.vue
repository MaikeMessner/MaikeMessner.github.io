<script setup lang="ts">
  import { useTranslation } from "i18next-vue";
  import DefaultPage from "../components/DefaultPage.vue";

  useTranslation("postkarten");
</script>

<template>
  <DefaultPage
    headline-key="postkarten:headline"
    text-key="postkarten:text"
  >
    <template #left>
      <img
        class="w-100 p-2"
        src="../assets/img/Geburtstagskarte_WebCom.jpg"
      />
      <img
        class="w-100 p-2"
        src="../assets/img/Willkommenskarte_WebCom.jpg"
      />
      <img
        class="w-100 p-2"
        src="../assets/img/Weihnachtskarte_WebCom.jpg"
      />
    </template>
  </DefaultPage>
</template>
