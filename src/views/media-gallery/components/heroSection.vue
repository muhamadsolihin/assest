<template>
  <section id="media-gallery">
    <div class="container-custom d-flex flex-column justify-content-top">
      <div class="header w-100 d-flex flex-column justify-content-center">
        <p class="monts-bold-55 text-dark text-center">TCI MEDIA GALLERY</p>
        <p class="open-reg-18 text-dark text-center">
          Welcome to our Media Gallery. This is the place where you could see,
          watch, and download a variety of our resources.
        </p>
        <SectionNumberComponent
          class="mt-5 me-auto"
          :section-name="'Corporate Information'"
          :color="'#000'"
        />
      </div>
      <div
        class="card-media d-flex justify-content-center align-items-end flex-wrap"
      >
        <div class="d-flex mt-3 ms-5 flex-column">
          <img :src="imageList[0]" alt="photo" />
          <a
            href="https://drive.google.com/drive/folders/1Xo359f00w-sMQw9HV9WkbCOSK0bHELeu"
            class="btn mt-3"
            >Company Profile &nbsp;
            <img
              style="width: 10%"
              src="@/assets/images/media-gallery/icon-download.svg"
          /></a>
        </div>
        <div
          class="d-flex flex-column mt-3 ms-5 align-items-center justify-content-end"
        >
          <img :src="imageList[1]" alt="photo" />
          <a
            href="https://drive.google.com/drive/folders/1Xo359f00w-sMQw9HV9WkbCOSK0bHELeu"
            class="btn mt-3"
            >IT Solution Profile &nbsp;<img
              style="width: 10%"
              src="@/assets/images/media-gallery/icon-download.svg"
            />
          </a>
        </div>
        <div class="d-flex flex-column mt-3 ms-5 justify-content-end">
          <img :src="imageList[2]" alt="photo" />
          <a
            href="https://drive.google.com/drive/folders/1Xo359f00w-sMQw9HV9WkbCOSK0bHELeu"
            class="btn mt-3 d-flex justify-content-center align-items-center"
            >Mini Company Profile &nbsp;<img
              style="width: 10%"
              src="@/assets/images/media-gallery/icon-download.svg"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import { ref } from "vue";

const imageList = ref([
  require("@/assets/images/media-gallery/arthboardtci.png"),
  require("@/assets/images/media-gallery/compro.png"),
  require("@/assets/images/media-gallery/minicompro.png"),
]);
</script>

<style lang="scss" scoped>
#media-gallery {
  width: 100vw;
  padding: 0 70px;
  position: relative;

  .container-custom {
    width: 100%;
    padding: 140px 80px;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .card-media {
      padding: 40px 100px;
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
        line-height: 18px;
      }
      img {
        width: 100%;
      }
      .btn {
        width: 100%;
        font-size: 12px;
      }
      .card-media {
        display: flex;
        margin-left: -50px;
        justify-content: center !important;
        padding: 0 !important;
      }
    }
  }
}
</style>
