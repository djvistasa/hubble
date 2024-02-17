import react from "@vitejs/plugin-react";
import path from "path";
import macrosPlugin from "vite-plugin-babel-macros";
import svgr from "vite-plugin-svgr";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), macrosPlugin(), svgr()],
  assetsInclude: ["**/*.svg", "**/*.JPG"],
  test: {
    watch: false,
    globals: true,
    alias: {
      "@assets": path.resolve(__dirname, "./src/common/assets"),
      "@components": path.resolve(__dirname, "./src/common/components"),
      "@hooks": path.resolve(__dirname, "./src/common/hooks"),
      "@stores": path.resolve(__dirname, "./src/common/stores"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@pages": path.resolve(__dirname, "./src/common/pages"),
      "@types": path.resolve(__dirname, "./src/common/types"),
      "@utils": path.resolve(__dirname, "./src/common/utils"),
      "@theme": path.resolve(__dirname, "./src/common/theme"),
      "@routes": path.resolve(__dirname, "./src/common/routes"),
      "@globalStyles": path.resolve(
        __dirname,
        "./src/common/theme/globalStyles"
      ),
    },
    exclude: [...configDefaults.exclude],
    environment: "happy-dom",
    setupFiles: ["./setupTests.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        "src/utils/**.ts",
        "src/routes/index.tsx",
        "src/common/theme/**.ts",
        "src/common/hooks/**",
        "src/declarations/**",
        "src/common/types/**",
        "src/common/theme/globalStyles/**",
        "src/common/components/**/styles.ts",
        "src/common/components/**/types.ts",
        "src/common/components/**/types.ts",
        "src/common/stores/**/constants.ts",
        "src/common/stores/**/index.ts",
        "src/common/stores/**/types.ts",
        "src/features/**/components/**/types.ts",
        "src/features/**/components/**/styles.ts",
        "src/features/**/hooks/**/types.ts",
        "src/features/**/types/index.ts",
        "src/features/**/hooks/**/types.ts",
        "src/features/**/hooks/**/constants.ts",
        "src/features/**/pages/**/constants.ts",
        "src/features/**/stores/**/constants.ts",
        "src/features/**/stores/**/types.ts",
        "src/features/**/pages/**/index.tsx",
        "**/node_modules/**",
        "**/scaffolding/**",
        ".eslintrc.cjs",
        "prettierrc.js",
        "vite.config.ts",
        "vitest.config.ts",
        "src/main.tsx",
        "setupTests.ts",
        "src/vite-env.d.ts",
      ],
      branches: 80,
      functions: 80,
      statements: 80,
      lines: 80,
    },
  },
});
