<template>
  <div>
    <!-- ***** Home Parallax Start ***** -->
    <section class="mini" id="work-process">
      <div class="mini-content">
        <div class="container">
          <div class="row">
            <div class="offset-lg-3 col-lg-6">
              <div class="info">
                <h1>Katalog Kami</h1>
                <p>
                  Aenean nec tempor metus. Maecenas ligula dolor, commodo in
                  imperdiet interdum, vehicula ut ex. Donec ante diam.
                </p>
              </div>
            </div>
          </div>

          <!-- ***** Mini Box Start ***** -->
          <div class="row katalog" v-for="(g, i) in group" :key="i">
            <b-col sm="12" class="group-header">
              <h4>{{ g.title }}</h4>
            </b-col>
            <b-row class="view-flick" no-gutters>
              <b-row class="navFlick justify-content-end">
                <b-col
                  sm="3"
                  md="2"
                  class="
                    d-flex
                    naviFlick
                    justify-content-around
                    align-items-center
                  "
                >
                  <b-button variant="success" @click="prevBtn(i)" class="btnNav"
                    ><font-awesome-icon :icon="['fas', 'chevron-left']" />
                  </b-button>
                  <b-button variant="success" @click="nextBtn(i)" class="btnNav"
                    ><font-awesome-icon :icon="['fas', 'chevron-right']"
                  /></b-button>
                </b-col>
              </b-row>
              <div class="wrapper flicking-wrap container mt-3 w-100">
                <Flicking
                  ref="flick"
                  :options="{
                    align: 'next',
                    defaultIndex: 0,
                    circular: true,
                    duration: 700,
                  }"
                >
                  <div
                    class="cardSlider item mr-5 cont-flicking"
                    v-for="(slide, i) in catalog"
                    :key="i"
                  >
                    <!-- <b-card class="inner-border text-center sliderCard" no-body> -->
                    <div class="mini-box amodal h-100">
                      <b-img
                        :src="slide.img"
                        height="74"
                        class="mx-auto"
                      ></b-img>
                      <b-col sm="12" class="mt-4 text-card">
                        <strong>{{ slide.merk }}</strong>
                        <span>{{ slide.seri }}</span>
                        <a href="" class="main-button-slider view"
                          >Lihat Deatil</a
                        >
                      </b-col>
                    </div>
                    <!-- </b-card> -->
                  </div>
                </Flicking>
              </div>
            </b-row>
          </div>
          <!-- ***** Mini Box End ***** -->
        </div>
      </div>
    </section>
    <!-- ***** Home Parallax End ***** -->
  </div>
</template>

<script>
import { FlickingError, ERROR_CODE } from "@egjs/flicking";
export default {
  data() {
    return {
      group: [
        { title: "Laptop Gaming" },
        { title: "Laptop Bisnis" },
        { title: "Laptop Sekolah" },
      ],
      catalog: [
        {
          group: "Gaming",
          merk: "ASUS",
          seri: "ROG Nvidia Intel core i5",
          img: "images/rog.jpg",
        },
        {
          group: "Gaming",
          merk: "Acer",
          seri: "ROG Nvidia Intel core i5",
          img: "images/rog5.jpg",
        },
        {
          group: "Gaming",
          merk: "MSI",
          seri: "ROG Nvidia Intel core i5",
          img: "images/rog2.jpg",
        },
        {
          group: "Gaming",
          merk: "HP",
          seri: "ROG Nvidia Intel core i5",
          img: "images/rog3.jpg",
        },
        {
          group: "Gaming",
          merk: "DELL",
          seri: "ROG Nvidia Intel core i5",
          img: "images/rog4.jpg",
        },
      ],
    };
  },

  methods: {
    modal(val) {
      this.data = val;
      this.$refs["my-modal"].show();
    },

    async nextBtn(i) {
      // console.log("ref", this.$refs.flick[i]);
      try {
        var index = i;
        await this.$refs.flick[index].next();
      } catch (err) {
        if (err instanceof FlickingError) {
          if (err.code === ERROR_CODE.ANIMATION_ALREADY_PLAYING) {
            console.log("Animation is already playing!");
          } else if (err.code === ERROR_CODE.ANIMATION_INTERRUPTED) {
            console.log("Animation is interrupted by user.");
          }
        }
      }
      // console.log("flick", this.$refs.flicking);
    },
    async prevBtn(i) {
      // console.log("ref", this.$refs.flick[i]);
      try {
        var index = i;
        await this.$refs.flick[index].prev();
      } catch (err) {
        if (err instanceof FlickingError) {
          if (err.code === ERROR_CODE.ANIMATION_ALREADY_PLAYING) {
            console.log("Animation is already playing!");
          } else if (err.code === ERROR_CODE.ANIMATION_INTERRUPTED) {
            console.log("Animation is interrupted by user.");
          }
        }
      }
    },
  },
};
</script>
<style lang="scss">
.flicking-camera {
  display: flex;
}
</style>
<style lang="scss" scoped>
.view-flick {
  position: relative;

  .naviFlick {
    // position: relative;
    position: absolute;
    top: -35px;
    z-index: 3;
    right: 5%;
    .btnNav {
      border-radius: 50%;
      background-color: $second-color;
      border: 1px solid $second-color;
      color: #fff;
      font-weight: bold;
    }

    .btnNav:hover {
      background-color: $main-color;
      border: 1px solid $second-color;
    }
  }

  .flicking-wrap {
    overflow-x: hidden;

    .cont-flicking {
      width: 500px;
      margin-top: 20px;

      .text-card {
        height: 150px;
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}

.katalog {
  margin-bottom: 100px;
}

.group-header {
  padding: 0;
  h4 {
    color: white;
    padding: 0 0 5px 0;
    font-weight: 800;
    letter-spacing: 2px;
  }
}

.view {
  text-transform: capitalize;
  padding: 6px 10px;
}
</style>
