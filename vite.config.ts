import { execSync } from "child_process";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
const commitHash = execSync("git rev-parse --short HEAD").toString().trim();
const stringifiedCommitHash = JSON.stringify(commitHash);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ["src/assets/**/*"],
  define: {
    APP_VERSION: stringifiedCommitHash,
    COMMIT_HASH: stringifiedCommitHash,
  },
});
