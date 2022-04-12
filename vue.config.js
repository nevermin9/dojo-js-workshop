const { defineConfig } = require("@vue/cli-service")
const resolve = require("path").resolve;

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: "@import \"~@/styles/lib\";",
            },
        },
    },
    pwa: {
        themeColor: "#ffd600",
    }
});
