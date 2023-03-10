<template>
  <section id="core-value">
    <BorderContainer
      :theme="'light'"
      :sections-length="4"
      :current-section="2"
    />
    <div class="container-custom">
      <div class="d-flex flex-column h-100">
        <h1 class="albert-reg-28">Our Works</h1>
        <div class="shape"></div>

        <div class="cores d-flex flex-row align-items-start my-auto">
          <div
            class="core d-flex flex-column"
            :style="`
                transform: translateX(-${posX}px);
              `"
            v-for="(core, indexCore) in coreValues"
            :key="indexCore"
          >
            <div class="ic-card justify-content-center align-items-center">
              <div class="d-flex justify-content-center align-items-center">
                <div class="images" style="height: 10em" :style="[styleObject]">
                  <img
                    class="images justify-content-center align-items-center mt-3 p-2"
                    :src="core.images"
                    alt="photo"
                  />
                </div>
              </div>
              <div class="d-flex mt-5 flex-row align-items-center mt-4">
                <div class="border"></div>
              </div>
              <p class="mb-1 description">{{ core.description }}</p>
            </div>
          </div>
        </div>

        <!-- <div class="d-flex flex-row justify-content-end w-100 mt-3">
          <button
            type="button"
            class="btn btn-small btn-arrow"
            :class="posX == 0 ? 'disabled' : ''"
            @click="minPos"
          >
            <img src="@/assets/images/icons/caret-left.svg" alt="icon" />
          </button>
          <button
            type="button"
            class="btn btn-small btn-arrow ms-2"
            :class="posX == 900 ? 'disabled' : ''"
            @click="addPos"
          >
            <img src="@/assets/images/icons/caret-right.svg" alt="icon" />
          </button>
        </div> -->
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
    images: require("@/assets/images/our-work/bmc.svg"),
    name: "Innovation",
    description:
      "We did a rebrand and digital marketing planning for PT Batamec Shipyard, a national shipyard company with its long history.",
  },
  {
    images: require("@/assets/images/our-work/collega.svg"),
    name: "Collaboration",
    description:
      "We help Collega builds their Digital Banking product with our experienced technical team.",
  },
  {
    images: require("@/assets/images/our-work/sedekah.svg"),
    name: "Team Work",
    description:
      "We did their Campaign Strategies, including their Digital Marketing, Website Management, and Social Media Handling.",
  },
  {
    images: require("@/assets/images/our-work/logo-makasi.svg"),

    name: "Growth",
    description:
      "We help Makasi POS build their Point of Sales app from scratch.",
  },
  {
    images: require("@/assets/images/our-work/icdata.svg"),
    name: "Passion",
    description:
      "To excel through quality, to delight our clients, to enjoy our work.",
  },
  {
    images: require("@/assets/images/our-work/foodiz.svg"),
    name: "Loyalty",
    description:
      "Means we stay true to the company and to each other in good and bad times",
  },
]);
</script>

<style lang="scss" scoped>
#core-value {
  min-height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  position: relative;
  .container-custom {
    padding: 80px 0;
    min-height: 100vh;
    width: 100%;
    z-index: 2;
    .shape {
      width: 38px;
      height: 22px;
      background-color: #0c4aa9;
      margin-top: 10px;
    }
    .cores {
      width: 100%;
      overflow-x: scroll;
      .core {
        margin-bottom: 20px;
        width: 17em;
        height: auto;
        padding-right: 10px;
        transition: 0.5s ease-out;
        z-index: 99;

        .ic-card {
          padding: 0 20px;
          width: 17em;
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
          font-family: "Albert Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 30px;
          color: #8d8f9a;
          margin-top: 20px;
          padding-right: 0px;
        }
        .circle {
          width: 18px;
          height: 18px;
          background: #e78448;
          border-radius: 30px;
        }
        .border {
          width: 300px;
          height: 0px;
          border-top: 1px #b8bdc6;
          border-bottom: none;
          margin-left: 10px;
        }
      }
    }
    .card-ic {
      width: 17em;
      height: 33em;
      z-index: 99;
      margin: 1em;
      cursor: pointer;
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
