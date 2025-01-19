<template>
  <footer class="my-4">
    <div class="container-fluid containerpadding footermargin">
      <div
        class="row mb-2 justify-content-center justify-content-md-start align-items-center align-items-md-start"
      >
        <div class="col-4 col-md-1 p-2">
          <img
            class="w-100"
            :src="sheets.src"
            :alt="sheets.alt"
          />
        </div>
        <div class="col-12 col-md-4">
          <span class="fw-regular footertext">{{
            $t("header:usageNote")
          }}</span>
        </div>
      </div>
      <div
        class="d-flex flex-wrap flex-column flex-md-row gap-2 align-items-center align-items-md-start"
      >
        <div class="offset-md-1 text-nowrap footertext mb-4">
          <div>
            <span>&#169; Maike Meßner {{ currentYear }}</span>
          </div>
        </div>
        <div class="flex-fill"></div>
        <div class="text-nowrap">
          <RouterLink
            class="link-primary link-underline-opacity-0 footertext"
            :to="{ name: 'about' }"
            >{{ $t("header:contact") }}</RouterLink
          >
        </div>
        <div class="text-nowrap">
          <RouterLink
            class="link-primary link-underline-opacity-0 footertext"
            :to="{ name: 'imprint' }"
            >{{ $t("header:imprint") }}</RouterLink
          >
        </div>
        <div class="d-flex gap-2 align-items-start text-center">
          <a
            class="link-primary link-underline-opacity-0 icon-link footertext"
            href="https://www.instagram.com/lillamaike/"
            target="_blank"
            ><i class="bi bi-instagram"></i
          ></a>
          <a
            class="link-primary link-underline-opacity-0 icon-link footertext"
            href="https://de.linkedin.com/in/maike-me%C3%9Fner-595a38248"
            target="_blank"
            ><i class="bi bi-linkedin"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { t } from "i18next";

  export default {
    data() {
      return {
        currentYear: new Date().getUTCFullYear(),
        sheets: {
          src: new URL("../assets/img/Blaetter.png", import.meta.url).href,
          alt: t("header:alt:leaves"),
        },
      };
    },
  };
</script>

<style lang="scss">
  .footertext {
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-align: center;
  }
</style>
