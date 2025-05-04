export const routes = [
  {
    path: "/home/:filter?",
    component: () => import("./views/Home.vue"),
    alias: "/",
    name: "home",
  },
  {
    path: "/about",
    component: () => import("./views/About.vue"),
    name: "about",
    meta: { titleKey: "header:about", i18nextNs: ["about"] },
  },
  {
    path: "/fusselbrie-kabelsalat",
    component: () => import("./views/FusselbrieKabelsalat.vue"),
    name: "fusselbriekabelsalat",
    meta: {
      titleKey: "fusselbrie-kabelsalat:title",
      i18nextNs: ["fusselbrie-kabelsalat"],
    },
  },
  {
    path: "/linokalender",
    component: () => import("./views/Linokalender.vue"),
    name: "linokalender",
    meta: { titleKey: "linokalender:title", i18nextNs: ["linokalender"] },
  },
  {
    path: "/wellig-dellig",
    component: () => import("./views/WelligDellig.vue"),
    name: "welligdellig",
    meta: { titleKey: "wellig-dellig:title", i18nextNs: ["wellig-dellig"] },
  },
  {
    path: "/wildwuchs",
    component: () => import("./views/Wildwuchs.vue"),
    name: "wildwuchs",
    meta: { titleKey: "wildwuchs:title", i18nextNs: ["wildwuchs"] },
  },
  {
    path: "/wimmelbild",
    component: () => import("./views/Wimmelbild.vue"),
    name: "wimmelbild",
    meta: { titleKey: "wimmelbild:title", i18nextNs: ["wimmelbild"] },
  },
  {
    path: "/postkarten",
    component: () => import("./views/Postkarten.vue"),
    name: "postkarten",
    meta: { titleKey: "postkarten:title", i18nextNs: ["postkarten"] },
  },
  {
    path: "/lotties",
    component: () => import("./views/Lotties.vue"),
    name: "lotties",
    meta: { titleKey: "lotties:title", i18nextNs: ["lotties"] },
  },
  {
    name: "imprint",
    path: "/impressum",
    alias: "/imprint",
    component: () => import("./views/Imprint.vue"),
    meta: { titleKey: "imprint:title", i18nextNs: ["imprint"] },
  },
  {
    path: "/kaffeeverpackung",
    component: () => import("./views/Kaffeeverpackung.vue"),
    name: "kaffeeverpackung",
    meta: { titleKey: "kaffeeverpackung:title", i18nextNs: ["kaffeeverpackung"] },
  },
  {
    path: "/speisekarte",
    component: () => import("./views/Speisekarte.vue"),
    name: "speisekarte",
    meta: { titleKey: "speisekarte:title", i18nextNs: ["speisekarte"] },
  },
];
