import { Directive } from "vue";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const vMasonryInstanceKey = Symbol("masonry-instance");
export interface ImagesLoadedModeConfig {
  imagesLoadedMode?: "disabled" | "onProgress" | "onFinish";
}

const vMasonry: Directive<
  Element & { [vMasonryInstanceKey]: Masonry | undefined },
  Masonry.Options & ImagesLoadedModeConfig
> = {
  mounted(el, binding) {
    const masonry = new Masonry(el, binding.value);
    el[vMasonryInstanceKey] = masonry;

    const imagesLoadedMode = binding.value.imagesLoadedMode ?? "disabled";

    if (imagesLoadedMode !== "disabled") {
      const imagesLoadedInstance = imagesLoaded(el, () => masonry.layout?.());
      if (imagesLoadedMode === "onProgress") {
        imagesLoadedInstance.on("progress", () => masonry.layout?.());
      }
    }
  },

  updated(el, binding) {
    el[vMasonryInstanceKey]?.option?.(binding.value);
    el[vMasonryInstanceKey]?.reloadItems?.();
    el[vMasonryInstanceKey]?.layout?.();
  },

  beforeUnmount(el) {
    el[vMasonryInstanceKey]?.destroy?.();
  },
};

export { vMasonryInstanceKey };
export default vMasonry;
