import { startDevServer } from "@cypress/vite-dev-server";

module.exports = (on, config) => {
  on("dev-server:start", (options) =>
    startDevServer({
      options,
      viteConfig: {
        define: {
          // Set process.env and process.argv to avoid errors in @cypress/snapshot
          "process.env": {},
          "process.argv": [""],
        },
      },
    })
  );
  return config;
};
