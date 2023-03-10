<template>
  <section id="product">
    <BorderContainer
      :theme="'light'"
      style="z-index: -1"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div class="container-custom">
      <div
        class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-start justify-content-lg-between"
      >
        <h2 class="order-2 order-lg-1">Our Product</h2>
        <SectionNumberComponent
          id="sectionNumberOurProduct"
          class="order-1 order-lg-2"
          :number="'07 / 11'"
          :section-name="'Our Product'"
          :color="'#fff'"
        />
      </div>

      <div class="content-product">
        <div class="card-product" v-for="item in data">
          <div class="head">
            <img :src="item.image" />
          </div>
          <a
            class="monts-bold-23 text-decoration-none text-black"
            :href="item.website"
            target="_blank"
            >{{ item.title }}</a
          >
          <p class="open-reg-18">{{ item.date }}</p>
          <div class="footer">
            <p class="monts-bold-23">Contact:</p>
            <div class="contacts d-flex justify-content-between">
              <img
                :style="{
                  cursor:
                    item.contact.facebook != '#' ? 'pointer' : 'not-allowed',
                }"
                :src="item.contact.facebook_icon"
                @click="goToUrl(item.contact.facebook)"
              />
              <img
                :style="{
                  cursor:
                    item.contact.instagram != '#' ? 'pointer' : 'not-allowed',
                }"
                :src="item.contact.instagram_icon"
                @click="goToUrl(item.contact.instagram)"
              />
              <img
                :style="{
                  cursor:
                    item.contact.twitter != '#' ? 'pointer' : 'not-allowed',
                }"
                :src="item.contact.twitter_icon"
                @click="goToUrl(item.contact.twitter)"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-row d-none justify-content-end w-100">
        <button
          type="button"
          class="btn btn-small btn-arrow"
          :class="posX == 0 ? 'disabled' : ''"
          @click="minPos"
        >
          <img src="@/assets/images/icons/caret-left.svg" alt="icon" />
        </button>
        <button
          type="button"
          class="btn btn-small btn-arrow ms-2"
          :class="posX == 2400 ? 'disabled' : ''"
          @click="addPos"
        >
          <img src="@/assets/images/icons/caret-right.svg" alt="icon" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import Hammer from "hammerjs";

import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";

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
const emit = defineEmits(["swipeUp", "swipeDown"]);

const data = ref([
  {
    id: 1,
    title: "InterconnectDATA",
    date: "2021",
    image: require("@/assets/images/iclogo.svg"),
    website: "https://interconnectdata.com/",
    contact: {
      facebook: "https://www.facebook.com/Official.ICData/",
      facebook_icon: require("@/assets/images/fb.svg"),
      instagram: "https://www.instagram.com/interconnectdata/",
      instagram_icon: require("@/assets/images/ig.svg"),
      twitter: "https://mobile.twitter.com/icdata",
      twitter_icon: require("@/assets/images/twit.svg"),
    },
  },
  {
    id: 2,
    title: "Reliable Bussiness Service",
    date: "2021",
    image: require("@/assets/images/rbilogo.png"),
    website: "https://rb-investigation.com/",
    contact: {
      facebook: "#",
      facebook_icon: require("@/assets/images/fb.svg"),
      instagram: "https://www.instagram.com/reliablebusinessservices/",
      instagram_icon: require("@/assets/images/ig.svg"),
      twitter: "#",
      twitter_icon: require("@/assets/images/twit.svg"),
    },
  },
  {
    id: 3,
    title: "Arthology Branding Consultant",
    date: "2021",
    image: require("@/assets/images/artlogo.svg"),
    website: "https://arthology.id/",
    contact: {
      facebook: "#",
      facebook_icon: require("@/assets/images/fb.svg"),
      instagram: "https://www.instagram.com/arthology.id/",
      instagram_icon: require("@/assets/images/ig.svg"),
      twitter: "#",
      twitter_icon: require("@/assets/images/twit.svg"),
    },
  },
  {
    id: 4,
    title: "Makasi",
    date: "2021",
    image: require("@/assets/images/product/logo-makasi.svg"),
    website: "https://makasipos.com/",
    contact: {
      facebook:
        "https://www.facebook.com/people/Makasi-Indonesia/100083488881963/",
      facebook_icon: require("@/assets/images/fb.svg"),
      instagram: "https://www.instagram.com/makasipos/",
      instagram_icon: require("@/assets/images/ig.svg"),
      twitter: "https://twitter.com/makasipos",
      twitter_icon: require("@/assets/images/twit.svg"),
    },
  },
]);

const goToUrl = (url) => {
  window.open(url, "_blank");
};

const posX = ref(0);
const addPos = () => {
  posX.value += 300;
};
const minPos = () => {
  posX.value -= 300;
};

onMounted(() => {
  var stage = document.getElementById("product");
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
#product {
  height: auto;
  width: 100%;
  padding: 0 140px;
  position: relative;
  z-index: 1;
  background-image: url("@/assets/images/bgproduct.png");

  .container-custom {
    padding: 80px 0;
    height: 100%;
    width: 100%;
    z-index: 2;

    h2 {
      font-family: "Albert Sans", sans-serif;
      font-weight: 600 !important;
      color: white;
    }

    .content-product {
      margin: 30px 0 0;
      display: flex;
      gap: 15px;
      width: 100%;
      padding: 0 0 20px 0;
      overflow-x: auto;
      scroll-snap-type: x mandatory;

      .card-product {
        min-width: 23%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 600px;
        background-color: white;
        border-radius: 5px;
        scroll-snap-align: start;

        .head {
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 20px 0;
          border-bottom: 1px solid rgba(184, 189, 198, 0.3);

          img {
            width: 100%;
            object-fit: contain;
          }

          .open-reg-18 {
            color: #8d8f9a;
          }
        }

        .head img:last-child {
          height: 150px;
        }

        .footer {
          margin: auto 0 0;
          width: 100%;

          .contacts {
            width: 100%;
            max-width: 250px;
            margin: 20px auto 0;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  #product .container-custom .content-product .card-product {
    width: 250px;
    min-width: 200px !important;
    height: 500px !important;
  }

  #product .container-custom .content-product .monts-bold-23 {
    font-size: 20px !important;
  }
}

@media screen and (max-width: 1200px) {
  #product .container-custom .content-product .card-product {
    min-width: 30% !important;
  }
}

@media screen and (max-width: 1044px) {
  #product .container-custom .content-product .card-product {
    width: 250px !important;
    min-width: 300px !important;
  }
}

@media screen and (max-width: 768px) {
  #product {
    padding: 0 30px;
  }
}

@media screen and (max-width: 991px) {
  #sectionNumberOurProduct {
    margin: 0 0 20px;
  }
}

@media screen and (max-width: 400px) {
  #product .container-custom .content-product .card-product {
    width: 280px !important;
    min-width: 280px !important;
  }
}

@media screen and (max-width: 356px) {
  #product .container-custom .content-product .card-product {
    width: 250px !important;
    min-width: 250px !important;
  }
}

@media screen and (max-width: 318px) {
  #product .container-custom .content-product .card-product {
    width: 230px !important;
    min-width: 230px !important;
  }
}
</style>
