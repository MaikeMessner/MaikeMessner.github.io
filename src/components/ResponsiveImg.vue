<script lang="ts">
  const getImg = <T extends string | ImageData>(img: T) =>
    typeof img === "string" ? new URL(img, import.meta.url).href : img;

  export default {
    props: {
      src: {
        type: [String, ImageData],
        required: true,
      },
      zoomOnHover: {
        type: Boolean,
        required: false,
        default: false,
      },
    },

    data() {
      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        img: getImg(this.$props.src),
      };
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
