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
            <!--<LoadingPlaceholderImg
              class="w-100"
              :src="item.img"
              :loading-src="''"
              :alt="item.imgAlt"
              :zoom-on-hover="true"
              :height="item.height"
              :width="item.width"
            />-->
            <responsive-img
              :src="item.img"
              class="w-100"
              :alt="item.imgAlt"
              :zoom-on-hover="true"
            />
          </RouterLink>

          <responsive-img
            v-else
            :src="item.img"
            class="w-100"
            :alt="item.imgAlt"
          />

          <!--<LoadingPlaceholderImg
            v-else
            class="w-100"
            :src="item.img"
            :loading-src="item.loadingImg ?? ''"
            :alt="item.imgAlt"
          />-->
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  import { watch } from "vue";

  import imgFusselbrie from "../assets/img/Fusselbrie-Masonry1.jpg?responsive";
  import imgWelligDellig from "../assets/img/wellig-dellig-mockup-sm4.jpg?responsive";
  import imgLinoKalender from "../assets/img/Linokalender-sm2.jpg?responsive";
  import imgWildwuchs from "../assets/img/Wildwuchs-sm1.jpg?responsive";
  import imgWimmelbild from "../assets/img/Wimmelbild01-farbe-sm2.jpg?responsive";
  import imgHexe from "../assets/img/Hexe-glaze1.jpg?responsive";
  import imgKaffee from "../assets/img/Kaffee-Verpackung.jpg?responsive";
  import imgHochzeit from "../assets/img/Hochzeitseinladung-Mockup-Home.jpg?responsive";
  import imgRiso from "../assets/img/Riso-glaze1.jpg?responsive";
  import imgWaschtag from "../assets/img/Waschtag-glaze1.jpg?responsive";
  import imgKraehe from "../assets/img/Kraehe-glaze2.jpg?responsive";
  import imgHelp from "../assets/img/Help2.jpg?responsive";
  import imgSkull from "../assets/img/skull1.gif";
  import imgBett from "../assets/img/Bett-glaze2.jpg?responsive";
  import imgFactence from "../assets/img/Factence-Diagramme1.gif";
  import imgWillkommenWebcom from "../assets/img/Willkommenskarte_WebCom1.jpg?responsive";
  import imgSmiley from "../assets/img/smiley.gif";
  import imgBoardgame from "../assets/img/Boardgame-Thumbnail.png?responsive";
  import imgDye from "../assets/img/Dye-Thumbnail.png?responsive";
  import ResponsiveImg from "../components/ResponsiveImg.vue";

  export default {
    components: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ResponsiveImg,
    },

    data() {
      return {
        masonryFilter: undefined as string | undefined,
        masonryEntries: [
          {
            uuid: "6aed85fa-43bd-4133-ac47-fbe08a5c9fb5",
            img: imgFusselbrie,
            imgAlt: "Fusselbrie & Kabelsalat",
            linkTarget: { name: "fusselbriekabelsalat" },
            tags: ["booksComics", "illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "b1f674e4-743d-4a07-8768-44f0dc696148",
            img: imgWelligDellig,
            imgAlt: "Wellig-dellig",
            linkTarget: { name: "welligdellig" },
            tags: ["booksComics", "graphicdesign-ux"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "3907fa6b-4ea4-4108-af6f-0c330f0d155c",
            img: imgLinoKalender,
            imgAlt: "Lino",
            linkTarget: { name: "linokalender" },
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "30ff5b86-89f7-45c7-9b41-2c6ff7dc6261",
            img: imgWildwuchs,
            imgAlt: "Wildwuchs",
            linkTarget: { name: "wildwuchs" },
            tags: ["motion"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "1965d346-b666-44c1-98f8-e99c34ae89ff",
            img: imgWimmelbild,
            imgAlt: "Wimmelbild",
            linkTarget: { name: "wimmelbild" },
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "103a6af7-eff4-4aee-88cb-4b7955226a7d",
            img: imgHexe,
            imgAlt: "Hexe",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "bfb3b0ba-1ccc-42a0-854b-4a235cc29114",
            img: imgKaffee,
            imgAlt: "Kaffee",
            linkTarget: { name: "kaffeeverpackung" },
            tags: ["graphicdesign-ux"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "78316dab-331f-4d70-8f63-fc27fbbedbf3",
            img: imgHochzeit,
            imgAlt: "Speisekarte",
            linkTarget: { name: "speisekarte" },
            tags: ["graphicdesign-ux"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "103a6af7-eff4-4aee-88cb-4b7955226a7d",
            img: imgRiso,
            imgAlt: "Riso",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "a11fa9ab-c7a5-4a9b-8339-a77f6f917109",
            img: imgWaschtag,
            imgAlt: "Waschtag",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "1ab33658-e4a1-472a-b1bf-9e58fcc2d997",
            img: imgKraehe,
            imgAlt: "Kraehe",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "f199519e-bd31-4a86-9e24-c529be4f4649",
            img: imgHelp,
            imgAlt: "Help",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "0396d3dd-7190-4a7d-aae9-7373da883dc6",
            img: imgSkull,
            imgAlt: "skull",
            linkTarget: undefined,
            tags: ["motion"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "283389dc-af66-4b72-9e5a-869a30be59ab",
            img: imgBett,
            imgAlt: "Bett",
            linkTarget: undefined,
            tags: ["illustration"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "908ad917-1015-4464-81ce-7b112f0fa3a9",
            img: imgFactence,
            imgAlt: "Factence",
            linkTarget: { name: "lotties" },
            tags: ["motion"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "a7a16def-fdef-4a98-84e9-6f0e4c7981b1",
            img: imgWillkommenWebcom,
            imgAlt: "Postkarten",
            linkTarget: { name: "postkarten" },
            tags: ["graphicdesign-ux"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "417a64b8-8a38-4c41-9b41-4c6b18d1d451",
            img: imgSmiley,
            imgAlt: "Smiley",
            linkTarget: undefined,
            tags: ["motion"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "09f02748-039a-4c8e-8567-87d39bcc42ff",
            img: imgBoardgame,
            imgAlt: "Boardgame",
            linkTarget: { name: "boardgame" },
            tags: ["motion"],
            height: undefined,
            width: undefined,
          },
          {
            uuid: "95125fce-ab15-4939-a816-55946080ce7f",
            img: imgDye,
            imgAlt: "Dye",
            linkTarget: { name: "dye" },
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
