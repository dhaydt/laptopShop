<template>
  <div class="dashnav">
    <nav
      class="
        navbar
        default-layout
        col-lg-12 col-12
        p-0
        fixed-top
        d-flex
        align-items-top
        flex-row
      "
    >
      <div
        class="
          text-center
          navbar-brand-wrapper
          d-flex
          align-items-center
          justify-content-start
        "
      >
        <div class="me-3">
          <!-- <button
            class="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-bs-toggle="minimize"
          >
            <span class="icon-menu"></span>
          </button> -->
        </div>
        <div>
          <a class="navbar-brand brand-logo" href="/">
            <img src="~/assets/admin/images/logo.svg" alt="logo" />
          </a>
          <a class="navbar-brand brand-logo-mini" href="/">
            <img src="~/assets/admin/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-top">
        <ul class="navbar-nav">
          <li class="nav-item font-weight-semibold d-none d-lg-block ms-0">
            <h1 class="welcome-text">
              Welcome, <span class="text-black fw-bold">John Doe</span>
            </h1>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link count-indicator"
              id="countDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="icon-bell"></i>
              <span class="count"></span>
            </a>
            <div
              class="
                dropdown-menu dropdown-menu-right
                navbar-dropdown
                preview-list
                pb-0
              "
              aria-labelledby="countDropdown"
            >
              <a class="dropdown-item py-3">
                <p class="mb-0 font-weight-medium float-left">
                  You have 7 unread mails
                </p>
                <span class="badge badge-pill badge-primary float-right"
                  >View all</span
                >
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img
                    src="~/assets/admin/images/faces/face10.jpg"
                    alt="image"
                    class="img-sm profile-pic"
                  />
                </div>
                <div class="preview-item-content flex-grow py-2">
                  <p
                    class="
                      preview-subject
                      ellipsis
                      font-weight-medium
                      text-dark
                    "
                  >
                    Marian Garner
                  </p>
                  <p class="fw-light small-text mb-0">
                    The meeting is cancelled
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img
                    src="~/assets/admin/images/faces/face12.jpg"
                    alt="image"
                    class="img-sm profile-pic"
                  />
                </div>
                <div class="preview-item-content flex-grow py-2">
                  <p
                    class="
                      preview-subject
                      ellipsis
                      font-weight-medium
                      text-dark
                    "
                  >
                    David Grey
                  </p>
                  <p class="fw-light small-text mb-0">
                    The meeting is cancelled
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img
                    src="~/assets/admin/images/faces/face1.jpg"
                    alt="image"
                    class="img-sm profile-pic"
                  />
                </div>
                <div class="preview-item-content flex-grow py-2">
                  <p
                    class="
                      preview-subject
                      ellipsis
                      font-weight-medium
                      text-dark
                    "
                  >
                    Travis Jenkins
                  </p>
                  <p class="fw-light small-text mb-0">
                    The meeting is cancelled
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li class="nav-item dropdown d-none d-lg-block user-dropdown">
            <a
              class="nav-link"
              id="UserDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                class="img-xs rounded-circle"
                src="~/assets/admin/images/faces/face8.jpg"
                alt="Profile image"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="UserDropdown"
            >
              <div class="dropdown-header text-center">
                <img
                  class="img-md rounded-circle"
                  src="~/assets/admin/images/faces/face8.jpg"
                  alt="Profile image"
                />
                <p class="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                <p class="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
              </div>
              <a class="dropdown-item"
                ><i
                  class="
                    dropdown-item-icon
                    mdi mdi-account-outline
                    text-primary
                    me-2
                  "
                ></i>
                My Profile
                <span class="badge badge-pill badge-danger">1</span></a
              >
              <a class="dropdown-item" @click="logout"
                ><i
                  class="dropdown-item-icon mdi mdi-power text-primary me-2"
                ></i
                >Sign Out</a
              >
            </div>
          </li>
        </ul>
        <button
          class="
            navbar-toggler navbar-toggler-right
            d-lg-none
            align-self-center
          "
          type="button"
          data-bs-toggle="offcanvas"
        >
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
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

<style lang="scss" scoped>
.nav-item.font-weight-semibold.d-none.d-lg-block .welcome-text {
  font-size: 20px;
}
</style>
