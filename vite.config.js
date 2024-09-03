import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/site/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/assets"),
      "@constants": resolve(__dirname, "src/constants"),
      "@containers": resolve(__dirname, "src/containers"),
      "@pages": resolve(__dirname, "src/pages"),
      "@components": resolve(__dirname, "src/components"),
      "@CustomInfoBox": resolve(__dirname, "src/components/CustomInfoBox"),
      "@RoundedSection": resolve(__dirname, "src/components/RoundedSection"),
      "@InfoBox": resolve(__dirname, "src/components/InfoBox"),
      "@ValueCard": resolve(__dirname, "src/components/ValueCard"),
      "@ValuesCard": resolve(__dirname, "src/components/ValuesCard"),
      "@TasksCard": resolve(__dirname, "src/components/TasksCard"),
    },
  },
});
