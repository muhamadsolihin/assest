<template>
  <section id="diversity">
    <BorderContainer :theme="'light'" :sections-length="5" :current-section="3" />
    <div class="container-custom">
      <div class="d-flex flex-column justify-content-center py-3 px-4">
        <h2 class="title text-white mt-3">Path into meaningful work starts here</h2>
        <p class="mt-3 text-body text-white">
          We know that everyone has a lot of different skills and field interests. If you
          are a passionate person who is ready to share your vision and show the world
          what you got, no matter where you came from, we have a spot for you. Find the
          most suitable job here.
        </p>
        <img
          class="assets-3 me-auto pointer"
          src="@/assets/images/careers/search.svg"
          @click="$router.push('/jobs')"
        />
      </div>
      <img class="diversity-image" src="@/assets/images/careers/high.png" alt="photo" />
    </div>
  </section>
</template>

<script setup>
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#diversity {
  background-image: url("@/assets/images/careers/Background.png");
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  position: relative;
  .container-custom {
    padding: 80px 0;
    min-height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    z-index: 2;
    position: relative;
    .title {
      width: 55%;
    }
    .diversity-image {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 45%;
    }
    .text-body {
      font-size: 24px;
      margin-top: 5px;
      color: #fff !important;
      line-height: 32px;
      width: 55%;
    }
    .assets-3 {
      width: 25%;
      margin-bottom: 60px;
      margin-top: 26px;
    }
  }
}
@media screen and (max-width: 768px) {
  #diversity {
    padding: 0;
    min-height: 30vh;
    .container-custom {
      border: none;
      position: relative;
      padding: 30px 0;
      min-height: 30vh;
      .diversity-image {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 55%;
      }
      .title {
        width: 100%;
      }
      .text-body {
        font-size: 12px;
        margin-top: 5px;
        color: #fff !important;
        line-height: 22px;
        width: 55%;
      }
      .assets-3 {
        width: 50%;
        margin-bottom: 60px;
      }
    }
  }
  .card-body {
    display: flex;
    padding: 0 10px;
  }
  .body-border {
    padding: 0 70px 0 0;
    border-top: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
  }
  .border-body {
    padding: 20px 0;
    border-top: 1px solid #b8bdc6;
  }
  .culture-image {
    width: 70%;
    display: flex;
    align-items: end;
    justify-content: end;
    object-fit: contain;
  }
  .assets-3 {
    cursor: pointer;
    z-index: 9;
  }
}
@media screen and (max-width: 1024px) {
  .monts-bold-50 {
    font-size: 32px;
    line-height: 35px;
  }
  .open-reg-24 {
    font-size: 18px;
    line-height: 24px;
  }
  .culture-image {
    margin-top: 40% !important;
  }
}
@media screen and (max-width: 768px) {
  #search-job {
    padding: 0 30px;
  }
  .monts-bold-50 {
    font-size: 32px;
    line-height: 35px;
  }
  .open-reg-24 {
    font-size: 18px;
    line-height: 24px;
  }
  .culture-image {
    margin-top: 40% !important;
  }
}
</style>
