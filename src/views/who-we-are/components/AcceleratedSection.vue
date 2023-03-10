<template>
  <section id="accelerated">
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'light'" :sections-length="9" :current-section="2"
      />
      <div class="row h-100">
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
        >
          <div class="d-flex flex-column justify-content-center h-100">
            <h2
              class="title mt-4"
              :class="imageHover ? 'title-smaller' : 'title-bigger'"
            >
              Accelerated ways of working
            </h2>
            <p class="text-body open-reg-24 mt-3 mb-auto">
              We combine Lean Startup principles, Skunkworks practices, and
              Agile methods. Working this way allows our high-speed teams to
              break off from unimaginative routines and achieve disruptive
              innovation autonomously, quickly, and on budget.
            </p>
            <div class="section-number me-auto">
              <SectionNumberComponent
                class="mb-auto me-auto"
                :number="'02 / 07'"
                :section-name="'How We Do It'"
                :color="'#000000'"
              />
            </div>
          </div>
        </div>
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2 d-flex flex-row"
        >
          <img
            class="mx-auto"
            src="@/assets/images/who-we-are/photo-1.png"
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
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#accelerated {
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  position: relative;
  .container-custom {
    height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      line-height: 57px;
    }
  }
}

@media screen and (max-width: 768px) {
  #accelerated {
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
      img {
        margin-top: -100px;
      }
      .text-body {
        font-size: 12px;
        margin-top: 5px;
        line-height: 30px;
      }
    }
    .section-number {
      margin-bottom: auto;
    }
  }
}
@media screen and (max-width: 567px) {
  #accelerated {
    padding: 40px 30px;
  }
  .section-number {
    margin-top: 50px;
  }
}
</style>
