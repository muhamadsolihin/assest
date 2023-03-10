<template>
  <section id="techStack">
    <BorderContainer
      :theme="'light'"
      style="z-index: -1"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <SectionNumberComponent
      id="sectionNumberTechStackMobile"
      number="05 / 11"
      section-name="TechnologyStack"
      class="d-flex d-lg-none"
    />
    <div class="container-custom">
      <div class="row">
        <div
          class="col-12 col-lg-6 order-2 order-lg-1 d-flex justify-content-center"
        >
          <img
            id="allTechStackImg"
            :src="require('@/assets/images/all-tech-stack.png')"
          />
          <img
            id="allTechStackImgMobile"
            :src="require('@/assets/images/all-tech-stack-mobile.png')"
          />
        </div>
        <div
          class="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-start"
        >
          <div class="wrapper-tech-stack">
            <h2>Technology Stack</h2>
            <div class="rec-blue"></div>
            <div class="content">
              <p class="open-reg-24">
                We use the most compatible Technology Stack to ensure it evolves
                alongside our customer needs, making the process easier while
                driving our product to success.
              </p>
            </div>
            <p class="mb-0 open-reg-18 fst-italic text-end">Iwan Ridwan</p>
            <p class="open-reg-18 fst-italic text-end">
              Chief Project Officer of Teknologi Cakra Internasional
            </p>
          </div>
        </div>
      </div>
    </div>
    <SectionNumberComponent
      id="sectionNumberTechStack"
      number="05 / 11"
      section-name="TechnologyStack"
    />
    <img
      id="batik"
      width="250"
      height="250"
      :src="require('@/assets/images/img-stack/batik.png')"
    />
  </section>
</template>
<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
import Hammer from "hammerjs";
import { onMounted, defineProps } from "vue";

import { ref } from "vue";

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

const photoList = ref([
  require("@/assets/images/img-stack/logo/1.svg"),
  require("@/assets/images/img-stack/logo/2.svg"),
  require("@/assets/images/img-stack/logo/3.svg"),
  require("@/assets/images/img-stack/logo/4.svg"),
  require("@/assets/images/img-stack/logo/5.svg"),
  require("@/assets/images/img-stack/logo/6.svg"),
  require("@/assets/images/img-stack/logo/7.svg"),
  require("@/assets/images/img-stack/logo/8.svg"),
  require("@/assets/images/img-stack/logo/9.svg"),
  require("@/assets/images/img-stack/logo/10.svg"),
  require("@/assets/images/img-stack/logo/11.svg"),
  require("@/assets/images/img-stack/logo/12.svg"),
  require("@/assets/images/img-stack/logo/13.svg"),
  require("@/assets/images/img-stack/logo/14.svg"),
  require("@/assets/images/img-stack/logo/15.svg"),
  require("@/assets/images/img-stack/logo/16.svg"),
  require("@/assets/images/img-stack/logo/17.svg"),
  require("@/assets/images/img-stack/logo/18.svg"),
  require("@/assets/images/img-stack/logo/19.svg"),
  require("@/assets/images/img-stack/logo/20.svg"),
  require("@/assets/images/img-stack/logo/21.svg"),
  require("@/assets/images/img-stack/logo/22.svg"),
  require("@/assets/images/img-stack/logo/23.svg"),
  require("@/assets/images/img-stack/logo/24.svg"),
  require("@/assets/images/img-stack/logo/25.svg"),
  require("@/assets/images/img-stack/logo/26.svg"),
]);

const emit = defineEmits(["swipeUp", "swipeDown"]);
onMounted(() => {
  var stage = document.getElementById("techStack");
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
#techStack {
  background-color: white;
  height: 800px;
  z-index: 1;
  position: relative;
  padding: 0 140px;

  .container-custom {
    padding: 80px 0;
    height: 100%;
    width: 100%;

    .rec-blue {
      width: 38px;
      height: 22px;
      background-color: #0c4aa9;
      margin: 20px 0;
    }

    #allTechStackImgMobile {
      display: none;
    }

    .wrapper-tech-stack {
      width: 100%;
      max-width: 700px;

      .content {
        width: 100%;
        margin: 0 0 15px 0;
        max-width: 437px;
      }
    }
  }

  #sectionNumberTechStack {
    position: absolute;
    bottom: 30px;
    left: 140px;
  }

  #sectionNumberTechStackMobile {
    position: absolute;
    top: 70px;
    left: 140px;
  }

  #batik {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

@media screen and (max-width: 1636px) {
  #allTechStackImg {
    max-width: 450px;
    object-fit: contain;
  }

  .wrapper-tech-stack {
    margin: 58px 0 0 0;
  }
}

@media screen and (max-width: 1199px) {
  #allTechStackImg {
    display: none;
  }

  #allTechStackImgMobile {
    display: block !important;
  }

  .wrapper-tech-stack {
    margin: 0;
  }
}

@media screen and (max-width: 1120px) {
  #allTechStackImg {
    max-width: 400px;
    object-fit: contain;
  }
}

@media screen and (max-width: 992px) {
  #techStack {
    padding: 100px 140px 0 140px;
    height: auto !important;
  }

  .container-custom > div {
    gap: 50px !important;
  }

  #allTechStackImg {
    display: block !important;
    max-width: none;
  }

  #allTechStackImgMobile {
    display: none !important;
  }

  #sectionNumberTechStack {
    display: none !important;
  }

  #batik {
    top: 0;
    width: 150px;
    height: 150px;
    transform: rotate(-90deg);
  }
}

@media screen and (max-width: 768px) {
  #techStack {
    padding: 70px 30px 0 30px;
  }

  #sectionNumberTechStackMobile {
    left: 30px !important;
  }
}

@media screen and (max-width: 630px) {
  #allTechStackImg {
    max-width: 550px;
  }
}

@media screen and (max-width: 600px) {
  #allTechStackImg {
    max-width: 450px;
  }
}

@media screen and (max-width: 500px) {
  #allTechStackImg {
    display: none !important;
  }

  #allTechStackImgMobile {
    display: block !important;
    width: 100%;
    max-width: 500px;
  }

  #batik {
    width: 128px;
    height: 128px;
  }

  .open-reg-24 {
    font-size: 20px !important;
  }

  .open-reg-18 {
    font-size: 16px !important;
  }

  .rec-blue {
    display: none !important;
  }
}

@media screen and (max-width: 465px) {
  .open-reg-24 {
    line-height: 1.8;
    font-size: 14px !important;
  }

  .open-reg-18 {
    font-size: 13px !important;
  }
}
</style>
