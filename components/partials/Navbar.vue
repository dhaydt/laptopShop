<template>
  <div class="head">
    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
      <div class="container">
        <div class="row w-100">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a href="#" class="logo">
                <img src="~assets/images/logo.png" alt="Softy Pinko" />
              </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
              <ul class="nav">
                <li><a href="#welcome" class="active">Home</a></li>
                <li><a href="#features">About</a></li>
                <li><a href="#work-process">Work Process</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <!-- <li><a href="#pricing-plans">Pricing Tables</a></li> -->
                <li><a href="#blog">Products</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
                <li><nuxt-link to="/admin">Panel</nuxt-link></li>
              </ul>
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
              <!-- ***** Menu End ***** -->
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- ***** Header Area End ***** -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
