<template>
  <section id="ourBlog">
    <BorderContainer
      :theme="'light'"
      style="z-index: -1"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div class="container-custom">
      <div class="row">
        <div class="col-12 col-lg-6 left">
          <div class="d-flex flex-column justify-content-start h-100">
            <SectionNumberComponent
              id="sectionNumberOurBlog"
              number="11 / 11"
              section-name="Our Blog"
              color="#000000"
            />
            <h2 class="mb-0">Our Blog</h2>
            <p class="open-reg-35">
              The success of our clients is a big part of who we are and how we
              believe in our values. Their journey becomes our story of passion
              and persistence.
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-6 right">
          <div class="justify-content-center">
            <Carousel ref="wrapperCarousel" v-model="currentSlide">
              <Slide v-for="slide in 3" :key="slide">
                <div class="card-carousel">
                  <div class="card-head position-relative">
                    <img
                      src="@/assets/images/blog/ilen.jpg"
                      class="card-img-top"
                      alt="responsive"
                    />
                    <div class="action-carousel-mobile">
                      <button
                        class="prev"
                        :disabled="currentSlide == 0"
                        @click="wrapperCarousel.prev"
                      >
                        <img
                          src="@/assets/images/icons/chevron-left.png"
                          alt="icon"
                        />
                      </button>
                      <div
                        style="border-left: 1px solid #f3f3f3; height: 100%"
                      ></div>
                      <button
                        class="next"
                        :disabled="currentSlide == totalSlide - 1"
                        @click="wrapperCarousel.next"
                      >
                        <img
                          src="@/assets/images/icons/chevron-right.png"
                          alt="icon"
                        />
                      </button>
                    </div>
                  </div>
                  <div  class="card-carousel-content">
                    <h3 >How Data Could Impact Our Daily Life</h3> 
                    <p class="open-reg-24">
                      Saat membicarakan soal data, apa yang pertama kali
                      terlintas dipikiranmu? <a href="https://teknologicakrainternasional.com/blog/" style="cursor:pointer; text-decoration: none;">Read more...</a>
                    </p>
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>

      <div
        class="wrapper-subscribe d-flex justify-content-between"
        style="margin-bottom: 50px !important"
      >
        <div class="subscribe-form" style="visibility: hidden">
        </div>
        <div class="action-carousel">
          <button
            class="prev"
            :disabled="currentSlide == 0"
            @click="wrapperCarousel.prev"
          >
            <img src="@/assets/images/icons/chevron-left.png" alt="icon" />
          </button>
          <div style="border-left: 1px solid #f3f3f3; height: 100%"></div>
          <button
            class="next"
            :disabled="currentSlide == totalSlide - 1"
            @click="wrapperCarousel.next"
          >
            <img src="@/assets/images/icons/chevron-right.png" alt="icon" />
          </button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <alert />
      </div>
      <div ref="bitrixForm"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import BorderContainer from "@/components/BorderContainer.vue";
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import alert from "@/components/alert.vue";
import Hammer from "hammerjs";
import { onMounted } from "vue";

const props = defineProps({
  sectionsLength: {
    type: Number,
    require: true,
  },
  currentSection: {
    type: Number,
    require: true,
  },
});

const emit = defineEmits(["swipeUp", "swipeDown"]);

const currentSlide = ref(0);
const wrapperCarousel = ref(null);
const totalSlide = ref(null);
const bitrixForm = ref(null);

onMounted(() => {
  var stage = document.getElementById("ourBlog");
  var hammertime = new Hammer.Manager(stage);
  var Swipe = new Hammer.Swipe();
  hammertime.add(Swipe);
  hammertime.on("swipeup", function (ev) {
    emit("swipeUp");
  });
  hammertime.on("swipedown", function (ev) {
    emit("swipeDown");
  });

  totalSlide.value = wrapperCarousel.value.data.slidesCount.value;

  const scriptUrl = "https://cdn.bitrix24.com/b23740419/crm/form/loader_38.js";
  const scriptAttributes = {
    "data-b24-form": "inline/38/l3utar",
    "data-skip-moving": "true",
    async: "true",
  };
  const script = document.createElement("script");
  script.setAttribute("src", scriptUrl);
  Object.keys(scriptAttributes).forEach((key) => {
    script.setAttribute(key, scriptAttributes[key]);
  });
  bitrixForm.value.appendChild(script);
});
</script>

