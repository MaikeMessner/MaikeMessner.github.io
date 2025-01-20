<script lang="ts">
  import { useImage } from "@vueuse/core";

  export default {
    name: "LoadingPlaceholderImg",
    inheritAttrs: false,

    props: {
      src: String(""),
      loadingSrc: String(""),
    },

    data() {
      return {
        isLoading: false as boolean,
      };
    },

    mounted() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { isLoading } = useImage({ src: this.isLoading });
      this.isLoading = isLoading;
    },
  };
</script>

<template>
  <img
    :src="isLoading ? loadingSrc || src : src"
    v-bind="$attrs"
  />
</template>
