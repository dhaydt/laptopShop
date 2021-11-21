<template>
  <div class="Root">
    <!-- ***** Preloader Start ***** -->
    <div id="preloader" v-if="preloader">
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
    <Process></Process>
    <Products></Products>
    <Counter></Counter>
    <Testimoni></Testimoni>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Contact from "../components/home/Contact";
import Counter from "../components/home/Counter";
import Process from "../components/home/Process";
import Testimoni from "../components/home/Testimoni";
import Products from "../components/home/Products";
import Footer from "../components/home/Footer";
import Feature from "../components/home/Feature";
import Jumbotron from "../components/home/Jumbotron";
import Navbar from "../components/partials/Navbar";
export default {
  data() {
    return {
      preloader: true,
    };
  },

  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "Asus seken",
          name: "Asus seken",
          content: "Asus bekas dan asus seken dengan kualitas terbaik",
        },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description,
        },
      ],
    };
  },

  mounted() {
    this.preloader = false;
  },
  components: {
    Contact,
    Counter,
    Process,
    Testimoni,
    Products,
    Footer,
    Feature,
    Jumbotron,
    Navbar,
  },
};
</script>
