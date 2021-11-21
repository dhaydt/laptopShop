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
                <p>Temukan laptop impian anda sesuai kebutuhan bisnis anda</p>
              </div>
            </div>
          </div>

          <!-- ***** Mini Box Start ***** -->
          <div class="row katalog" v-for="(gr, index) in group" :key="index">
            <b-col sm="12" class="group-header">
              <h4>{{ gr.title }}</h4>
            </b-col>
            <b-row class="view-flick" no-gutters>
              <b-row class="navFlick justify-content-end d-none d-md-block">
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
                  <b-button
                    variant="success"
                    @click="prevBtn(index)"
                    class="btnNav"
                    ><font-awesome-icon :icon="['fas', 'chevron-left']" />
                  </b-button>
                  <b-button
                    variant="success"
                    @click="nextBtn(index)"
                    class="btnNav"
                    ><font-awesome-icon :icon="['fas', 'chevron-right']"
                  /></b-button>
                </b-col>
              </b-row>
              <div class="wrapper flicking-wrap mt-3 w-100">
                <Flicking
                  ref="flick"
                  :options="{
                    align: 'prev',
                    defaultIndex: 0,
                    duration: 700,
                    moveType: 'freeScroll',
                    circular: true,
                  }"
                >
                  <div
                    class="card flicking-panel"
                    v-for="(cat, i) in catalog"
                    :key="i"
                  >
                    <img :src="cat.img" class="card__image mt-2" alt="" />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div class="card__header-text">
                          <h3 class="card__title">{{ cat.merk }}</h3>
                          <span class="card__status">available</span>
                        </div>
                      </div>
                      <div class="card-desc">
                        <p class="card__description mb-3">
                          {{ cat.seri }}
                        </p>
                        <a href="#" class="detail-view">Lihat Detail</a>
                      </div>
                    </div>
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
$bg-card: #a56be1;
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  width: 300px;
  height: 322px;
  border-radius: calc(40 * 1px);
  overflow: hidden;
  text-decoration: none;
}

.card__image {
  width: 100%;
  height: auto;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(40 * 1px);
  background-color: $bg-card;
  transform: translateY(100%);
  transition: 0.5s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 1em 1.5em;
  border-radius: calc(40 * 1px) 0 0 0;
  background-color: $bg-card;
  transform: translateY(-100%);
  transition: 0.5s ease-in-out;
}

.card__header-text {
  width: 100%;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 99%;
  right: 0;
  z-index: 1;
}

.card__arc path {
  fill: $bg-card;
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.card__title {
  font-size: 1.3rem;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-size: 0.8em;
  color: #d7bdca;
}

.card__status {
  font-size: 0.8em;
  color: #d7bdca;
  font-weight: 700;
  text-transform: capitalize;
}

.card-desc {
  padding: 0 2em 2em;
  display: flex;
  flex-direction: column;
}
.card__description {
  margin: 0;
  color: #fff;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-transform: capitalize;
  font-weight: 600;
}

a.detail-view {
  font-size: 13px;
  border-radius: 20px;
  font-weight: 700;
  text-transform: capitalize;
  padding: 10px 30px;
  background-color: #ff589e;
  margin: 0 auto;
  color: #fff;
  letter-spacing: 0.25px;
  transition: all 0.3s ease 0s;
}

a.detail-view:hover {
  background-color: #8261ee;
}

@media (max-width: "590px") {
  .group-header {
    margin-left: 20px;
  }
  .view-flick {
    margin: 0 auto;
    .flicking-wrap {
      .flicking-viewport {
        width: 100vw;
      }
    }
  }
}
.view-flick {
  position: relative;
  width: 100%;
  justify-content: center;

  .naviFlick {
    // position: relative;
    position: absolute;
    top: -65px;
    z-index: 3;
    right: 0;
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
    margin: 20px auto;
    .flicking-viewport {
      overflow: hidden;
      width: 100%;
      .flicking-camera {
        display: flex;
        .flicking-panel {
          min-width: 300px;
          margin-right: 40px;
          .card-body {
            padding: 20px 35px;

            a {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}

.mini-content {
  .info {
    h1 {
      font-size: 32px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 4px;
    }
    p {
      margin-bottom: 40px;
      text-transform: capitalize;
      color: #ccb5ff;
      letter-spacing: 1.25px;
      line-height: 26px;
      font-weight: 600;
      font-size: 18px;
    }
  }
}

.katalog {
  margin-bottom: 100px;
}

.group-header {
  padding: 0;
  margin-bottom: 20px;
  h4 {
    color: white;
    padding: 0 0 5px 0;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.69);
  }
}

.view {
  text-transform: capitalize;
  padding: 6px 10px;
}
</style>
