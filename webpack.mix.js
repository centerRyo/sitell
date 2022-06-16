const mix = require("laravel-mix");
const path = require("path");

mix.ts("frontend/src/pages/app.tsx", "public/js")
    .sass("frontend/src/styles/app.scss", "public/css")
    .version()
    .webpackConfig({
        resolve: {
            extensions: [
                ".ts",
                ".tsx",
                ".sass",
                ".js",
                ".jsx",
                ".scss",
                ".css",
            ],
            alias: {
                "@": path.resolve(__dirname, "./frontend/src"),
            },
        },
    });
