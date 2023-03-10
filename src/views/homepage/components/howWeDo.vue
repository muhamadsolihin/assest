<template>
  <section id="howWeDoIt">
    <BorderContainer
      :theme="'light'"
      style="z-index: -1"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div class="container-custom">
      <SectionNumberComponent
        id="sectionNumberMobile"
        class="mb-3 d-flex d-md-none"
        :number="'03 / 11'"
        :section-name="'How We Do It'"
        :color="'#000000'"
      />
      <div class="d-flex flex-row align-items-center flex-wrap">
        <h2 id="headerHowWeDo">How We Do It</h2>
        <SectionNumberComponent
          id="sectionNumber"
          class="ms-auto d-none d-md-flex"
          :number="'03 / 11'"
          :section-name="'How We Do It'"
          :color="'#000000'"
        />
      </div>

      <div class="shape"></div>

      <div class="content d-flex align-items-center" style="height: auto">
        <div class="row">
          <div class="col-12 col-xl-6 title-list d-flex justify-content-center">
            <ul class="nav d-flex flex-column">
              <!--begin::Tab nav-->
              <li class="nav-item">
                <a
                  class="nav-link btn btn-active-white head py-2 px-4 fs-6 fw-semibold active"
                  data-bs-toggle="tab"
                  href="#list-1"
                  >01 &nbsp;Positive impact in development</a
                >
              </li>
              <li class="nav-item mt-3 flex-equal">
                <a
                  class="nav-link btn btn-active-white head btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-semibold"
                  data-bs-toggle="tab"
                  href="#list-2"
                  >02 &nbsp;Adaptive solution development</a
                >
              </li>
              <li class="nav-item mt-3 flex-equal">
                <a
                  class="nav-link btn btn-active-white head btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-semibold"
                  data-bs-toggle="tab"
                  href="#list-3"
                  >03 &nbsp;User oriented group of talents</a
                >
              </li>
              <li class="nav-item mt-3">
                <a
                  class="nav-link btn btn-active-white head btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-semibold"
                  data-bs-toggle="tab"
                  href="#list-4"
                  >04 &nbsp;Sustainable way of achieving</a
                >
              </li>
              <!--end::Tab nav-->
              <!--begin::Tab nav-->
              <!--end::Tab nav-->
            </ul>
          </div>

          <div class="col-12 title-list-mobile">
            <ul class="nav d-flex">
              <!--begin::Tab nav-->
              <li
                class="nav-item d-flex align-items-center justify-content-center"
              >
                <a
                  class="nav-link btn btn-active-white open-reg-18 active"
                  @click="setActivePointMobile(1)"
                  data-bs-toggle="tab"
                  href="#list-1"
                >
                  01
                  <span v-if="activePointMobile == 1"
                    >&nbsp;Positive impact in development</span
                  >
                </a>
              </li>
              <li
                class="nav-item d-flex align-items-center justify-content-center"
              >
                <a
                  class="nav-link btn btn-active-white open-reg-18"
                  @click="setActivePointMobile(2)"
                  data-bs-toggle="tab"
                  href="#list-2"
                  >02<span v-if="activePointMobile == 2"
                    >&nbsp;Adaptive solution development</span
                  ></a
                >
              </li>
              <li
                class="nav-item d-flex align-items-center justify-content-center"
              >
                <a
                  class="nav-link btn btn-active-white open-reg-18"
                  @click="setActivePointMobile(3)"
                  data-bs-toggle="tab"
                  href="#list-3"
                  >03<span v-if="activePointMobile == 3"
                    >&nbsp;User oriented group of talents</span
                  ></a
                >
              </li>
              <li
                class="nav-item d-flex align-items-center justify-content-center"
              >
                <a
                  class="nav-link btn btn-active-white open-reg-18"
                  @click="setActivePointMobile(4)"
                  data-bs-toggle="tab"
                  href="#list-4"
                  >04<span v-if="activePointMobile == 4"
                    >&nbsp;Sustainable way of achieving</span
                  ></a
                >
              </li>
            </ul>
          </div>

          <div
            class="col-12 description-list col-xl-6 d-flex justify-content-center"
          >
            <div class="tab-content">
              <!--begin::Tab pane-->
              <div class="tab-pane fade active show" id="list-1">
                <!--begin::Section-->
                <p class="monts-bold-35">Positive impact in development</p>
                <p class="open-reg-18">
                  At every stage of product cycle we design solutions to meet
                  user needs and are easy to use. We invest our time in costumer
                  research, behavior learning and put all data into the test. We
                  leverage end-user centered in our process to deliver creative
                  solutions, create a seamless customer experiences and explore
                  new opportunities.
                </p>
                <!--end::Section-->
              </div>
              <!--end::Tab pane-->

              <!--begin::Tab pane-->
              <div class="tab-pane fade" id="list-2">
                <!--begin::Chart-->
                <p class="monts-bold-35">Adaptive solution development</p>
                <p class="open-reg-18">
                  We work with partners around The world from individual
                  Employers & regional start ups to multinational enterprises In
                  the public & private sectors, goverment and communities. We
                  work with partners around The world from individual Employers
                  & regional start ups to multinational enterprises In the
                  public & private sectors, goverment and communities.
                </p>
                <!--end::Chart-->
              </div>
              <!--end::Tab pane-->
              <!--begin::Tab pane-->
              <div class="tab-pane fade" id="list-3">
                <!--begin::Items-->
                <p class="monts-bold-35">User oriented group of talents</p>
                <p class="open-reg-18">
                  We communicate and co-operate with each other and With our
                  communities. We communicate and co-operate with each other and
                  With our communities. We communicate and co-operate with each
                  other and With our communities. We communicate and co-operate
                  with each other and With our communities. We communicate and
                  co-operate with each other and With our communities.
                </p>
              </div>
              <div class="tab-pane fade" id="list-4">
                <p class="monts-bold-35">Sustainable way of achieving</p>
                <p class="open-reg-18">
                  We question conventional wisdom & Challenge the status quo. If
                  there is a better way, we'll find it. We're excited By
                  ingenuity and thrilled to try something new. We question
                  conventional wisdom & Challenge the status quo. If there is a
                  better way, we'll find it. We're excited By ingenuity and
                  thrilled to try something new. We question conventional wisdom
                  & Challenge the status quo. If there is a better way, we'll
                  find it. We're excited By ingenuity and thrilled to try
                  something new.
                </p>
              </div>

              <!--end::Items-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Frame Bottom Left -->
    <img
      width="250"
      height="200"
      class="frame-bottom-left"
      :src="require('@/assets/images/frame-bottom-left.png')"
    />
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

