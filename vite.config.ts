import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// NOTE: Do NOT add TanStackRouterVite here — tanstackStart already includes
// the TanStack Router plugin internally. Adding it again causes the
// "TSRSplitComponent is not defined" error due to double plugin registration.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "src/server.ts" },
      // Use Vercel preset when NITRO_PRESET env is set (on Vercel),
      // otherwise fall back to "node" for local dev / other hosts.
      nitro: {
        preset: process.env.VERCEL ? "vercel" : "node",
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
