const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/styles"),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "mixins";
          @import "variables";
        `,
        sassOptions: {
          includePaths: [path.resolve(__dirname, "src/styles")],
        },
      },
    },
  },
};
