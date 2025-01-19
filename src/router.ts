import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from "vue-router";
import { hasLoadedNamespace, loadNamespaces } from "i18next";
import { routes } from "./routes";
import { titleInfo } from "./state/title";

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

export { router };
