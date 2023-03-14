<template>
  <section id="howWeDoIt">
    <div class="container-custom">
      <div class="heading">
        <div
          class="justify-content-center align-items-center mt-0 d-flex flex-wrap me-auto"
        >
          <img
            class="d-flex justify-content-center me-3 mb-0 align-items-center"
            :src="photoList[1]"
            alt="photo"
          />
          <p
            class="monts-bold-44 d-flex justify-content-center mb-0 align-items-center text-white me-2"
          >
            7.0
          </p>
          <div
            class="d-flex flex-column align-items-center justify-content-center mt-2 mb-0"
          >
            <p class="open-reg-14">User Score</p>
            <p class="open-reg-14">3621 Votes</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <img class="img-1" :src="photoList[0]" style="width: 20%" alt="photo" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const photoList = ref([
  require("@/assets/assessment/list-1.png"),
  require("@/assets/assessment/Star-2.svg"),
  require("@/assets/assessment/list-3.png"),
  require("@/assets/assessment/slide-4.png"),
  require("@/assets/assessment/slide-5.png"),
]);
</script>

<style lang="scss" scoped>
#howWeDoIt {
  background-image: url("@/assets/assessment/bg-detail.png");
  height: 10vh;
  width: 100%;
  padding: 50vh 0;
  background-size: cover;
  position: relative;
  z-index: 1;
}
.card-body {
  padding: 0 124px;
  height: 50vh;
  width: 100vw;
  z-index: 99 !important;

  background-color: #fff !important;
}

.heading {
  padding: 0 124px;
  height: 80px;
  width: 100vw;
  z-index: -9 !important;
  // opacity: 1;
  background-color: #221114 !important;
}
.img-1 {
  margin-top: -17%;
}
</style>
