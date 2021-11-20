<template>
  <div class="Root">
    <!-- ***** Preloader Start ***** -->
    <div id="preloader">
      <div class="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- ***** Preloader End ***** -->
    <Navbar></Navbar>
    <Jumbotron></Jumbotron>
    <Feature></Feature>
    <Testimoni></Testimoni>
    <Products></Products>
    <Footer></Footer>
  </div>
</template>

<script>
import Testimoni from "../components/home/Testimoni";
import Products from "../components/home/Products";
import Footer from "../components/home/Footer";
import Feature from "../components/home/Feature";
import Jumbotron from "../components/home/Jumbotron";
import Navbar from "../components/partials/Navbar";
export default {
  components: {
    Testimoni,
    Products,
    Footer,
    Feature,
    Jumbotron,
    Navbar,
  },
};
</script>
