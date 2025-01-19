<script>
  import { RouterLink } from "vue-router";

  export default {
    name: "ButtonRouterLink",
    inheritAttrs: false,

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    props: {
      // add @ts-ignore if using TypeScript
      ...RouterLink.props,
      inactiveClass: String(""),
    },
  };
</script>

<template>
  <RouterLink
    v-slot="{ isActive, href, navigate }"
    v-bind="$props"
    custom
  >
    <button
      v-bind="$attrs"
      :href="href"
      :class="isActive ? activeClass : inactiveClass"
      @click="navigate"
    >
      <slot />
    </button>
  </RouterLink>
</template>
