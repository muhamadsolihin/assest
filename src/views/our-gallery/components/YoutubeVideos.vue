<template>
  <section id="videos">
    <div class="container-custom">
      <div class="row d-flex flex-wrap row">
        <div class="col-md-2 d-flex flex-end align-items-end">
          <img
            style="width: 150%"
            class="me-auto mt-auto mb-0 left-icon"
            :src="photoList[0]"
            alt="photo"
          />
        </div>
        <div
          class="col-md-8 d-flex flex-wrap align-items-center justify-content-center"
        >
          <div
            class="embed-responsive d-flex justify-content-center embed-responsive-16by9"
          >
            <iframe
              class="embed-responsive-item yt-3 d-flex align-items-center justify-content-center"
              src="https://www.youtube.com/embed/k4Dq-kOEu7g"
              allowfullscreen
              autoplay
            ></iframe>
          </div>
        </div>
        <div class="col-md-2 mt-0 d-flex flex-start align-items-stretch">
          <img
            style="width: 50%"
            class="mb-auto ms-auto d-flex align-items-top right-icon"
            :src="photoList[1]"
            alt="photo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const photoList = ref([
  require("@/assets/images/our-gallery/right-icon.svg"),
  require("@/assets/images/our-gallery/left-icon.svg"),
]);
</script>

<style lang="scss" scoped>
#videos {
  width: 100%;
  padding: 50px 140px;
  height: 100vh;
  .container-custom {
    z-index: 1;
  }
  .yt-3 {
    width: 75vw;
    height: 70vh;
    z-index: 2 !important;
  }
  img {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .yt-3 {
    width: 60vw !important;
    height: 50vh !important;
    z-index: 2 !important;
  }
  .icon-left {
    margin-left: -30%;
    padding-top: 9.5em;
  }
  .icon-right {
    width: 100% !important;
    margin-left: 30%;
    margin-top: 0;
  }
}
@media screen and (max-width: 567px) {
  #videos {
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh !important;
  }
  .container-custom {
    height: 50vh !important;
  }
  .left-icon {
    width: 30% !important;
    padding-top: 50% !important;
  }
  .right-icon {
    margin-top: -51% !important;
    width: 10% !important;
  }
  .yt-3 {
    margin-top: -55% !important;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