const activePointMobile = ref(1);

const setActivePointMobile = (number) => {
  activePointMobile.value = number;
};

onMounted(() => {
  var stage = document.getElementById("howWeDoIt");
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
#howWeDoIt {
  height: 700px;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  position: relative;
  z-index: 2;

  .container-custom {
    padding: 80px 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;

    .content {
      margin: 80px 0;

      .title-list {
        .nav {
          .head {
            font-family: "IBM Plex Mono";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            color: #b8bdc6;
          }

          li:last-child {
            border-right: hidden !important;
          }
          .btn-check:checked + .btn.btn-active-white,
          .btn-check:active + .btn.btn-active-white,
          .btn.btn-active-white:focus:not(.btn-active),
          .btn.btn-active-white:hover:not(.btn-active),
          .btn.btn-active-white:active:not(.btn-active),
          .btn.btn-active-white.active,
          .btn.btn-active-white.show,
          .show > .btn.btn-active-white {
            color: #000;
            border: 1px solid #e78448 !important;
            width: 25em;
            background-color: #ffffff;
            box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
            @media screen and (max-width: 576px) {
              width: 20px;
            }
          }

          .nav-link {
            border-radius: 36px;
            border: 1px solid #b8bdc6;
            width: 25em;
          }
        }
      }

      .title-list-mobile {
        display: none;

        .nav {
          gap: 20px;

          .nav-item {
            .nav-link {
              border-radius: 100%;
              border: 1px solid #b8bdc6;
              opacity: 0.5;
              color: #b8bdc6;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: 0.2s;
              width: 32px;
              height: 32px;
            }

            .nav-link.active {
              border: 1px solid #e78448;
              border-radius: 36px;
              color: black;
              width: auto;
              opacity: 1;
            }
          }
        }
      }
    }

    .shape {
      width: 38px;
      height: 22px;
      background-color: #0c4aa9;
      margin-top: 10px;
    }
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0px);
  }
}

.frame-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
}

@media screen and (max-width: 1199px) {
  .content {
    .row {
      gap: 30px;
    }

    .title-list {
      display: none !important;
    }

    .title-list-mobile {
      display: block !important;
    }
  }
}

@media screen and (max-width: 900px) {
  #howWeDoIt {
    height: auto;

    .container-custom {
      .content {
        margin: 40px 0;
      }
    }

    .frame-bottom-left {
      display: none;
    }
  }
}

@media screen and (max-width: 870px) {
  #howWeDoIt {
    .container-custom {
      #sectionNumber {
        display: none !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #howWeDoIt {
    padding: 0 30px;

    .container-custom {
      height: 100%;
      padding: 50px 0;
      border: none;

      .shape {
        display: none;
      }

      .content {
        margin: 0;

        .row {
          gap: 15px;
        }

        .title-list-mobile {
          margin-top: 20px;
        }

        .monts-bold-35 {
          font-size: 25px;
          margin-bottom: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 543px) {
  #howWeDoIt {
    .container-custom {
      .content {
        .title-list-mobile {
          .nav {
            gap: 10px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 513px) {
  #howWeDoIt {
    .container-custom {
      .content {
        .title-list-mobile {
          .nav {
            gap: 10px;

            .open-reg-18 {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 465px) {
  #howWeDoIt {
    .container-custom {
      .content {
        .title-list-mobile {
          .nav {
            gap: 10px;

            .open-reg-18 {
              font-size: 12px;
            }
          }
        }

        .description-list {
          .monts-bold-35 {
            font-size: 20px;
          }

          .open-reg-18 {
            font-size: 14px;
            line-height: 1.8;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 417px) {
  #howWeDoIt {
    .container-custom {
      .content {
        .title-list-mobile {
          .nav {
            gap: 5px;

            .open-reg-18 {
              font-size: 12px;
            }
          }
        }

        .description-list {
          .monts-bold-35 {
            font-size: 20px;
          }

          .open-reg-18 {
            font-size: 14px;
            line-height: 1.8;
          }
        }
      }
    }
  }
}
</style>
