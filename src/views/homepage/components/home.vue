<template>
  <section id="hero">
    <video autoplay muted loop id="bg-video">
      <source src="@/assets/images/video.mp4" type="video/mp4" />
    </video>
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'dark'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <div class="d-flex mt-5 flex-column justify-content-center my-auto">
        <SectionNumberComponent
          class="mt-auto me-auto"
          :number="'01 / 11'"
          :section-name="'Home'"
          :color="'#ffffff'"
          :z-index="'99'"
        />
        <h1 class="mt-4">
          Generate <br />
          New Business <br />
          Ideas
        </h1>
        <div
          class="container--word d-flex flex-row justify-content-start align-items-start"
        >
          <div class="shape-blue"></div>
          <p class="text-white open-reg-24">
            <!-- We design and build solutions by connecting ideas <br />
            and technology to solve problems and get new <br />
            ideas to business lifecycle -->
            We design and build solutions by connecting ideas and technology to
            solve problems and get new ideas to business lifecycle
          </p>
        </div>
        <p class="get-in-touch text-white open-reg-24" style="z-index: 2">
          GET IN TOUCH
          <span>
            <a
              class="btn"
              @click="$router.push(`/contact-us`)"
              style="z-index: 2"
              ><img src="@/assets/images/getIn.svg" /></a
          ></span>
        </p>
      </div>
    </div>
    <img
      class="asset-1"
      src="@/assets/images/who-we-are/asset-1.png"
      alt="asset"
    />
    <img
      class="asset-3"
      src="@/assets/images/who-we-are/asset-3.png"
      alt="asset"
    />
  </section>
</template>

<script setup>
import BorderContainer from "@/components/BorderContainer.vue";
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
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
onMounted(() => {
  var stage = document.getElementById("hero");
  var hammertime = new Hammer.Manager(stage);
  var Swipe = new Hammer.Swipe();
  hammertime.add(Swipe);
  hammertime.on("swipeup", function (ev) {
    emit("swipeUp");
  });
  hammertime.on("swipedown", function (ev) {
    emit("swipeDown");
  });
});
</script>

<style lang="scss" scoped>
#bg-video {
  position: fixed;
  background-size: cover;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}

#hero {
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  .container-custom {
    padding: 80px 0;
    height: 100vh;
    width: 100%;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    z-index: 1;

    h1 {
      color: white;
    }

    .container--word {
      width: 40%;

      .shape-blue {
        width: 68px;
        height: 22px;
        background-color: #0c4aa9;
        margin-right: 20px;
        margin-top: 10px;
      }
    }
  }
}
// .get-in-touch {
// padding-top: 108px;
// }
.asset-1 {
  position: absolute;
  bottom: -100px;
  left: 40%;
}

.asset-3 {
  position: absolute;
  bottom: 0;
  right: 0;
}

@media screen and (max-width: 1440px) {
  #hero {
    .container-custom {
      .container--word {
        width: 65% !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
    .container-custom {
      height: 100vh;
      padding: 80px 0;
      border: none;

      .shape-blue {
        width: 38px;
        height: 22px;
        background-color: #0c4aa9;
        margin-right: 20px;
        margin-top: 10px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  #hero {
    .container-custom {
      .container--word {
        width: 100% !important;

        .shape-blue {
          width: 50px;
          height: 10px;
        }

        .open-reg-24 {
          font-size: 18px;
        }
      }
    }

    .asset-1 {
      bottom: -40px;
      left: 80%;
    }
  }
}

@media screen and (max-width: 425px) {
  .asset-1 {
    width: 100px;
  }
}
</style>
