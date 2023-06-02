import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig(() => {
  return {
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
        include: [/node_modules/],
      },
      outDir: "build",
    },
    plugins: [
      viteCompression(),
      react(),
      nodePolyfills({
        exclude: [],
        protocolImports: true,
      }),
    ],
    esbuild: {
      loader: "jsx",
      include: /\.jsx?$/,
      exclude: [],
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      jsxInject: `import React from 'react'`,
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
      },
    },
  };
});
