<template>
  <section id="people">
    <div class="container-custom w-100">
      <BorderContainer :theme="'light'" :sections-length="9" :current-section="5" />
      <div class="d-flex flex-row align-items-center flex-wrap justify-content-center md:justify-content-between">
        <h2 class="me-auto">Our People</h2>
        <SectionNumberComponent
          :number="'04 / 07'"
          :section-name="'Our People'"
          :color="'#000000'"
        />
      </div>
      <div class="peoples align-items-center">
        <div
          class="d-flex people flex-wrap align-items-center"
          :style="`
                  transform: translateX(-${posX}px);
                `"
        >
          <div class="list-photo row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[55]" alt="photo" />
            <img :src="photoList[54]" alt="photo" />
            <img :src="photoList[53]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[52]" alt="photo" />
            <img :src="photoList[51]" alt="photo" />
            <img :src="photoList[50]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[49]" alt="photo" id="fatan" />
            <img :src="photoList[48]" alt="photo" />
            <img style="width: 100%" :src="photoList[47]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[46]" alt="photo" />
            <img :src="photoList[45]" alt="photo" />
            <img :src="photoList[44]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[43]" alt="photo" />
            <img :src="photoList[42]" alt="photo" />
            <img :src="photoList[41]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[40]" alt="photo" />
            <img :src="photoList[39]" alt="photo" />
            <img :src="photoList[38]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[37]" alt="photo" />
            <img :src="photoList[36]" alt="photo" />
            <img :src="photoList[35]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[34]" alt="photo" />
            <img :src="photoList[33]" alt="photo" />
            <img :src="photoList[32]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[31]" alt="photo" />
            <img :src="photoList[30]" alt="photo" />
            <img :src="photoList[29]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[28]" alt="photo" />
            <img :src="photoList[27]" alt="photo" />
            <img :src="photoList[26]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[25]" alt="photo" />
            <img :src="photoList[24]" alt="photo" />
            <img :src="photoList[23]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[22]" alt="photo" />
            <img :src="photoList[21]" alt="photo" />
            <img :src="photoList[20]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[19]" alt="photo" />
            <img :src="photoList[18]" alt="photo" />
            <img :src="photoList[17]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[16]" alt="photo" />
            <img :src="photoList[15]" alt="photo" />
            <img :src="photoList[14]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[13]" alt="photo" />
            <img :src="photoList[12]" alt="photo" />
            <img :src="photoList[11]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[10]" alt="photo" />
            <img :src="photoList[9]" alt="photo" />
            <img :src="photoList[8]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[7]" alt="photo" />
            <img :src="photoList[6]" alt="photo" />
            <img :src="photoList[5]" alt="photo" />
          </div>
          <div class="list-photo ms-2 row g-3 mb-3 d-flex flex-column">
            <img :src="photoList[4]" alt="photo" />
            <img :src="photoList[3]" alt="photo" />
            <img :src="photoList[2]" alt="photo" />
          </div>
        </div>
      </div>
      <!-- <div
        class="d-flex flex-row justify-content-center align-items-center"
        style="z-index: 999"
      >
        <button
          type="button"
          class="btn btn-small btn-arrow"
          :class="posX == 0 ? 'disabled' : ''"
          @click="minPos"
          style="cursor: pointer; z-index: 999"
        >
          <img src="@/assets/images/icons/caret-left.svg" alt="icon" />
        </button>
        <button
          type="button"
          class="btn btn-small btn-arrow ms-2"
          :class="posX == 1 ? 'disabled' : ''"
          @click="addPos"
          style="cursor: pointer"
        >
          <img src="@/assets/images/icons/caret-right.svg" alt="icon" />
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
import { ref } from "vue";
const posX = ref(0);
const addPos = () => {
  posX.value += 300;
};
const minPos = () => {
  posX.value -= 300;
};
const photoList = ref([
  require("@/assets/images/employee/1- (1).jpg"),
  require("@/assets/images/employee/1- (2).jpg"),
  require("@/assets/images/employee/1- (3).jpg"),
  require("@/assets/images/employee/1- (4).jpg"),
  require("@/assets/images/employee/1- (5).jpg"),
  require("@/assets/images/employee/1- (6).jpg"),
  require("@/assets/images/employee/1- (7).jpg"),
  require("@/assets/images/employee/1- (8).jpg"),
  require("@/assets/images/employee/1- (9).jpg"),
  require("@/assets/images/employee/1- (10).jpg"),
  require("@/assets/images/employee/1- (11).jpg"),
  require("@/assets/images/employee/1- (12).jpg"),
  require("@/assets/images/employee/1- (13).jpg"),
  require("@/assets/images/employee/1- (14).jpg"),
  require("@/assets/images/employee/1- (15).jpg"),
  require("@/assets/images/employee/1- (16).jpg"),
  require("@/assets/images/employee/1- (17).jpg"),
  require("@/assets/images/employee/1- (18).jpg"),
  require("@/assets/images/employee/1- (19).jpg"),
  require("@/assets/images/employee/1- (20).jpg"),
  require("@/assets/images/employee/1- (21).jpg"),
  require("@/assets/images/employee/1- (22).jpg"),
  require("@/assets/images/employee/1- (23).jpg"),
  require("@/assets/images/employee/1- (24).jpg"),
  require("@/assets/images/employee/1- (25).jpg"),
  require("@/assets/images/employee/1- (26).jpg"),
  require("@/assets/images/employee/1- (27).jpg"),
  require("@/assets/images/employee/1- (28).jpg"),
  require("@/assets/images/employee/1- (29).jpg"),
  require("@/assets/images/employee/1- (30).jpg"),
  require("@/assets/images/employee/1- (31).jpg"),
  require("@/assets/images/employee/1- (32).jpg"),
  require("@/assets/images/employee/1- (33).jpg"),
  require("@/assets/images/employee/1- (34).jpg"),
  require("@/assets/images/employee/1- (35).jpg"),
  require("@/assets/images/employee/1- (36).jpg"),
  require("@/assets/images/employee/1- (37).jpg"),
  require("@/assets/images/employee/1- (38).jpg"),
  require("@/assets/images/employee/1- (39).jpg"),
  require("@/assets/images/employee/1- (40).jpg"),
  require("@/assets/images/employee/1- (41).jpg"),
  require("@/assets/images/employee/1- (42).jpg"),
  require("@/assets/images/employee/1- (43).jpg"),
  require("@/assets/images/employee/1- (44).jpg"),
  require("@/assets/images/employee/1- (45).jpg"),
  require("@/assets/images/employee/1- (46).jpg"),
  require("@/assets/images/employee/1- (47).jpg"),
  require("@/assets/images/employee/1- (48).jpg"),
  require("@/assets/images/employee/1- (49).jpg"),
  require("@/assets/images/employee/1- (50).jpg"),
  require("@/assets/images/employee/1- (51).jpg"),
  require("@/assets/images/employee/1- (52).jpg"),
  require("@/assets/images/employee/1- (53).jpg"),
  require("@/assets/images/employee/1- (54).jpg"),
  require("@/assets/images/employee/1- (55).jpg"),
  require("@/assets/images/employee/1- (56).jpg"),
]);
</script>

<style lang="scss" scoped>
#people {
  min-height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  position: relative;
  .container-custom {
    padding: 60px 40px;
    min-height: 100vh;
    width: 100%;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    img {
      width: 100%;
      opacity: 0.5;
    }
    img:hover {
      transition: 0.5s ease-out;
      opacity: 1;
    }
    .peoples {
      padding: 30px 0;
      width: 100%;
      overflow-x: scroll;
    }

    .people {
      width: 370%;
      transition: 0.5s ease-out;
      z-index: 99;
    }
    .btn{
      margin-top: -50px;
    }
  }
}
@media screen and (max-width: 768px) {
  #people {
    height: 100vh;
    width: 100%;
    padding: 0 50px;
    .container-custom {
      padding: 20px 0;
      border: none;
    }
    .peoples {
      padding: 20px 0;
      overflow-x: scroll;
      width: auto;
    }
    .people {
      width: 600% !important;
      // width: 900% !important;
      height: 100% !important;
    }
    button {
      display: none;
    }
  }
}

@media screen and (max-width: 567px) {
  #people {
    padding: 0 30px;
    .container-custom {
      padding: 10px 0;
      border: none;
    }
    .peoples {
      padding: 20px 0;
    }
    .people {
      width: 1100% !important;
    }
    .list-photo {
      margin-left: 0 !important;
    }
    button {
      display: none;
    }
    .show-on-mobile {
      display: block;
    }
  }
}
</style>