<style lang="scss" scoped>
#ourBlog {
  height: auto;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  position: relative;
  z-index: 2;

  .container-custom {
    padding: 80px 0;
    height: 100%;

    .left div {
      gap: 15px;

      #sectionNumberOurBlog {
        margin: 0 0 15px;
      }
    }

    .carousel__slide {
      padding: 0 20px 50px;
    }

    .card-carousel {
      width: 600px;
      height: auto;
      transition: 0.5s;
      background: #ffffff;
      padding: 20px;

      .card-carousel-content {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin: 20px 0;

        h3 {
          font-size: 25px !important;
        }

        h3,
        p {
          text-align: left;
        }

        p {
          color: #b8bdc6;
        }
      }

      .action-carousel-mobile {
        position: absolute;
        right: 10px;
        bottom: 10px;
        display: none;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        width: 150px;
        height: 60px;
        background-color: white;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);

        button.prev,
        button.next {
          width: 50px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          border: none;
          outline: none;
        }

        button[disabled] {
          cursor: not-allowed;
        }
      }
    }

    .card-carousel:hover {
      box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.05);
    }

    .wrapper-subscribe {
      .subscribe-form {
        display: flex;
        align-items: center;
        padding: 20px;
        width: 930px;
        gap: 15px;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);

        input {
          flex: 1;
          height: 60px;
          font-size: 25px;
          padding: 0 10px 0;
          border: none;
        }

        .button-action {
          width: 180px;
          height: 60px;
          border: none;
          outline: none;
          color: white;
          font-weight: 600;
          transition: 0.5s;
          background: linear-gradient(119.27deg, #e58146 0%, #e09b3d 100%);
        }

        .button-action:hover {
          opacity: 0.9;
          box-shadow: 0px 10px 30px rgba(231, 132, 72, 0.45);
        }
      }

      .action-carousel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        width: 200px;
        height: auto;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);

        button.prev,
        button.next {
          width: 60px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          border: none;
          outline: none;
        }

        button[disabled] {
          cursor: not-allowed;
        }
      }
    }
  }
}

@media screen and (max-width: 1110px) {
  #ourBlog {
    .container-custom .open-reg-35 {
      font-size: 32px !important;
    }
  }
}

@media screen and (max-width: 991px) {
  #ourBlog {
    .container-custom {
      .right {
        margin: 15px 0 0;

        .card-carousel {
          position: relative;

          .action-carousel-mobile {
            display: flex !important;
          }
        }
      }

      .action-carousel {
        display: none !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #ourBlog {
    padding: 0 30px;

    .container-custom {
      .left {
        h2 {
          font-size: 40px !important;
        }

        .open-reg-35 {
          font-size: 24px !important;
        }
      }
    }
  }
}

@media screen and (max-width: 560px) {
  #ourBlog {
    .container-custom {
      .left .open-reg-35 {
        color: #b8bdc6;
      }

      .card-carousel {
        p {
          color: #000000 !important;
        }

        .action-carousel-mobile {
          padding: 7px 0;
          width: 100px;
          height: 40px !important;

          button img {
            width: 10px;
          }
        }
      }

      .wrapper-subscribe .subscribe-form {
        width: 100%;
        padding: 15px;

        input {
          flex: 1;
          height: 40px;
          font-size: 15px;
          padding: 0 10px 0;
          border: none;
        }

        .button-action {
          width: max-content;
          padding: 0 10px;
          height: 40px;
        }
      }
    }
  }
}

@media screen and (max-width: 530px) {
  #ourBlog {
    .container-custom {
      .left {
        .open-reg-35 {
          font-size: 20px !important;
          line-height: 1.6;
        }
      }

      .right {
        .open-reg-24 {
          font-size: 20px !important;
          line-height: 1.6;
        }
      }
    }
  }
}

@media screen and (max-width: 425px) {
  #ourBlog {
    .container-custom {
      padding: 40px 0;

      .left {
        div {
          gap: 15px;

          h2 {
            font-size: 28px !important;
          }

          .open-reg-35 {
            margin: -5px 0;
          }
        }
      }

      .left .open-reg-35,
      .right .open-reg-24 {
        line-height: 1.8;
        font-size: 14px !important;
      }

      .right .card-carousel-content h3 {
        font-size: 20px !important;
      }

      .button-action {
        font-size: 14px !important;
      }
    }
  }
}
</style>
