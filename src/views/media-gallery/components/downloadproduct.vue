<template>
  <section id="media-gallery">
    <div class="container-custom d-flex flex-column justify-content-top">
      <BorderContainer
        :theme="'dark'"
        :sections-length="4"
        :current-section="1"
      />
      <div class="header w-100 d-flex flex-column justify-content-center">
        <SectionNumberComponent
          class="mt-auto me-auto"
          :section-name="'Product Information'"
          :color="'#000'"
        />
      </div>
      <div class="media d-flex justify-content-center">
        <div
          class="card-media d-flex flex-wrap"
          :style="`
                  transform: translateX(-${posX}px);
                `"
        >
          <div class="d-flex ms-5 flex-column justify-content-end">
            <img class="images" :src="imageList[0]" alt="photo" />
            <a
              href="https://drive.google.com/drive/folders/1Xo359f00w-sMQw9HV9WkbCOSK0bHELeu"
              class="btn mt-3"
              >E-Brochure TCI &nbsp;
              <img
                style="width: 10%"
                src="@/assets/images/media-gallery/icon-download.svg"
            /></a>
          </div>
          <div class="d-flex flex-column mt-5 ms-5 justify-content-end">
            <img class="images" :src="imageList[1]" alt="photo" />
            <a
              href="https://drive.google.com/drive/folders/1Xo359f00w-sMQw9HV9WkbCOSK0bHELeu"
              class="btn mt-3"
              >E-Brochure Arthology &nbsp;<img
                style="width: 10%"
                src="@/assets/images/media-gallery/icon-download.svg"
              />
            </a>
          </div>
          <div class="d-flex flex-column mt-5 ms-5 justify-content-end">
            <img class="images" :src="imageList[2]" alt="photo" />
            <a
              href="https://drive.google.com/drive/folders/1Xo359f00w-sMQw9HV9WkbCOSK0bHELeu"
              class="btn mt-3 d-flex justify-content-center align-items-center"
              >E-Brochure ICDATA&nbsp;<img
                style="width: 10%"
                src="@/assets/images/media-gallery/icon-download.svg"
              />
            </a>
          </div>
          <div class="d-flex flex-column ms-5 mt-5 justify-content-end">
            <img class="images" :src="imageList[3]" alt="photo" />
            <a
              href="https://drive.google.com/drive/folders/1Xo359f00w-sMQw9HV9WkbCOSK0bHELeu"
              class="btn mt-3 d-flex justify-content-center align-items-center"
              >E-Brochure Makasi &nbsp;<img
                style="width: 10%"
                src="@/assets/images/media-gallery/icon-download.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import { ref } from "vue";
const posX = ref(0);
const imageList = ref([
  require("@/assets/images/media-gallery/artboard-tci.png"),
  require("@/assets/images/media-gallery/artboard-arthology.png"),
  require("@/assets/images/media-gallery/ic-data.png"),
  require("@/assets/images/media-gallery/makasi.png"),
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
    .media {
      padding: 0;
      width: 100%;
      overflow-x: scroll;
    }
    .card-media {
      padding: 0 100px;
      transition: 0.5s ease-out;
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
}
@media screen and (max-width: 567px) {
  #media-gallery {
    padding: 0 30px;
    .container-custom {
      padding: 120px 20px;
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
        padding: 20px 0 !important;
      }
    }
  }
}
</style>
