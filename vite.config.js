// import { resolve } from "path";
// import { defineConfig } from "vite";

// export default defineConfig({
//   root: "src/",

//   build: {
//     outDir: "../dist",
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, "src/index.html"),
//         cart: resolve(__dirname, "src/cart/index.html"),
//         product: resolve(__dirname, "src/checkout/index.html")
//       },
//     },
//   },
// });

import { resolve, dirname } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url"; // Necesario para usar __dirname en ESM

// Simular __dirname en ESM
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        checkedout: resolve(__dirname, "src/checkout/success.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
        listing: resolve(__dirname, "src/product-listing/index.html"),
      },
    },
  },
});

