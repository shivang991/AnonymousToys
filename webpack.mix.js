const mix = require("laravel-mix");
const path = require("path");

require("dotenv").config();

mix.js("resources/js/app.js", "public/js")
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "resources", "js"),
            },
        },
    })
    .vue()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .css("node_modules/leaflet/dist/leaflet.css","public/css")
    .setPublicPath("public");
