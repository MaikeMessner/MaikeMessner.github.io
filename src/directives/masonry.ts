import { Directive } from "vue";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const vMasonryInstanceKey = Symbol("masonry-instance");

const vMasonry: Directive<
  Element & { [vMasonryInstanceKey]: Masonry | undefined },
  Masonry.Options
> = {
  mounted(el, binding) {
    const masonry = new Masonry(el, binding.value);
    el[vMasonryInstanceKey] = masonry;
    imagesLoaded(el, () => masonry.layout?.());
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
