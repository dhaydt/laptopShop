export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "laptop",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Laptop Second" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "assets/js/jquery-2.1.0.min.js", body: true },
      // Supported since Nuxt 1.0
      { src: "assets/js/popper.js", body: true },
      { src: "assets/js/bootstrap.min.js", body: true },
      { src: "assets/js/scrollreveal.min.js", body: true },
      { src: "assets/js/waypoints.min.js", body: true },
      { src: "assets/js/jquery.counterup.min.js", body: true },
      { src: "assets/js/imgfix.min.js", body: true },
      { src: "assets/js/custom.js", body: true },
    ],
  },

  serverMiddleware: ["~/api/index.js"],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/bootstrap.min.css",
    "~assets/css/font-awesome.css",
    "~assets/css/templatemo-softy-pinko.css",
  ],
  styleResources: {
    scss: ["~assets/scss/main.scss", "~assets/scss/variable.scss"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
