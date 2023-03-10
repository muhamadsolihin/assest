<template>
  <section id="footer">
    <BorderContainer
      :theme="'light'"
      style="z-index: -1"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div class="container-custom">
      <div class="row mx-1 h-100">
        <div class="col-12 col-xl-8 py-5 discover px-0">
          <h2><span class="hashtag">#</span>Discover You Excellent</h2>
          <h2 class="title-thin">
            {{ description }}
          </h2>
          <div
            class="get-in-touch-mobile"
            @click="$router.replace('/contact-us')"
          >
            <p class="mb-0">Get in touch</p>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="15" stroke="#E78448" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.8381 12.5291L11.3799 21.9873L10.8636 21.471L20.322 12.0127L13.9847 12.0127L13.9847 11.1227L21.7279 11.1227L21.7286 18.8659L20.8386 18.866L20.8381 12.5291Z"
                fill="#E78448"
              />
            </svg>
          </div>
        </div>
        <div class="col-12 col-xl-4 py-5 discover position-relative px-0">
          <div class="get-in-touch" @click="$router.replace('/contact-us')">
            <p class="mb-0">Get in touch</p>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="15" stroke="#E78448" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.8381 12.5291L11.3799 21.9873L10.8636 21.471L20.322 12.0127L13.9847 12.0127L13.9847 11.1227L21.7279 11.1227L21.7286 18.8659L20.8386 18.866L20.8381 12.5291Z"
                fill="#E78448"
              />
            </svg>
          </div>
        </div>
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-end location"
        >
          <p class="ibm-semibold-16">Location</p>
          <p class="open-reg-12 text-regent-grey">
            PT. Teknologi Cakra Internasional<br />Jl. Batununggal Indah IV
            No.45, Mengger,<br />Kec. Bandung Kidul, Kota Bandung, Jawa Barat<br />40267
          </p>
        </div>
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-end find-us"
        >
          <p class="ibm-semibold-16 open-reg-12">Find Us</p>
          <a
            class="text-regent-grey pointer open-reg-12 w-50"
            href="https://www.facebook.com/TeknologiCakraInternasional/"
            target="_blank"
            style="text-decoration: none; z-index: 9"
          >
            <p class="open-reg-12">Facebook</p></a
          >
          <a
            class="text-regent-grey pointer open-reg-12 w-50"
            href="https://www.instagram.com/teknologicakrainternasional/"
            target="_blank"
            style="text-decoration: none; z-index: 9"
          >
            <p class="open-reg-12">Instagram</p></a
          >
          <a
            class="text-regent-grey pointer open-reg-12 w-50"
            href="https://www.linkedin.com/company/teknologicakrainternasional/"
            target="_blank"
            style="text-decoration: none; z-index: 9"
          >
            <p class="open-reg-12">Linkedin</p></a
          >
          <div
            class="to-top d-flex flex-column pointer open-reg-12"
            @click="toTop"
          >
            <img class="m-auto" src="@/assets/images/icons/arrow-up.svg" />
          </div>
        </div>
      </div>
    </div>
    <img class="tci-logo" src="@/assets/images/tci-logo.png" />
    <img class="asset-3" src="@/assets/images/asset-pattern.png" alt="asset" />
  </section>
</template>

<script setup>
import { defineProps, ref } from "vue";

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

const description = ref("Let us take you further than\n you’ve ever been");

const toTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const currentScreenWidth = window.screen.width;
if (currentScreenWidth <= 1199) {
  description.value = "Let us take you further than you’ve ever been";
}

window.addEventListener("resize", () => {
  const currentScreenWidth = window.screen.width;
  if (currentScreenWidth <= 1199) {
    description.value = "Let us take you further than you’ve ever been";
  } else {
    description.value = "Let us take you further than\n you’ve ever been";
  }
});
</script>

