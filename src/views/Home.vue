<template>
  <!-- Masonry -->
  <div class="container-fluid containerpadding">
    <div
      ref="masonry"
      v-masonry="{
        percentPosition: true,
        itemSelector: '.masonryItem',
        horizontalOrder: false,
        imagesLoadedMode: 'onProgress',
      }"
      class="row justify-content-between"
    >
      <template
        v-for="item in masonryEntries"
        :key="item.uuid"
      >
        <div
          v-show="!masonryFilter || item.tags.includes(masonryFilter)"
          class="col-sm-6 col-lg-4 mb-4"
          :class="{
            masonryItem: !masonryFilter || item.tags.includes(masonryFilter),
          }"
        >
          <RouterLink
            v-if="item.linkTarget"
            :to="item.linkTarget"
            class="w-100"
          >
            <LoadingPlaceholderImg
              class="w-100"
              :src="item.img"
              :loading-src="''"
              :alt="item.imgAlt"
              :zoom-on-hover="true"
              :height="item.height"
              :width="item.width"
            />
          </RouterLink>

          <LoadingPlaceholderImg
            v-else
            class="w-100"
            :src="item.img"
            :loading-src="item.loadingImg ?? ''"
            :alt="item.imgAlt"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  import { watch } from "vue";
  import LoadingPlaceholderImg from "../components/LoadingPlaceholderImg.vue";

  const getImageUrl = (image: string): string =>
    new URL(`../assets/img/${image}`, import.meta.url).href;

  export default {
    components: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      LoadingPlaceholderImg,
    },

    data() {
      return {
        masonryFilter: undefined as string | undefined,
        masonryEntries: [
          {
            uuid: "6aed85fa-43bd-4133-ac47-fbe08a5c9fb5",
            img: getImageUrl("Fusselbrie-Masonry1.jpg"),
            loadingImg: undefined,
            imgAlt: "Fusselbrie & Kabelsalat",
            linkTarget: { name: "fusselbriekabelsalat" },
            tags: ["booksComics", "illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "b1f674e4-743d-4a07-8768-44f0dc696148",
            img: getImageUrl("wellig-dellig-mockup4.jpg"),
            loadingImg: getImageUrl("wellig-dellig-mockup-sm4.jpg"),
            imgAlt: "Wellig-dellig",
            linkTarget: { name: "welligdellig" },
            tags: ["booksComics", "graphicdesign-ux"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "3907fa6b-4ea4-4108-af6f-0c330f0d155c",
            img: getImageUrl("Linokalender2.jpg"),
            loadingImg: getImageUrl("Linokalender-sm2.jpg"),
            imgAlt: "Lino",
            linkTarget: { name: "linokalender" },
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "30ff5b86-89f7-45c7-9b41-2c6ff7dc6261",
            img: getImageUrl("Wildwuchs1.jpg"),
            loadingImg: getImageUrl("Wildwuchs-sm1.jpg"),
            imgAlt: "Wildwuchs",
            linkTarget: { name: "wildwuchs" },
            tags: ["motion"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "1965d346-b666-44c1-98f8-e99c34ae89ff",
            img: getImageUrl("Wimmelbild01-farbe2.jpg"),
            loadingImg: getImageUrl("Wimmelbild01-farbe-sm2.jpg"),
            imgAlt: "Wimmelbild",
            linkTarget: { name: "wimmelbild" },
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "103a6af7-eff4-4aee-88cb-4b7955226a7d",
            img: getImageUrl("Hexe-glaze1.jpg"),
            loadingImg: getImageUrl("Hexe-glaze-sm1.jpg"),
            imgAlt: "Hexe",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "bfb3b0ba-1ccc-42a0-854b-4a235cc29114",
            img: getImageUrl("Kaffee-Verpackung.jpg"),
            loadingImg: getImageUrl("Kaffee-Verpackung-sm.jpg"),
            imgAlt: "Kaffee",
            linkTarget: { name: "kaffeeverpackung" },
            tags: ["graphicdesign-ux"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "103a6af7-eff4-4aee-88cb-4b7955226a7d",
            img: getImageUrl("Riso-glaze1.jpg"),
            loadingImg: getImageUrl("Riso-glaze-sm1.jpg"),
            imgAlt: "Riso",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "a11fa9ab-c7a5-4a9b-8339-a77f6f917109",
            img: getImageUrl("Waschtag-glaze1.jpg"),
            loadingImg: getImageUrl("Waschtag-glaze-sm1.jpg"),
            imgAlt: "Waschtag",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "1ab33658-e4a1-472a-b1bf-9e58fcc2d997",
            img: getImageUrl("Kraehe-glaze2.jpg"),
            loadingImg: getImageUrl("Kraehe-glaze-sm2.jpg"),
            imgAlt: "Kraehe",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "f199519e-bd31-4a86-9e24-c529be4f4649",
            img: getImageUrl("Help2.jpg"),
            loadingImg: getImageUrl("Help-sm2.jpg"),
            imgAlt: "Help",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "0396d3dd-7190-4a7d-aae9-7373da883dc6",
            img: getImageUrl("skull1.gif"),
            loadingImg: getImageUrl("skull-sm1.gif"),
            imgAlt: "skull",
            linkTarget: undefined,
            tags: ["motion"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "283389dc-af66-4b72-9e5a-869a30be59ab",
            img: getImageUrl("Bett-glaze2.jpg"),
            loadingImg: getImageUrl("Bett-glaze-sm2.jpg"),
            imgAlt: "Bett",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "908ad917-1015-4464-81ce-7b112f0fa3a9",
            img: getImageUrl("Factence-Diagramme1.gif"),
            loadingImg: getImageUrl("Factence-Diagramme1.gif"),
            imgAlt: "Factence",
            linkTarget: { name: "lotties" },
            tags: ["motion"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "a7a16def-fdef-4a98-84e9-6f0e4c7981b1",
            img: getImageUrl("Willkommenskarte_WebCom1.jpg"),
            loadingImg: getImageUrl("Willkommenskarte_WebCom_sm1.jpg"),
            imgAlt: "Postkarten",
            linkTarget: { name: "postkarten" },
            tags: ["graphicdesign-ux"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "417a64b8-8a38-4c41-9b41-4c6b18d1d451",
            img: getImageUrl("smiley.gif"),
            loadingImg: getImageUrl("smiley.gif"),
            imgAlt: "Smiley",
            linkTarget: undefined,
            tags: ["motion"],
            height: undefined,
            width: undefined,
          },
        ],
      };
    },

    created() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.masonryFilter = (this.$route.params.filter as string) || undefined;

      watch(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        () => this.$route.params.filter,

        filter => (this.masonryFilter = (filter as string) || undefined),
      );
    },
  };
</script>
