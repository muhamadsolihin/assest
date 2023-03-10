<template>
  <section id="journey">
    <BorderContainer
      :theme="'light'"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />

    <div id="bgOverlap"></div>

    <div class="container-custom">
      <div id="wrapper" class="row">
        <div class="col-12 order-2 order-xl-1 col-xl-6 left">
          <div
            class="d-flex flex-column justify-content-center align-items-start"
          >
            <SectionNumberComponent
              id="sectionNumberJourney"
              :number="'08 / 11'"
              :section-name="'Your Journey Our Story'"
              :color="'#000000'"
            />
            <h2 style="white-space: pre-line">{{ title }}</h2>
            <p class="open-reg-24">
              The success of our clients is a big part of who we are and how we
              believe in our values. Their journey becomes our story of passion
              and persistence.
            </p>
            <img
              loading="lazy"
              class="pic-weekly-event"
              src="@/assets/images/rndm1.png"
            />
          </div>
        </div>
        <div class="col-12 order-1 order-xl-2 col-xl-6 right">
          <img
            loading="lazy"
            class="pic-ceo"
            src="@/assets/images/pictceo.png"
            alt="ceo-teknologi-cakra-internasional"
          />
          <div class="positioon-relative w-100">
            <img
              loading="lazy"
              class="pic-ceo-small"
              src="@/assets/images/pic-ceo-small.png"
              alt="ceo-teknologi-cakra-internasional"
            />
            <img
              loading="lazy"
              class="shape"
              src="@/assets/images/frame-bottom-left.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Hammer from "hammerjs";
import { onMounted, ref } from "vue";

import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";

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

const imageHover = ref(false);
const title = ref("Your Journey,\n Our Story");

onMounted(() => {
  var stage = document.getElementById("journey");
  var hammertime = new Hammer.Manager(stage);
  var Swipe = new Hammer.Swipe();
  hammertime.add(Swipe);
  hammertime.on("swipeup", function (ev) {
    emit("swipeUp");
  });
  hammertime.on("swipedown", function (ev) {
    emit("swipeDown");
  });

  const currentScreenWidth = window.screen.width;
  if (currentScreenWidth <= 1199) {
    title.value = "Your Journey, Our Story";
  }

  window.addEventListener("resize", () => {
    const currentScreenWidth = window.screen.width;
    if (currentScreenWidth <= 1199) {
      title.value = "Your Journey, Our Story";
    } else {
      title.value = "Your Journey,\n Our Story";
    }
  });
});
</script>

<style lang="scss" scoped>
#journey {
  background-color: white;
  height: 900px;
  width: 100%;
  padding: 0 140px;
  position: relative;
  z-index: 1;

  #bgOverlap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 700px;
    background-color: #eeeaea;
  }

  .container-custom {
    height: 100%;
    padding: 80px 0 0;
    position: relative;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    z-index: 2;

    #sectionNumberJourney {
      margin: 60px 0 20px;
      width: max-content !important;
      height: auto !important;
    }

    #wrapper {
      height: inherit;

      .left {
        height: inherit;

        div {
          height: inherit;

          p.open-reg-24 {
            width: 450px;
          }
        }

        .pic-weekly-event {
          width: 600px;
          height: 350px;
          margin: auto 0 0 0;
          object-fit: contain;
        }
      }

      .right {
        position: relative;
        display: flex;
        align-items: center;

        .pic-ceo {
          width: 700px;
          height: auto;
          position: absolute;
          object-fit: contain;
          top: 0;
          right: -54px;
        }

        .pic-ceo-small {
          display: none;
        }

        .shape {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 1530px) {
  #journey {
    height: 763px;

    #bgOverlap {
      height: 600px;
    }

    .container-custom {
      .left {
        .pic-weekly-event {
          width: 450px !important;
          height: 350px !important;
        }
      }

      .right .pic-ceo {
        right: -45px !important;
        width: 600px !important;
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  #journey {
    height: 730px;

    .container-custom {
      .left {
        .pic-weekly-event {
          width: 400px !important;
          height: 300px !important;
          margin: auto 0 -31px 0 !important;
        }
      }

      .right .pic-ceo {
        right: -40px !important;
        width: 550px !important;
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  #journey {
    #bgOverlap {
      height: 550px !important;
    }

    .container-custom {
      .right .pic-ceo {
        right: -36px !important;
        width: 510px !important;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  #journey {
    height: auto;

    #bgOverlap {
      height: 550px !important;
    }

    .container-custom {
      .left {
        p.open-reg-24 {
          width: 100% !important;
        }

        .pic-weekly-event {
          width: 100% !important;
          height: auto !important;
          margin: 10px auto 0 !important;
        }
      }

      .right {
        height: 600px;

        .pic-ceo {
          padding: 0 10px 0;
          right: 0px !important;
          left: 0px !important;
          width: 600px !important;
          margin: auto;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #journey {
    padding: 0 30px;

    .container-custom {
      border: none !important;
    }
  }
}

@media screen and (max-width: 660px) {
  #journey {
    #bgOverlap {
      height: 500px !important;
    }

    .container-custom {
      .left {
        #sectionNumberJourney {
          margin: 20px 0;
        }
      }

      .right {
        height: 500px !important;

        .pic-ceo {
          width: 500px !important;
        }
      }
    }
  }
}

@media screen and (max-width: 530px) {
  #journey {
    .container-custom {
      .left {
        #sectionNumberJourney {
          margin: 0 0 20px;
        }

        .open-reg-24 {
          font-size: 20px !important;
        }
      }

      .right {
        align-items: start !important;

        .pic-ceo {
          display: none !important;
        }

        .pic-ceo-small {
          width: 100%;
          max-height: 470px;
          display: block !important;
        }

        .shape {
          width: 100px;
          height: auto;
          transform: rotate(-180deg);
          display: block !important;
          position: absolute;
          top: -20px;
          right: -10px;
          z-index: -1;
        }
      }
    }
  }
}

@media screen and (max-width: 425px) {
  #journey {
    #bgOverlap {
      height: 100% !important;
      max-height: 400px;
    }

    .container-custom {
      padding: 40px 0;

      .left {
        #sectionNumberJourney {
          margin: 20px 0;
        }

        .open-reg-24 {
          line-height: 1.8;
          font-size: 14px !important;
        }
      }

      .right {
        height: auto !important;
      }
    }
  }
}
</style>
