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
  <img
    :src="isLoading ? loadingSrc || src : src"
    v-bind="$attrs"
  />
</template>
