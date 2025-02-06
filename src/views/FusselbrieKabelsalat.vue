<script setup lang="ts">
  import DefaultPage from "../components/DefaultPage.vue";
</script>

<template>
  <DefaultPage
    headline-key="fusselbrie-kabelsalat:headline"
    text-key="fusselbrie-kabelsalat:text"
  >
    <template #left>
      <img
        class="w-100 p-2"
        src="../assets/img/Fusselbrie_Mockup01.jpg"
      />
      <img
        class="w-100 p-2"
        src="../assets/img/Fusselbrie_Mockup02.jpg"
      />
      <img
        class="w-100 p-2"
        src="../assets/img/Fusselbrie_Mockup03.jpg"
      />
      <img
        class="w-100 p-2"
        src="../assets/img/Fusselbrie_Mockup04.jpg"
      />
    </template>
    <template #stickyRight>
      <p class="fw-bold mt-5">
        {{ $t("fusselbrie-kabelsalat:masterTitle") }}
      </p>
      <p>{{ $t("fusselbrie-kabelsalat:masterText") }}</p>
    </template>
  </DefaultPage>
</template>
