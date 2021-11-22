<template>
  <div>
    <NavAdmin></NavAdmin>
    <div class="container-panel">
      <h1>Welcome admin</h1>
    </div>
  </div>
</template>

<script>
import NavAdmin from "../../components/partials/NavAdmin";
export default {
  components: { NavAdmin },
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

<style lang="scss">
.container-panel {
  top: 31%;
  left: 18%;
  width: 80%;
  position: absolute;
}
</style>
