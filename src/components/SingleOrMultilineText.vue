<script>
  export default {
    name: "SingleOrMultilineText",
    inheritAttrs: false,

    props: {
      content: String(""),
      paragraphComponent: String("p"),
      subparagraphComponent: String("template"),
      includeLinebreak: Boolean(true),
    },
  };
</script>

<template>
  <template v-if="Array.isArray(content)">
    <component
      :is="paragraphComponent"
      v-for="(paragraph, index) in content"
      :key="index"
    >
      <template v-if="Array.isArray(paragraph)">
        <component
          :is="subparagraphComponent"
          v-for="(subparagraph, subindex) in paragraph"
          :key="subindex"
        >
          <br v-if="includeLinebreak && subindex !== 0" />
          {{ subparagraph }}
        </component>
      </template>
      <component
        :is="subparagraphComponent"
        v-else
        >{{ paragraph }}</component
      >
    </component>
  </template>
  <component
    :is="paragraphComponent"
    v-else
    >{{ content }}</component
  >
</template>
