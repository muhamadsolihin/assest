<template>
  <section id="media-gallery">
    <div class="container-custom d-flex flex-column justify-content-top">
      <div class="header w-100 d-flex flex-column justify-content-center">
        <SectionNumberComponent
          class="mt-auto me-auto"
          :section-name="'Our Videos'"
          :color="'#000'"
        />
      </div>
      <div
        class="card-media d-flex justify-content-center align-items-center flex-wrap"
      >
        <div
          class="d-flex mt-3 ms-5 flex-column"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style="cursor: pointer"
        >
          <img :src="imageList[0]" alt="photo" />
        </div>
        <div
          class="d-flex flex-column mt-3 ms-5 align-items-center justify-content-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal-1"
          style="cursor: pointer"
        >
          <img :src="imageList[1]" alt="photo" />
        </div>
        <div
          class="d-flex flex-column mt-3 ms-5 justify-content-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal-2"
          style="cursor: pointer"
        >
          <img :src="imageList[2]" alt="photo" />
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body bg-transparan">
            <div
              class="embed-responsive d-flex justify-content-center embed-responsive-16by9"
            >
              <iframe
                class="embed-responsive-item yt-3 w-100 h-100"
                src="https://www.youtube.com/embed/k4Dq-kOEu7g"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal-1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body bg-transparan">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item w-100 yt-3"
                src="https://www.youtube.com/embed/E3y7V9Ff8Mc"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal-2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body bg-transparan">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item w-100 yt-3"
                src="https://www.youtube.com/embed/DhSAC7s2i5c"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import { ref } from "vue";

const imageList = ref([
  require("@/assets/images/media-gallery/bg-yt1.png"),
  require("@/assets/images/media-gallery/bg-yt2.png"),
  require("@/assets/images/media-gallery/bg-yt3.png"),
]);
</script>

<style lang="scss" scoped>
#media-gallery {
  width: 100vw;
  padding: 0 70px;
  position: relative;

  .container-custom {
    width: 100%;
    padding: 0 80px;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .card-media {
      padding: 30px 0;
    }
    img {
      width: 100%;
    }
    .btn {
      color: #fff;
      font-size: 16px;
      border: none;
      border-radius: 0;
      background: linear-gradient(93.03deg, #e28d41 3.11%, #e0983e 97.13%);
      box-shadow: 0px 4px 18px rgba(224, 149, 62, 0.25);
    }
  }

  .yt-3 {
    height: 70vh !important;
  }
}
@media screen and (max-width: 567px) {
  #media-gallery {
    padding: 0 30px;
    .container-custom {
      padding: 0 20px;
      .monts-bold-55 {
        font-size: 28px;
        line-height: 34px;
      }
      .open-reg-18 {
        font-size: 14px;
        line-height: 16px;
      }
      img {
        width: 100%;
      }
      .btn {
        width: 100%;
        font-size: 12px;
      }
      .card-media {
        margin-left: -50px;
        padding: 20px 0 !important;
      }
    }
  }
}
</style>
