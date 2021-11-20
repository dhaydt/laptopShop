<template>
  <div>
    admin pages
    <b-button to="/">Home</b-button>
    <b-button @click="logout">logout</b-button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.check();

    console.log("admin", this.$auth.$state.user);
  },

  methods: {
    logout() {
      this.$auth.logout();
      console.log("logout", this.$auth.$state.user);
      this.check();
    },

    check() {
      var auth = this.$auth.$state.user;
      if (!auth) {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