<style lang="scss">
#footer {
  height: 950px;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  position: relative;
  z-index: 2;

  .container-custom {
    padding: 80px 0 0 0;
    height: 100%;
    width: 100%;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;

    .hashtag {
      color: #e78448;
    }

    .title-thin {
      white-space: pre-line;
      font-weight: 500 !important;
    }

    .get-in-touch-mobile {
      cursor: pointer;
      border: 1px solid #000000;
      border-radius: 30px;
      padding: 10px;
      width: 280px;
      display: none;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 24px;
        margin: 0 10px 0;
        font-family: "IBM Plex Mono", sans-serif;
        font-weight: 400;
      }
    }

    .get-in-touch {
      cursor: pointer;
      border: 1px solid #000000;
      border-radius: 30px;
      padding: 10px;
      width: 280px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      right: 0;
      top: 100px;

      p {
        font-size: 24px;
        margin: 0 10px 0;
        font-family: "IBM Plex Mono", sans-serif;
        font-weight: 400;
      }
    }

    .discover {
      border-bottom: 1px solid #b8bdc6;
    }

    .location {
      padding: 0 40px;
      height: 50%;
    }

    .find-us {
      padding: 0 40px;
      height: 50%;
      border-left: 1px solid #b8bdc6;
      position: relative;
      .to-top {
        position: absolute;
        bottom: 0;
        right: -5px;
        height: 200px;
        width: 200px;
        border: 1px solid #b8bdc6;
        z-index: 1;
      }
    }
  }

  .tci-logo {
    position: absolute;
    height: 40%;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
  }

  .asset-3 {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
}

@media screen and (max-width: 1199px) {
  #footer .get-in-touch {
    display: none !important;
  }

  #footer .get-in-touch-mobile {
    display: flex !important;
    margin: 20px 0 0;
  }
}

@media screen and (max-width: 992px) {
  #footer {
    padding: 0 140px;
    height: auto;

    .container-custom {
      height: 100%;
      min-height: 600px;
      padding: 80px 0 0 0;
      border-left: 1px solid #b8bdc6;
      border-right: 1px solid #b8bdc6;

      .discover {
        border-bottom: none;
      }

      .location {
        padding: 0 3%;
        height: auto;
      }

      .find-us {
        padding: 0;
        border-left: none;
        height: auto;

        .to-top {
          height: 60px;
          width: 60px;
          img {
            height: 30px;
          }
        }
      }
    }

    .tci-logo {
      height: 40%;
      top: 50%;
      transform: translate(0, -30%);
    }
  }
}

@media screen and (max-width: 768px) {
  #footer {
    padding: 0 30px;
    .container-custom {
      height: 100%;
      padding: 80px 0 0 0;
      border: none;

      .discover {
        border-bottom: none;
      }

      .location {
        padding: 0;
        height: auto;
      }

      .find-us {
        padding: 0;
        border-left: none;
        height: auto;

        .to-top {
          height: 60px;
          width: 60px;
          img {
            height: 30px;
          }
        }
      }
    }

    .tci-logo {
      position: absolute;
      height: 200px;
      top: 275px !important;
      right: 0;
      z-index: -1;
    }
  }
}

@media screen and (max-width: 490px) {
  #footer .get-in-touch-mobile {
    padding: 5px !important;
    width: 230px !important;

    p {
      font-size: 20px !important;
      font-family: "IBM Plex Mono", sans-serif;
      margin: 0 10px 0;
      font-weight: 400;
    }
  }

  #footer .tci-logo {
    height: 150px !important;
  }
}

@media screen and (max-width: 400px) {
  #footer .get-in-touch-mobile {
    padding: 5px !important;
    width: 200px !important;

    p {
      font-size: 18px !important;
      font-family: "IBM Plex Mono", sans-serif;
      margin: 0 10px 0;
      font-weight: 400;
    }
  }
}

@media screen and (max-width: 368px) {
  #footer .tci-logo {
    top: 380px !important;
  }
}
</style>
