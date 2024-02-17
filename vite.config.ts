import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
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
  },
  plugins: [react(), macrosPlugin(), svgr()],
});
