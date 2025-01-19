import { useTitle } from "@vueuse/core";
import { t } from "i18next";
import { reactive, watch } from "vue";

const titleInfo = reactive({
  titleKey: undefined as string | undefined,
  title: undefined as string | undefined,
});

const title = useTitle("Maike Meßner");

const setTitle = () => {
  const prefix = titleInfo.titleKey ? t(titleInfo.titleKey) : titleInfo.title;
  const newTitle = prefix ? `${prefix} ✦ Maike Meßner` : "Maike Meßner";
  title.value = newTitle;
};

watch(titleInfo, setTitle);

export { titleInfo, title, setTitle };
