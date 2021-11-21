<template>
  <div class="logPag">
    <section class="loginPages">
      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <nuxt-link to="/" class="mb-2 back-link">
            <font-awesome-icon
              :icon="['fas', 'chevron-left']"
              class="mr-2"
            ></font-awesome-icon>
            Back
          </nuxt-link>
          <h2 class="mb-4">Admin Area</h2>
          <input v-model="email" type="email" placeholder="email" />
          <input v-model="password" type="password" placeholder="password" />
          <h2>&nbsp;</h2>
          <b-button @click="login" class="px-4 login-btn">Login</b-button>
        </div>
      </div>

      <!-- <div>
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
          <b-button @click="login" variant="outline-success">Login</b-button>
          <b-button @click="logout" variant="outline-success">Logout</b-button>
          <b-button @click="check" variant="outline-success">Check</b-button>
          <b-button to="/callback" variant="outline-success">Callback</b-button>
        </b-button-group>
      </b-form>
    </div> -->
    </section>
  </div>
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
        this.$toast.show("Logging in........", { icon: "fingerprint" });
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
.logPag {
  height: 100vh;
  display: flex;
  background-color: #cfadf3;
}
.loginPages {
  height: 80vh;
  width: 80vw;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 16px 12px 13px -3px rgba(0, 0, 0, 0.56);
  -webkit-box-shadow: 16px 12px 13px -3px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 16px 12px 13px -3px rgba(0, 0, 0, 0.56);
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.container {
  position: absolute;
  width: 100vw;
  height: 100%;
  margin: 0;

  .back-link {
    color: white;
    font-weight: 700;
    transition: 0.3s;
    &:hover {
      color: $second-color;
    }
  }

  &:hover,
  &:active {
    .top,
    .bottom {
      &:before,
      &:after {
        margin-left: 200px;
        transform-origin: -200px 50%;
        transition-delay: 0s;
      }
    }

    .center {
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
}

.top,
.bottom {
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 300vmax;
    height: 200vmax;
    top: 50%;
    left: 50%;
    margin-top: -100vmax;
    transform-origin: 0 50%;
    transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    z-index: 10;
    opacity: 0.65;
    transition-delay: 0.2s;
  }
}

.top {
  &:before {
    transform: rotate(45deg);
    background: $second-color;
  }
  &:after {
    transform: rotate(135deg);
    background: $second-color;
  }
}

.bottom {
  &:before {
    transform: rotate(-45deg);
    background: $main-color;
  }
  &:after {
    transform: rotate(-135deg);
    background: $main-color;
  }
}

.center {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay: 0s;
  color: #333;

  input {
    width: 100%;
    padding: 10px;
    margin: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-family: inherit;
  }

  .login-btn {
    background-color: $second-color;
    border: 2px solid $second-color;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.3s;
    &:hover {
      background-color: $main-color;
      border: 2px solid $main-color;
    }
  }
}
</style>
