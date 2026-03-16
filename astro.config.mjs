import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: process.env.SITE ?? "https://ivanzuluaga.com",
  vite: {
    ssr: {
      noExternal: ["@astrojs/tailwind"],
    },
  },
});
