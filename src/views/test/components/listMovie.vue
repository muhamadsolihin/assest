<template>
  <section id="howWeDoIt">
    <div class="container-custom">
      <div class="d-flex flex-wrap align-items-center flex-wrap">
        <p id="headerHowWeDo" class="text-white open-reg-26">Discover Movies</p>
      </div>
      <div class="d-flex p-3 flex-wrap col-md-12">
        <img :src="photoList[0]" class="me-3" alt="photo" />
        <img :src="photoList[1]" class="me-3" alt="photo" />
        <img :src="photoList[2]" class="me-3" alt="photo" />
        <img :src="photoList[3]" class="me-3" alt="photo" />
        <img :src="photoList[4]" class="me-3" alt="photo" />
      </div>
      <div class="d-flex p-3 flex-wrap">
        <img :src="photoList[0]" class="me-3" alt="photo" />
        <img :src="photoList[1]" class="me-3" alt="photo" />
        <img :src="photoList[2]" class="me-3" alt="photo" />
        <img :src="photoList[3]" class="me-3" alt="photo" />
        <img :src="photoList[4]" class="me-3" alt="photo" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const photoList = ref([
    require("@/assets/assessment/list-1.png"),
    require("@/assets/assessment/list-2.png"),
    require("@/assets/assessment/list-3.png"),
    require("@/assets/assessment/slide-4.png"),
    require("@/assets/assessment/slide-5.png"),
]);

</script>

<style lang="scss" scoped>
#howWeDoIt {
  height: 100%;
  width: 100%;
  padding: 100px 140px;
  background: #292e35;
  position: relative;
}
</style>
