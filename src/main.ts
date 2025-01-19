import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles/bootstrap-overrides.scss";
import "./styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from "vue-router";
import { createApp } from "vue";

import I18NextVue from "i18next-vue";
import i18next, { hasLoadedNamespace, loadNamespaces } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import I18NextChainedBackend from "i18next-chained-backend";
import I18NextLocalStorageBackend from "i18next-localstorage-backend";
import App from "./App.vue";
import { routes } from "./routes";
import vMasonry from "./directives/masonry";
import vHtmlSlot from "./directives/htmlSlot";
import { setTitle, titleInfo } from "./state/title";

// eslint-disable-next-line import/no-named-as-default-member
const i18NextInitialized = i18next
  .use(I18NextChainedBackend)
  .use(I18nextBrowserLanguageDetector)
  .init({
    ns: ["header"],
    supportedLngs: ["de", "en"],
    fallbackLng: "de",
    interpolation: {
      escapeValue: false,
    },
    load: "languageOnly",
    backend: {
      backends: [I18NextLocalStorageBackend, I18NextHttpBackend],
      backendOptions: [
        {
          projectId: "maikesWebsite",
          // eslint-disable-next-line no-undef
          defaultVersion: APP_VERSION,
        },
        {
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
      ],
    },
  });

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to) => {
  await Promise.all(
    ((to.meta.i18nextNs as string[]) || []).map(async (ns) => {
      if (!hasLoadedNamespace(ns)) {
        await loadNamespaces(ns);
      }
    }),
  );
});

router.afterEach((to, _, failure) => {
  if (isNavigationFailure(failure)) {
    titleInfo.title = undefined;
    titleInfo.titleKey = undefined;
  }

  titleInfo.titleKey = (to.meta?.titleKey as string) ?? undefined;
  titleInfo.title = (to.meta?.title as string) ?? undefined;
});

i18NextInitialized
  .then(() => {
    i18next.on("languageChanged", setTitle);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    createApp(App)
      .use(router)
      .use(I18NextVue, { i18next })
      .directive("masonry", vMasonry)
      .directive("html-slot", vHtmlSlot)
      .mount("#app");
  })
  .catch((err) => console.error(err));
