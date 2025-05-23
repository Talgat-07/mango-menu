import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    {
      name: "suppress-well-known-errors",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith("/.well-know")) {
            res.statusCode = 404;
            res.end();

            return;
          }
          next();
        });
      },
    },
  ],
});
