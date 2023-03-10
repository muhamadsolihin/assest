<template>
  <section id="howWeWork">
    <BorderContainer
      :theme="'light'"
      style="z-index: 4"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div class="container-custom">
      <div class="section-header">
        <SectionNumberComponent
          id="sectionNumberHowWeWork"
          number="04 / 11"
          section-name="What We Do"
          color="white"
        />
        <h2>This is How We Work</h2>
      </div>
      <div class="section-content">
        <div class="row">
          <div
            class="col-12 col-xl-4 position-relative wrapper--content"
            :key="item"
            v-for="item in data"
          >
            <div class="card">
              <div class="header">
                <h3>{{ item.name }}</h3>
              </div>
              <div class="divider d-flex align-items-center py-4">
                <div class="circle"></div>
                <div class="border-dotted"></div>
              </div>
              <div class="content">
                <p class="open-reg-18">{{ item.description }}</p>
              </div>
            </div>
            <div class="circle-mobile"></div>
          </div>
        </div>
      </div>
    </div>
    <img
      id="shapeRecBatik"
      :src="require('@/assets/images/rec-shape-batik.png')"
    />
  </section>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import Hammer from "hammerjs";

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

const data = ref([
  {
    name: "Discover,\n Design & build",
    description:
      "We delivered tailored Digital and IT Solutions by listening toour user needs, build prototype based on real feedback and apply user feedbacl into scalable MVP. The way our end products  are built to give a great user experience",
  },
  {
    name: "We grow\n your business",
    description:
      "Our expertise work passionately in each product cycle to make  sure our users gain the benefit of growing their business. Our solution will make it easier for them to engage with customers and improve consistency.",
  },
  {
    name: "Dedicated for excellence",
    description:
      "Our team fully assessed in terms of skills, experience, and personality. Our objective is to deeply analyzed users’ needs to create solution that speaks to your specific demographic and meet your specified requirements.",
  },
]);

onMounted(() => {
  var stage = document.getElementById("howWeWork");
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
    data.value[0].name = "Discover, Design & build";
    data.value[1].name = "We grow your business";
  }

  window.addEventListener("resize", () => {
    const currentScreenWidth = window.screen.width;
    if (currentScreenWidth <= 1199) {
      data.value[0].name = "Discover, Design & build";
      data.value[1].name = "We grow your business";
    } else {
      data.value[0].name = "Discover,\n Design & build";
      data.value[1].name = "We grow\n your business";
    }
  });
});
</script>

<style lang="scss" scoped>
#howWeWork {
  height: 800px;
  width: 100%;
  padding: 0 140px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-color: white;

  .container-custom {
    padding: 0;
    height: 100%;
    width: 100%;

    .section-header {
      padding: 50px 0;
      background-color: #263a5f;
      box-shadow: 1000px 0 0 #263a5f, -1000px 0 0 #263a5f;
      position: relative;
      z-index: 2;

      #sectionNumberHowWeWork {
        margin: 0 0 20px 0;
      }

      h2 {
        margin: 0;
        color: white;
      }
    }

    .section-content,
    .row {
      height: inherit;
    }

    .section-content {
      .card {
        height: 100%;
        border-radius: 0;
        border: none !important;
        border-left: 1px solid #b8bdc6 !important;
        padding: 130px 0 0 0;

        .header,
        .content {
          width: 390px;
        }

        .circle {
          width: 18px;
          height: 18px;
          background: #e78448;
          border-radius: 30px;
        }
        .border-dotted {
          width: 100%;
          border-top: 4px dotted #e78448;
          margin-left: 10px;
        }

        .header h3 {
          white-space: pre-line;
        }

        .content p {
          color: #8d8f9a;
          font-weight: 400;
        }
      }

      .circle-mobile {
        width: 18px;
        height: 18px;
        background: #e78448;
        border-radius: 30px;
        display: none;
      }
    }
  }

  #shapeRecBatik {
    position: absolute;
    top: 100px;
    right: 0;
    z-index: 4;
  }
}

@media screen and (max-width: 1540px) {
  .header,
  .content {
    width: 100% !important;
  }
}

@media screen and (max-width: 1280px) {
  #howWeWork .container-custom .section-header {
    box-shadow: 200px 0 0 #263a5f, -200px 0 0 #263a5f !important;
  }
}

@media screen and (max-width: 1199px) {
  #howWeWork {
    height: auto;
  }

  #howWeWork .container-custom .section-header {
    box-shadow: 200px 0 0 #263a5f, -200px 0 0 #263a5f !important;
  }

  #howWeWork .container-custom .section-header {
    box-shadow: 200px 0 0 #263a5f, -200px 0 0 #263a5f !important;
  }

  .section-content {
    padding: 30px 0;
  }

  #howWeWork .container-custom .section-content .card {
    border: none !important;
    border-left: 5px dotted #e78448 !important;
    height: auto;
    padding: 0 0 0 20px;
  }

  #howWeWork .container-custom .section-content .col-12.wrapper--content {
    height: auto !important;
  }

  .divider {
    display: none !important;
  }

  .circle-mobile {
    display: block !important;
    position: absolute;
    left: 5px;
    top: 10px;
    box-shadow: 0px 17px white, 0px -17px white, 0px 21px white;
  }
}

@media screen and (max-width: 768px) {
  #howWeWork {
    padding: 0 30px;
  }

  #howWeWork .container-custom .section-content h3 {
    margin-top: 5px;
  }

  #shapeRecBatik {
    display: none !important;
  }
}

// Mobile
@media screen and (max-width: 465px) {
  #howWeWork .container-custom .section-content h3 {
    margin-top: 7px;
    font-size: 20px !important;
  }

  .open-reg-18 {
    font-size: 14px;
  }

  #shapeRecBatik {
    width: 32px;
    display: block !important;
    top: 130px !important;
  }
}
</style>
