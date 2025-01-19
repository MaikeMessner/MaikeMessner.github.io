import { Directive } from "vue";

const vHtmlSlot: Directive<Element, string> = {
  created(el, binding) {
    el.slot = binding.value;
  },

  updated(el, binding) {
    el.slot = binding.value;
  },
};

export default vHtmlSlot;
