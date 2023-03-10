<template>
  <section id="culture">
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'dark'"
        :sections-length="5"
        :current-section="1"
      />
      <div class="header mt-5">
        <p class="text-center text-dark monts-bold-50">Our Culture</p>
      </div>
      <div class="row h-100 card-body">
        <div class="col-12 col-md-6 body-border">
          <img
            class="culture-image"
            src="@/assets/images/careers/img-group.png"
            alt="photo"
          />
        </div>
        <div class="col-12 col-md-6 border-body">
          <div class="d-flex flex-column justify-content-top h-100">
            <p
              class="monts-bold-35 w-100"
              :class="imageHover ? 'title-smaller' : 'title-bigger'"
            >
              Seizing Opportunities
            </p>
            <p class="open-reg-24">
              We always thrilled to try something new because we embrace the
              opportunities to learn and improve in order to excel our quality
              while we cooperate with our community and partners around the
              world. We put forward our loyalty and keeping a dynamic
              value-based solutions to succeed in our business, professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#culture {
  height: 100%;
  width: 100%;
  padding: 0 69px;
  .container-custom {
    padding: 80px 0;
    height: 100%;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .card-body {
      display: flex;
      padding: 40px 10px;
    }
    .body-border {
      padding: 0 70px 0 0;
      border-top: 1px solid #b8bdc6;
      border-right: 1px solid #b8bdc6;
    }
    .border-body {
      padding: 20px 100px 0 0;
      border-top: 1px solid #b8bdc6;
    }
    .culture-image {
      width: 100%;
      object-fit: contain;
    }
  }
}
@media screen and (max-width: 768px) {
  #culture {
    height: 100%;
    padding: 0 30px;
    .container-custom {
      height: 100%;
      padding: 0;
      border: none;
    }
    .card-body {
      padding: 0 !important;
    }
    .body-border {
      padding: 0 20px !important;
      border: none !important;
    }
    .border-body {
      padding: 0 20px !important;
      border: none !important;
    }
    .monts-bold-35 {
      font-size: 24px;
    }
    .open-reg-24 {
      font-size: 20px;
      line-height: 24px;
    }
  }
}
@media screen and (max-width: 567px) {
  #culture{
    height: 100%;
    padding: 50px 30px;
    .container-custom{
      height: 100%;
    }
  }
}
</style>
