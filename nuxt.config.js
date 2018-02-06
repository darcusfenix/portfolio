require("dotenv").config()
console.log(process.env)
module.exports = {
    /*
  ** Headers of the page
  */
    head: {
        title: "portafolio",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Nuxt.js project"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    css: ["@darcusfenix/bootstrap-portfolio", "assets/main.css"],
    /*
  ** Customize the progress bar color
  */
    loading: { color: "#3B8070" },
    router: {
        middleware: "stats"
    },
    /*
  ** Build configuration
  */
    build: {
        vendor: ["axios"],
        /*
    ** Run ESLint on save
    */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
            }
        }
    },
    modules: ["@nuxtjs/font-awesome"],
    env: {
        baseUrl: process.env.BASE_URL || "http://localhost:3000"
    }
}
