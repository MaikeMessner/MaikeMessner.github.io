<script setup lang="ts">
  import DefaultPage from "../components/DefaultPage.vue";
</script>

<template>
  <DefaultPage
    left-container-class="col-sm-6 col-lg-4 mb-4"
    right-container-class="col-sm-6 col-lg-4 mb-4"
    additional-row-class="justify-content-center align-items-stretch gap-5"
  >
    <template #left
      ><img
        class="w-100"
        src="../assets/img/About.jpg"
    /></template>
    <template #stickyRight>
      <div class="justify-content-between d-flex flex-column h-100">
        <div>
          <h1>{{ $t("header:about") }}</h1>
          <div class="aboutfont">
            <p
              v-for="(item, index) in $t('about:mainText', {
                returnObjects: true,
              })"
              :key="index"
            >
              {{ item }}
            </p>
            <a
              :href="'mailto:' + $t('about:mail')"
              class="link-primary link-underline-opacity-0 semibold"
              target="_blank"
            >
              {{ $t("about:mail") }}
            </a>
          </div>
        </div>
        <p class="aboutfont text-end">
          {{ $t("about:look") }}<br />
          <i18next :translation="$t('about:bscParcours')">
            <template #bscParcoursLink>
              <a
                href="https://wise24.parcours-muenster.de/katalog/"
                class="link-primary link-underline-opacity-0 semibold"
                target="_blank"
                >{{ $t("about:linkTitle") }}</a
              >
            </template>
          </i18next>
        </p>
      </div>
    </template>
  </DefaultPage>
</template>

<style lang="css" scoped>
  .aboutfont {
    font-size: 18px;
  }

  .semibold {
    font-weight: 600;
  }
</style>
