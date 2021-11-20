<template>
  <div>
    <!-- ***** Features Small Start ***** -->
    <!-- <section class="section home-feature">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-12"
                v-for="(f, i) in feature"
                :key="i"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
              >
                <div class="features-small-item">
                  <div class="icon">
                    <i><img :src="f.img" alt="" /></i>
                  </div>
                  <h5 class="features-title">{{ f.title }}</h5>
                  <p>
                    {{ f.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- ***** Features Small End ***** -->

    <!-- ***** Features Big Item Start ***** -->
    <section class="section padding-top-70 padding-bottom-0" id="features">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 col-md-12 col-sm-12 align-self-center"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <img
              src="assets/images/left-image.png"
              class="rounded img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
          <div class="col-lg-1"></div>
          <div
            class="
              col-lg-6 col-md-12 col-sm-12
              align-self-center
              mobile-top-fix
            "
          >
            <div class="left-heading">
              <h2 class="section-title">Let’s discuss about you project</h2>
            </div>
            <div class="left-text">
              <p>
                Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
                blandit, at finibus leo efficitur. Nam gravida purus non sapien
                auctor, ut aliquam magna ullamcorper.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="hr"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- ***** Features Big Item End ***** -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      feature: [
        {
          title: "Modern Strategy",
          content:
            "Customize anything in this template to fit your website needs",
          img: "assets/images/featured-item-01.png",
        },
        {
          title: "Best Relationship",
          content: "Contact us immediately if you have a question in mind",
          img: "assets/images/featured-item-01.png",
        },
        {
          title: "Ultimate Marketing",
          content:
            "You just need to tell your friends about our free templates",
          img: "assets/images/featured-item-01.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
