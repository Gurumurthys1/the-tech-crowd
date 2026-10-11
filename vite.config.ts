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
      // Always use the Vercel Nitro preset for production builds.
      // Vite dev mode doesn't use Nitro at all, so this is safe for local dev.
      nitro: {
        preset: "vercel",
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
