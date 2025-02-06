<script setup lang="ts">
  import DefaultPage from "../components/DefaultPage.vue";
</script>

<template>
  <DefaultPage
    headline-key="wellig-dellig:headline"
    text-key="wellig-dellig:text"
  >
    <template #left>
      <div
        id="carousel"
        class="carousel slide"
        data-ride="carousel"
        data-interval="0"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/Doppelseite01.png"
              class="d-block w-100"
              alt="Doppelseite01"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/Doppelseite02.png"
              class="d-block w-100"
              alt="Doppelseite02"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/Doppelseite03.png"
              class="d-block w-100"
              alt="Doppelseite03"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/Doppelseite04.png"
              class="d-block w-100"
              alt="Doppelseite04"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </template>
    <template #stickyRight>
      <p class="fw-bold mt-5">
        {{ $t("wellig-dellig:bachelorTitle") }}
      </p>
      <p>{{ $t("wellig-dellig:bachelorText") }}</p>
    </template>
  </DefaultPage>
</template>
