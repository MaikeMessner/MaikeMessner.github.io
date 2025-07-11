<script lang="ts">
  import { type ImageData as ImgData } from "@responsive-image/core";

  const getImg = <T extends string | ImgData>(img: T) =>
    typeof img === "string" ? new URL(img, import.meta.url).href : img;

  export default {
    props: {
      src: {
        type: Object as () => string | ImgData,
        required: true,
      },
      zoomOnHover: {
        type: Boolean,
        required: false,
        default: false,
      },
    },

    computed: {
      img() {
        return getImg(this.src) as string | ImgData;
      },
    },
  };
</script>

<template>
  <div class="imgBox">
    <img
      v-if="typeof img === 'string'"
      :src="img"
      v-bind="$attrs"
      :class="{ zoom: zoomOnHover }"
    />
    <responsive-image
      v-else
      :src="img"
      v-bind="$attrs"
      :class="{ zoom: zoomOnHover }"
    />
  </div>
</template>

<style>
  .imgBox {
    /* now a container for the image */
    display: inline-block; /* shrink wrap to image */
    overflow: hidden; /* hide the excess */
  }
  .imgBox .zoom {
    display: block; /* no whitespace */
    transition: 0.3s ease-in-out;
  }
  .imgBox:hover .zoom {
    transform: scale(1.025);
    filter: brightness(85%);
  }
</style>
