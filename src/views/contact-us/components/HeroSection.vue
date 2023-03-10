<template>
  <section id="hero">
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'dark'"
        :sections-length="3"
        :current-section="1"
      />
      <div class="card d-flex justify-content-center align-items-center">
        <!-- <div v-if="showSuccessAlert" class="success-alert">
          Form submitted successfully!
        </div> -->
        <alert />
      </div>
      <p
        class="monts-bold-50 text-white d-flex justify-content-center text-center"
      >
        Get in touch with us
      </p>
      <p
        class="open-reg-23 text-white d-flex justify-content-center text-center"
      >
        We look forward to collaborate with you in your amazing journey. You can
        tell us what you need using this form.
      </p>
    </div>
    <img
      class="asset-3"
      src="@/assets/images/who-we-are/asset-3.png"
      alt="asset"
    />
  </section>
</template>

<script>
import BorderContainer from "@/components/BorderContainer.vue";
import alert from "@/components/alert.vue";
export default {
  components: {
    BorderContainer,
    alert,
  },
  data() {
    return {
      showSuccessAlert: false,
    };
  },
  created() {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("form_success") === "success") {
      this.showSuccessAlert = true;
    }
  },
};
</script>

<style lang="scss" scoped>
#hero {
  background-image: url("@/assets/images/our-gallery/hero-bg.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  position: relative;
  .container-custom {
    height: 100vh;
    width: 100%;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .hero-title {
      font-family: "Montserrat", sans-serif;
      font-size: 80px;
      font-weight: 600;
      line-height: 83px;
      text-align: start;
      color: white;
    }
  }
  .asset-3 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
    background-image: url("@/assets/images/our-gallery/hero-bg-mobile.png");
    background-size: contain;
    .container-custom {
      height: 100vh;
      padding: 0;
      border: none;
      .hero-title {
        font-size: 40px;
        font-weight: 600;
        line-height: 48px;
      }
    }
  }
}
@media screen and (max-width: 567px) {
  .monts-bold-50 {
    font-size: 32px;
    line-height: 37px;
  }
  .open-reg-23 {
    font-size: 18px;
    line-height: 22px;
  }
}
.card {
  z-index: 999 !important;
  border: none;
  transition: all 0.5s ease-in-out;
  margin-top: -10%;
  background: transparent;
}
card-enter-active, card-leave-active {
  opacity: 0;
  transform: translateY(20px);
}
.success-alert {
  background-color: #e58146;
  color: white;
  padding: 16px;
  transition: all 0.5s ease-in-out;
  z-index: 999 !important;
  border-radius: 20px;
  text-align: center;
}
@media screen and (max-width: 567px) {
  .card {
    border: none;
    padding: 80px 0;
  }
}
</style>
