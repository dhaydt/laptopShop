<template>
  <section class="container">
    <div>
      <b-form>
        <b-form-group
          description="Let us know your Email."
          label="Enter your Email"
          label-for="username"
        >
          <b-form-input
            id="username"
            v-model="email"
            type="email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          description="Let us know your Password."
          label="Enter your Password"
          label-for="pw"
        >
          <b-form-input id="pw" v-model="password" type="password">
          </b-form-input>
        </b-form-group>
        <b-button-group size="sm">
          <!-- <b-button @click="facebook" variant="outline-success"
              >Facebook</b-button
            > -->
          <b-button @click="login" variant="outline-success">Login</b-button>
          <!-- <b-button @click="google" variant="outline-success"
              >Google</b-button
            > -->
          <b-button @click="logout" variant="outline-success">Logout</b-button>
          <b-button @click="check" variant="outline-success">Check</b-button>
          <b-button to="/callback" variant="outline-success">Callback</b-button>
        </b-button-group>
      </b-form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    this.check();
  },
  watch: {},
  components: {},
  methods: {
    async login() {
      try {
        this.$toast.show("Logging in...", { icon: "fingerprint" });
        let resp = await this.$auth
          .loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .catch((e) => {
            this.$toast.error("Failed Logging In", { icon: "error_outline" });
          });

        this.$auth.setUser(resp.data.user);
        // this.$auth.setStrategy("import");

        console.log(this.$auth.$state.user);
        console.log(resp.data.data);

        if (!this.$auth.$state.user) {
          this.$toast.error("Email or Password wrong", { icon: "error" });
          console.log("fail up");
        } else {
          this.$toast.success("Successfully Logged In", { icon: "done" });
          this.$router.push("/admin");
        }
      } catch (e) {
        console.log("fail bot");
        this.$toast.error("Email or Password wrong", { icon: "error" });
      }
    },
    logout() {
      this.$toast.show("Logging out...", { icon: "fingerprint" });
      this.$auth.logout();
      console.log("logout", this.$auth.$state.user);
    },
    check() {
      if (this.$auth.$state.user) {
        this.$router.push("/admin");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
