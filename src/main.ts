import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles/bootstrap-overrides.scss";
import "./styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createApp } from "vue";
import "@responsive-image/wc";

import I18NextVue from "i18next-vue";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import I18NextChainedBackend from "i18next-chained-backend";
import App from "./App.vue";
import vMasonry from "./directives/masonry";
import vHtmlSlot from "./directives/htmlSlot";
import { setTitle } from "./state/title";
import { router } from "./router";

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
      backends: [I18NextHttpBackend],
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
  .catch(err => console.error(err));
