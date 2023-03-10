<template>
  <section id="gallery">
    <BorderContainer
      style="z-index: -1"
      :theme="'light'"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div id="container-custom" class="container-custom w-100">
      <div
        class="d-flex flex-column flex-xl-row align-items-start align-items-xl-center w-100 header"
      >
        <h2 class="order-2 order-xl-1">Our Gallery</h2>
        <SectionNumberComponent
          id="sectionNumberGallery"
          class="order-1 order-xl-2 mb-4 mb-xl-0 ms-xl-auto"
          number="09 / 11"
          section-name="Our Gallery"
          color="#fff"
        />
      </div>
      <div class="row g-3 mt-3 mb-3 content">
        <div class="col-12 col-xl-6">
          <div class="row g-3 h-100">
            <div class="col-12">
              <div class="hover hover-2 text-white rounded">
                <img
                  loading="lazy"
                  :src="photoList[0]"
                  alt="management-teknologi-cakra-internasional"
                />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-5 py-4">
                  <p class="hover-2-description mb-5">Photo Studio</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="hover-1 hover-2 text-white rounded">
                <img
                  loading="lazy"
                  :src="photoList[1]"
                  alt="team-teknologi-cakra-internasional"
                />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-5 py-4">
                  <p class="hover-2-description mb-5">
                    Employee Of <br />
                    The Month
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="hover-1 hover-2 text-white rounded">
                <img
                  loading="lazy"
                  :src="photoList[2]"
                  alt="pre-launch-makasipos-teknologi-cakra-internasional"
                />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-5 py-4">
                  <p class="hover-2-description mb-5">
                    Prelaunch <br />
                    Makasi - POS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-xl-3">
          <div class="hover-3 hover-2 text-white rounded">
            <img
              loading="lazy"
              :src="photoList[3]"
              alt="weekly-activity-at-teknologi-cakra-internasional"
            />
            <div class="hover-overlay"></div>
            <div class="hover-2-content px-5 py-4">
              <p class="hover-2-description mb-5">Kuliah Umum</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-xl-3">
          <div class="row g-3 h-100">
            <div class="col-12">
              <div class="hover-1 hover-2 text-white rounded">
                <img
                  loading="lazy"
                  :src="photoList[4]"
                  alt="video-shooting-at-teknologi-cakra-internasional"
                />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-5 py-4">
                  <p class="hover-2-description mb-5">Video Shooting</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="hover-1 hover-2 text-white rounded">
                <img
                  loading="lazy"
                  :src="photoList[5]"
                  alt="best-employee-of-the-month-at-teknologi-cakra-internasional"
                />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-5 py-4">
                  <p class="hover-2-description mb-5">
                    Employee Of <br />
                    The Month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Hammer from "hammerjs";
import BorderContainer from "@/components/BorderContainer.vue";
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";

const props = defineProps({
  sectionsLength: {
    type: Number,
    require: true,
  },
  currentSection: {
    type: Number,
    require: true,
  },
});

const photoList = ref([
  require("@/assets/images/our-gallery/photo-1.png"),
  require("@/assets/images/our-gallery/photo-2.png"),
  require("@/assets/images/galerry/pic3.png"),
  require("@/assets/images/our-gallery/photo-4.png"),
  require("@/assets/images/our-gallery/photo-5.png"),
  require("@/assets/images/galerry/pic6.png"),
]);
const emit = defineEmits(["swipeUp", "swipeDown"]);
onMounted(() => {
  var stage = document.getElementById("gallery");
  var hammertime = new Hammer.Manager(stage);
  var Swipe = new Hammer.Swipe();
  hammertime.add(Swipe);
  hammertime.on("swipeup", function (ev) {
    emit("swipeUp");
  });
  hammertime.on("swipedown", function (ev) {
    emit("swipeDown");
  });
});
</script>

<style lang="scss" scoped>
#gallery {
  height: auto;
  width: 100%;
  padding: 0 140px;
  margin: -5px 0;
  background-color: #263a5f;
  position: relative;
  z-index: 1;

  .container-custom {
    padding: 100px 0;
    height: 100%;

    h2 {
      color: white;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.hover {
  overflow: hidden;
  position: relative;
  padding-bottom: 40%;
}
.hover-1 {
  overflow: hidden;
  position: relative;
  padding-bottom: 80%;
}
.hover-3 {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.hover-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  transition: all 0.4s;
}

.hover img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}
.hover-1 img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}
.hover-3 img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}

.hover-content {
  position: relative;
  z-index: 99;
}

.hover-2 .hover-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
}

.hover-2-title {
  position: absolute;
  // top: 50%;
  left: 0;
  text-align: center;
  width: 100%;
  z-index: 99;
  transition: all 0.3s;
}

.hover-2-description {
  width: 100%;
  position: absolute;
  bottom: 0;
  font-family: "Albert Sans";
  font-size: 1.5em;
  opacity: 0;
  font-weight: 600;
  left: 7%;
  text-align: left;
  z-index: 99;
  transition: all 0.3s;
}

.hover-2:hover .hover-2-title {
  transform: translateY(-1.5rem);
}

.hover-2:hover .hover-2-description {
  bottom: 0.5rem;
  opacity: 1;
}

.hover-2:hover .hover-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
}

@media screen and (max-width: 768px) {
  #gallery {
    padding: 0 20px;
    .container-custom {
      padding: 25px 0;

      h2 {
        font-size: 40px !important;
      }
    }
  }
}
</style>
