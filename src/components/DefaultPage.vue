<template>
  <div class="container-fluid containerpadding">
    <div
      class="row"
      :class="additionalRowClass"
    >
      <div :class="leftContainerClass">
        <slot name="left"></slot>
      </div>

      <div :class="rightContainerClass + ' ' + additionalRightContainerClass">
        <div
          v-if="headlineKey || textKey || $slots.stickyRight"
          class="stickytext"
        >
          <template v-if="headlineKey">
            <SingleOrMultilineText
              :content="[
                $t(headlineKey, {
                  returnObjects: true,
                }),
              ]"
              paragraph-component="h1"
              subparagraph-component="span"
              :include-linebreak="true"
            ></SingleOrMultilineText>
          </template>
          <template v-if="textKey">
            <SingleOrMultilineText
              :content="
                $t(textKey, {
                  returnObjects: true,
                })
              "
              paragraph-component="p"
              subparagraph-component="span"
              :include-linebreak="true"
            ></SingleOrMultilineText>
          </template>
          <slot name="stickyRight"></slot>
        </div>
        <slot
          v-if="$slots.right"
          name="right"
        ></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import SingleOrMultilineText from "./SingleOrMultilineText.vue";

  export default {
    components: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      SingleOrMultilineText,
    },
    props: {
      headlineKey: {
        type: String,
        optional: true,
        default: undefined,
      },
      textKey: {
        type: String,
        optional: true,
        default: undefined,
      },
      leftContainerClass: {
        type: String,
        optional: true,
        default: "col-sm-6 col-lg-8 mb-4",
      },
      rightContainerClass: {
        type: String,
        optional: true,
        default: "col-sm-6 col-lg-4 mb-4",
      },
      additionalRightContainerClass: {
        type: String,
        optional: true,
        default: "",
      },
      additionalRowClass: {
        type: String,
        optional: true,
        default: "justify-content-between",
      },
    },
  };
</script>
