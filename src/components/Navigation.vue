<template>
  <div class="container-fluid containerpadding navbarmargin">
    <nav
      class="navbar navbar-expand-xxl bg-body-primary d-flex gap-sm-2 gap-lg-5 gap-md-4"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="d-flex gap-1 align-items-center">
          <img
            src="../assets/img/Otis.gif"
            alt="Laufender Otis"
            class="gifsize"
          />
          <img
            src="../assets/img/Logo-gross-bold02.png"
            alt="Logo"
            class="logosize"
          />
        </div>
      </RouterLink>
      <button
        class="navbar-toggler navbartoggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarSupportedContent"
        class="offcanvas offcanvas-top h-100 w-100"
        tabindex="-1"
        data-bs-backdrop="true"
        data-bs-animation="fade"
      >
        <div class="offcanvas-header">
          <div class="m-auto">
            <button
              type="button"
              class="d-block d-xxl-none btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="offcanvas-body">
          <div
            class="d-flex align-items-center justify-content-xxl-between flex-xxl-row justify-content-center flex-column gap-2 w-100 h-min-100 h-fit-content"
          >
            <div class="navbar-nav d-flex align-items-center gap-2">
              <RouterLink
                v-for="item in navigationFilterOptions"
                :key="item.tag"
                :to="{ name: 'home', params: { filter: item.tag } }"
                class="nav-link navtext text-nowrap"
                active-class="active"
              >
                {{ $t(item.translationKey) }}
              </RouterLink>
              <RouterLink
                class="nav-link navtext nav-item"
                active-class="active"
                :to="{ name: 'about' }"
                >{{ $t("header:about") }}</RouterLink
              >
            </div>
            <div
              class="navbar-nav navausrichtung d-flex align-items-center gap-2 mt-5 mt-xxl-0"
            >
              <div class="d-flex gap-2 align-items-center">
                <template
                  v-for="[lng, lngName] in Object.entries(languages)"
                  :key="lng"
                >
                  <button
                    class="nav-link navtext nav-item"
                    :class="{ active: $i18next.resolvedLanguage === lng }"
                    @click="$i18next.changeLanguage(lng)"
                  >
                    {{ lngName }}
                  </button>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        navigationFilterOptions: [
          {
            translationKey: "header:booksComics",
            tag: "booksComics",
          },
          {
            translationKey: "header:illustration",
            tag: "illustration",
          },
          {
            translationKey: "header:motion",
            tag: "motion",
          },
          {
            translationKey: "header:design",
            tag: "design",
          },
          {
            translationKey: "header:graphicUx",
            tag: "graphicUx",
          },
        ],
        languages: {
          de: "DE",
          en: "EN",
        },
      };
    },
  };
</script>

<style lang="scss">
  .h-min-100 {
    min-height: 100%;
  }

  .h-fit-content {
    height: fit-content;
  }

  .navicon {
    font-size: 24px;
  }

  .navtext {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }

  .navbartoggler {
    background-color: none;
    border: none;
    color: none;
    padding: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .navausrichtung {
    text-align: center;
  }

  @media (max-width: 576px) {
    .gifsize {
      height: 6.5rem;
    }
    .logosize {
      height: 4.8rem;
    }
    .navbarmargin {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    .gifsize {
      height: 7.5rem;
    }
    .logosize {
      height: 5.8rem;
    }
    .navbarmargin {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .gifsize {
      height: 7.5rem;
    }
    .logosize {
      height: 5.8rem;
    }
    .navbarmargin {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    .gifsize {
      height: 7.5rem;
    }
    .logosize {
      height: 5.8rem;
    }
    .navbarmargin {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    .gifsize {
      height: 7.5rem;
    }
    .logosize {
      height: 5.8rem;
    }
    .navbarmargin {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 1400px) {
    .gifsize {
      height: 7.5rem;
    }
    .logosize {
      height: 5.8rem;
    }
    .navbarmargin {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }
</style>
