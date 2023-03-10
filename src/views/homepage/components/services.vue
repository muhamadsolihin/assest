<template>
  <section id="service">
    <BorderContainer
      :theme="'light'"
      style="z-index: -1"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div class="container-custom">
      <div class="row header-service">
        <div class="col-12 col-lg-6 order-2 order-lg-1">
          <h2>Our Services</h2>
          <div class="shape"></div>
        </div>
        <div
          class="col-12 col-lg-6 order-1 order-lg-2 d-flex align-items-start justify-content-start justify-content-lg-end"
        >
          <SectionNumberComponent
            id="sectionNumberService"
            number="06 / 11"
            section-name="Our Services"
          />
        </div>
      </div>

      <div class="row content-service">
        <div
          class="col-12 col-lg-6 order-2 order-lg-1 d-flex justify-content-center"
        >
          <ul class="nav d-flex">
            <div class="d-flex flex-column">
              <li class="nav-item menu-0 flex-equal">
                <a
                  class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 fs-6 fw-bold active"
                  data-bs-target="#kt_lists_widget_3_tab_pane_1"
                  data-bs-toggle="tab"
                >
                  <img
                    class="pic-nav"
                    src="@/assets/images/animate/consutant.svg"
                  />
                </a>
              </li>
              <li class="nav-item align-self-center menu-1 flex-equal">
                <a
                  class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 fs-6 fw-bold"
                  data-bs-target="#kt_lists_widget_3_tab_pane_2"
                  data-bs-toggle="tab"
                >
                  <img
                    class="data-centre"
                    src="@/assets/images/animate/dataanimate.svg"
                  />
                </a>
              </li>
            </div>
            <div class="d-flex flex-column">
              <li class="nav-item menu-2 flex-equal mx-1">
                <a
                  class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 fs-6 fw-bold"
                  data-bs-target="#kt_lists_widget_3_tab_pane_3"
                  data-bs-toggle="tab"
                >
                  <img src="@/assets/images/animate/digital.svg" />
                </a>
              </li>
              <li class="nav-item menu-3 flex-equal">
                <a
                  class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 fs-6 fw-bold"
                  data-bs-target="#kt_lists_widget_3_tab_pane_4"
                  data-bs-toggle="tab"
                >
                  <img src="@/assets/images/cyberanimate.svg" />
                </a>
              </li>
            </div>

            <!-- <div class="row">
              <div class="col-md-6">
                <li class="nav-item menu-0 flex-equal">
                  <a
                    class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold active"
                    data-bs-target="#kt_lists_widget_3_tab_pane_1"
                    data-bs-toggle="tab"
                  >
                    <img
                      class="pic-nav"
                      src="@/assets/images/animate/consutant.svg"
                    />
                  </a>
                </li>

                <li class="nav-item menu-1 flex-equal" style="margin-top: 55px">
                  <a
                    class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                    data-bs-target="#kt_lists_widget_3_tab_pane_2"
                    data-bs-toggle="tab"
                  >
                    <img
                      class="data-centre"
                      src="@/assets/images/animate/dataanimate.svg"
                    />
                  </a>
                </li>
              </div>
              <div class="col-md-6">
                <li class="nav-item menu-2 flex-equal mx-1">
                  <a
                    class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                    data-bs-target="#kt_lists_widget_3_tab_pane_3"
                    data-bs-toggle="tab"
                  >
                    <img src="@/assets/images/animate/digital.svg" />
                  </a>
                </li>
                <li class="nav-item menu-3 flex-equal" style="margin-top: 55px">
                  <a
                    class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                    data-bs-target="#kt_lists_widget_3_tab_pane_4"
                    data-bs-toggle="tab"
                  >
                    <img src="@/assets/images/cyberanimate.svg" />
                  </a>
                </li>
              </div>
            </div> -->
          </ul>
        </div>

        <div class="col-12 col-lg-6 order-1 order-lg-2">
          <div class="tab-content">
            <div
              v-for="item in data"
              style="opacity: 1"
              :class="[`${item.id == 1 ? 'active show' : ''}`, 'tab-pane fade']"
              :id="`kt_lists_widget_3_tab_pane_${item.id}`"
            >
              <h3>{{ item.title }}</h3>
              <p class="open-reg-18">{{ item.content }}</p>
            </div>
          </div>
        </div>
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
    title: "IT Consultant",
    content:
      "With our IT Consultant services, we could help you revamp your IT Environment and synchronize it with your business needs, leveraging the experiences inside it. We also offer consultancy on holistic, fast, and cost-effective optimization of IT Systems and Processes to ensure tangible business outcomes for you.",
  },
  {
    id: 2,
    title: "Digital Transformation",
    content:
      "We are here to empower every enterprise across multiple industries with the most suitable IT Solutions to build up new technology-based business models that meet the requirements of modern business environment.",
  },
  {
    id: 3,
    title: "Data Center & Infrastructures",
    content:
      "We will assist you in planning, designing, developing, and implementing the infrastructure of your data center. We deliver detailed documentation to facilitate the upgrade, migration, and diagnostic processes.",
  },
  {
    id: 4,
    title: "Cyber Security",
    content:
      "Our security experts develop a personal approach to each customer based on best practices and enriched that with our own experience. We offer a variety of services from information security consulting to assessing, testing, and improving the protection of applications and networks for companies.",
  },
]);

onMounted(() => {
  var stage = document.getElementById("service");
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
#service {
  height: auto;
  width: 100%;
  padding: 0 140px;
  position: relative;
  z-index: 1;
  background-color: white;

  .container-custom {
    padding: 80px 0;
    height: 100%;
    width: 100%;

    .shape {
      width: 38px;
      height: 22px;
      background-color: #0c4aa9;
    }

    .content-service {
      margin: 50px 0;

      .nav {
        width: 350px;
        gap: 20px;
        justify-content: center;

        div {
          gap: 20px;
        }
      }

      .nav-item {
        width: 130px;
        height: 130px;
      }

      .nav-item .nav-link {
        border: none;
        padding: 15px;
      }

      .tab-content div {
        margin: 20px 0;
      }
    }
  }
}

.btn.btn-active-white:focus:not(.btn-active),
.btn:hover {
  color: #7e8299;
  // border-color: #ffffff;
  // //   width: 120px;
  // // height: 128px;
  // background-color: #fff;
  transition: 0.5s;
  box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
  @media screen and (max-width: 567px) {
    box-shadow: none;
    animation: pulse 1s infinite;
    transition: 0.3s;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@media screen and (max-width: 992px) {
  #sectionNumberService {
    margin: 0 0 20px 0;
  }

  .tab-content h3,
  p {
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  #service {
    padding: 0 30px;
  }

  #service .content-service {
    gap: 20px;
  }

  #service .content-service .nav {
    width: 306px !important;
  }
}

@media screen and (max-width: 600px) {
  #service .container-custom h2,
  .shape {
    display: none !important;
  }

  #service .container-custom .content-service {
    margin: 0 !important;

    .tab-content h3 {
      font-size: 30px !important;
    }
  }
}

@media screen and (max-width: 465px) {
  #service .container-custom .content-service .tab-content h3 {
    font-size: 25px !important;
  }

  .open-reg-18 {
    font-size: 14px !important;
    line-height: 1.8;
  }
}

@media screen and (max-width: 390px) {
  #service .container-custom .content-service .nav {
    gap: 5px !important;
    width: auto !important;
    flex-wrap: nowrap;
  }
}
</style>
