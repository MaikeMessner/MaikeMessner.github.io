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
          <h1 v-if="headlineKey">
            <span
              v-for="(item, index) in $t(headlineKey, {
                returnObjects: true,
              })"
              :key="index"
              >{{ item }}<br
            /></span>
          </h1>
          <template v-if="textKey">
            <p
              v-for="(item, index) in $t(textKey, {
                returnObjects: true,
              })"
              :key="index"
            >
              <template v-if="Array.isArray(item)">
                <template
                  v-for="(subitem, subindex) in item"
                  :key="subindex"
                >
                  <br v-if="subindex !== 0" />{{ subitem }}
                </template>
              </template>
              <template v-else>{{ item }}</template>
            </p>
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
  export default {
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
