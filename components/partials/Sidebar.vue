<template>
  <div>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="/">
            <i class="mdi mdi-grid-large menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </a>
        </li>
        <li class="nav-item nav-category">Users</li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <i class="menu-icon mdi mdi-account-multiple-outline"></i>
            <span class="menu-title">Users</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/admin/userList"
                  >List User</nuxt-link
                >
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#catalog"
            aria-expanded="false"
            aria-controls="catalog"
          >
            <i class="menu-icon mdi mdi-floor-plan"></i>
            <span class="menu-title">Catalog</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="catalog">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/admin/catList"
                  >Catalog List</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/admin/productList"
                  >Product List</nuxt-link
                >
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item nav-category">pages</li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i class="menu-icon mdi mdi-account-circle-outline"></i>
            <span class="menu-title">User Pages</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="auth">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <a class="nav-link" href="pages/samples/login.html"> Login </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
}
</style>
