import { execSync } from "child_process";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { setupPlugins } from "@responsive-image/vite-plugin";

const commitHash = execSync("git rev-parse --short HEAD").toString().trim();
const stringifiedCommitHash = JSON.stringify(commitHash);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    setupPlugins({
      include: /^[^?]+\.(jpg|jpeg|png)\?.*responsive.*$/i,
      styles: "inline",
      lqip: { type: "thumbhash" },
    }),
  ],
  assetsInclude: ["src/assets/**/*"],
  define: {
    APP_VERSION: stringifiedCommitHash,
    COMMIT_HASH: stringifiedCommitHash,
  },
});
