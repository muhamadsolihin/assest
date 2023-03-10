<template>
  <section id="downloadable">
    <BorderContainer :theme="'light'" :sections-length="9" :current-section="7" />
    <div class="container-custom">
      <div class="row h-100">
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
        >
          <div class="d-flex flex-column justify-content-center h-100">
            <SectionNumberComponent
              class="mt-4 me-auto"
              :number="'07 / 07'"
              :section-name="'Downloadable Assets'"
              :color="'#000000'"
            />
            <h2 class="mt-3 title" :class="imageHover ? 'title-smaller' : 'title-bigger'">
              Downloadable Assets
            </h2>
            <p
              class="open-reg-24 mt-3 text-body"
              :class="imageHover ? 'text-smaller' : 'text-bigger'"
            >
              Get to know us better through our downloadable public information assets
              such as Brochure, Company Booklet, and Videos.
            </p>

            <router-link class="me-auto" to="/media-gallery">
              <CtaComponent :cta-text="'Media Gallery'" />
            </router-link>
          </div>
        </div>
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2 d-flex flex-row"
        >
          <img
            class="mx-auto"
            :class="imageHover ? 'image-hover' : 'image-unhover'"
            src="@/assets/images/who-we-are/photo-3.png"
            alt="photo"
            style="width: 100%; object-fit: contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import CtaComponent from "@/components/CtaComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

#downloadable {
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  position: relative;
  .container-custom {
    padding: 80px 0;
    height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    z-index: 2;
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      line-height: 57px;
    }
  }
}

@media screen and (max-width: 768px) {
  #downloadable {
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
      .text-body {
        font-size: 12px;
        margin-top: 5px;
        line-height: 25px;
      }
    }
  }
}
</style>
