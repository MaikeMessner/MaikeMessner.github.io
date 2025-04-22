<script lang="ts">
  import { useImage } from "@vueuse/core";
  import { watch } from "vue";

  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      loadingSrc: {
        type: String,
        required: false,
        default: "",
      },
      zoomOnHover: {
        type: Boolean,
        required: false,
        default: false,
      },
      height: {
        type: Number,
        required: false,
        default: undefined,
      },
      width: {
        type: Number,
        required: false,
        default: undefined,
      },
    },

    data() {
      return {
        isLoading: false as boolean,
      };
    },

    created() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const { isLoading } = useImage({ src: this.$props.src });
      watch(
        () => isLoading.value,
        value => (this.isLoading = value),
      );
    },
  };
</script>

<template>
  <div class="imgBox">
    <img
      :src="isLoading ? loadingSrc || src : src"
      v-bind="$attrs"
      :class="{ zoom: zoomOnHover }"
      :height="height"
      :width="width"
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
