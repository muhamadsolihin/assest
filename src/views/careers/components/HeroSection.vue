<template>
  <section id="hero">
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer :theme="'dark'" :sections-length="5" :current-section="1" />
      <div class="row w-100">
        <div class="col-12 col-md-12 d-flex flex-column">
          <p class="monts-bold-50 text-white text-hero">
            Unleash your capability, In the place where technology became one with art.
          </p>
          <div class="d-flex flex-row justify-content-center align-items-start">
            <p class="albert-reg-20 text-white text-hero">
              We have the vision to connect human and technology as art and we want to
              give that opportunity to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
    <img class="asset-3" src="@/assets/images/who-we-are/asset-3.png" alt="asset" />
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#hero {
  background-image: url("@/assets/images/careers/diskom.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  position: relative;
  .container-custom {
    height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .section-number {
      border: 2px solid #b8bdc6;
      border-radius: 25px;
      margin-right: auto;
      padding: 5px 10px;
      font-family: "IBM Plex Mono", sans-serif;
      hr {
        width: 20px;
        border-top: 2px solid;
      }
    }
    .shape-blue {
      width: 68px;
      height: 22px;
      background-color: #0c4aa9;
      margin-right: 20px;
      margin-top: 10px;
    }
    .text-hero {
      text-align: center;
    }
  }
  .asset-2 {
    position: absolute;
    left: -1px;
    top: 30%;
  }
  .asset-3 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
@media screen and (max-width: 1024px) {
  #hero {
    padding: 0 80px;
  }
  .container-custom {
    height: 100vh;
    padding: 0;
  }
  .monts-bold-50 {
    width: 100%;
    font-size: 44px !important;
    line-height: 48px !important;
  }
}
@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
    background-image: url("@/assets/images/careers/bg-carousel.png");
    background-size: cover;
    .container-custom {
      height: 100vh;
      padding: 0;
      border: none;
      .monts-bold-50 {
        font-size: 34px;
        line-height: 38px;
      }
      .albert-reg-20 {
        width: 100%;
      }
      .text-hero {
        text-align: start;
      }
    }
  }
}
@media screen and (max-width: 567px) {
  .monts-bold-50 {
    font-size: 35px !important;
    line-height: 40px !important;
  }
}
</style>
