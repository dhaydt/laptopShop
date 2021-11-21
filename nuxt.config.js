const main_base_URL = "https://backup.generasiunggul.com";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemlapet: `%s -` + "Laptop Second",
    title: "Laptop Seken" || "",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      { name: "format-detection", content: "laptop bekas" },
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
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/fontawesome"],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/toast",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-analytics",
    "nuxt-material-design-icons",
  ],

  sitemap: {
    hostname: main_base_URL,
  },
  env: {
    main_base_URL,
  },

  googleAnalytics: {
    id: "UA-213461095-1",
    dev: false,
  },

  auth: {
    // Options
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/login",
            method: "post",
            propertyName: "data",
          },
          logout: false,
          user: { url: "/users", method: "get", property: false },
        },
        tokenRequired: true,
        tokenType: "Bearer",
      },
      // facebook: {
      //   client_id: "your facebook app id",
      //   userinfo_endpoint:
      //     "https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email",
      //   scope: ["public_profile", "email"],
      // },
      // google: {
      //   client_id: "your gcloud oauth app client id",
      // },
    },
  },

  redirect: {
    login: "/?login=1",
    logout: "/",
    user: "/profile",
    // callback: "/",
  },

  toast: {
    position: "top-center",
    duration: 3000,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseUrl: `http://localhost:3000/api`,
    // baseUrl: `http://localhost:3002`,
    baseUrl: `https://api2.generasiunggul.com`,
  },

  loading: {
    name: "chasing-dots",
    color: "#ff5638",
    background: "white",
    height: "4px",
  },
  plugins: [{ src: "./plugins/install", ssr: true }],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        compilerOptions: {
          preserveWhitespace: false,
        },
      },
    },
  },
};
