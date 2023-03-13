<template>
  <section id="core-value">
    <div class="container-custom">
      <div class="d-flex flex-wrap h-100">
        <div class="cores d-flex flex-row align-items-start my-auto">
          <div
            class="core p-3 d-flex flex-row"
            :style="`
                  transform: translateX(-${posX}px);
                `"
            v-for="(core, indexCore) in coreValues"
            :key="indexCore"
          >
            <div
              class="ic-card justify-content-center d-flex flex-wrap align-items-center"
            >
              <div
                class="d-flex justify-content-center flex-row align-items-center"
              >
                <div class="images" style="height: 100%" :style="[styleObject]">
                  <img
                    class="images justify-content-center align-items-center mt-3"
                    :src="core.images"
                    alt="photo"
                  />
                </div>
                <div class="description pt-2">
                  <div class="d-flex flex-wrap">
                    <img src="@/assets/assessment/Star.svg" />
                    <p class="mb-0 ms-2 text-white fw-bold">
                      {{ core.rating }}
                    </p>
                  </div>
                  <div class="d-flex flex-wrap">
                    <p class="open-reg-16 me-2">2021</p>
                    <img
                      class="d-flex align-items-center justify-content-center mb-3 mt-0"
                      src="@/assets/assessment/Ellipse.svg"
                    />
                    <p class="open-reg-16 ms-2">{{ core.sub_heading }}</p>
                  </div>
                  <p class="mb-1 open-reg-28">{{ core.heading }}</p>
                  <p class="mb-1">{{ core.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import BorderContainer from "@/components/BorderContainer.vue";

const posX = ref(0);
const addPos = () => {
  posX.value += 300;
};
const minPos = () => {
  posX.value -= 300;
};
const coreValues = ref([
  {
    images: require("@/assets/assessment/slide-3.png"),
    heading: "News of the World",
    rating: "7.3",
    sub_heading: "Drama",
    description:
      "We did a rebrand and digital marketing planning for PT Batamec Shipyard, a national shipyard company with its long history.",
  },
  {
    images: require("@/assets/assessment/slide-1.png"),
    heading: "Space Sweepers",
    rating: "8.1",
    sub_heading: "Sci-Fi",
    description:
      "We help Collega builds their Digital Banking product with our experienced technical team.",
  },
  {
    images: require("@/assets/assessment/slide-2.png"),
    heading: "Space Sweepers",
    rating: "8.1",
    sub_heading: "Sci-Fi",
    description:
      "We help Collega builds their Digital Banking product with our experienced technical team.",
  },
]);
</script>

<style lang="scss" scoped>
#core-value {
  min-height: 100vh;
  width: 100%;
  padding: 0 0px;
  background: #1e232b;
  position: relative;
  .container-custom {
    padding: 80px 0;
    min-height: 100vh;
    width: 100%;
    z-index: 2;
    .cores {
      width: 100%;

      overflow-x: scroll;
      .core {
        margin-bottom: 20px;
        width: 100vw;
        height: auto;
        padding-right: 0;
        transition: 0.5s ease-out;
        z-index: 99;

        .ic-card {
          padding: 0;
          width: 100%;
        }
        .ic-card:hover {
          transform: translateZ(0);
          box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.05);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transition-property: transform;
          transition-property: transform;
          z-index: 3;
        }
        .description {
          background-color: #000;
          width: 518.56px;
          height: 324.1px;
          font-family: "Albert Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          padding-left: 20px;
          line-height: 30px;
          color: #8d8f9a;
          margin-top: 20px;
          padding-right: 0px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #core-value {
    padding: 0 30px;
    .container-custom {
      height: 100vh;
      padding: 80px 0;
      border: none;
      .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
      }
      .cores {
        padding: 0;
      }
      .text-body {
        font-size: 12px;
        margin-top: 5px;
        line-height: 30px;
      }
      .btn {
        display: none;
      }
    }
  }
}
</style>
