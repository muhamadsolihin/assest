<template>
  <section id="deliver">
    <BorderContainer
      style="z-index: 2"
      :theme="'light'"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div class="wrapper--deliver"></div>
    <div class="container-custom">
      <div class="row">
        <div id="deliverLeft" class="col-12 col-xl-6 d-flex align-items-start">
          <img
            class="mx-auto pic-cto"
            :class="imageHover ? 'image-hover' : 'image-unhover'"
            src="@/assets/images/pic-commisioner.png"
            alt="photo"
          />
        </div>
        <div id="deliverRight" class="col-12 col-xl-6">
          <div class="d-flex flex-column justify-content-center">
            <SectionNumberComponent
              class="me-auto"
              :number="'02 / 11'"
              :section-name="'Mission'"
              :color="'#000000'"
            />
            <h2 class="mt-2 title">
              We Deliver <br />
              Consistent Solutions
            </h2>
            <p class="text-paragraph text-grey">
              Using a combination of technology, process and talents we focus on
              our users needs and help to accelerate their business at any
              scale. We deliver consistent solutions and that is why we are all
              about the details and the end-users.
            </p>
            <p class="text-paragraph text-grey">
              We constantly listen to our user feedback through our development
              cycle to ensure a foundational setup for success. Whether it is to
              grow your business, get greater connection with customers.
            </p>
            <img
              class="mx-auto pic-cto-1"
              :class="imageHover ? 'image-hover' : 'image-unhover'"
              src="@/assets/images/imgGroup.png"
              alt="photo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Hammer from "hammerjs";
import { onMounted, ref } from "vue";

import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";

const props = defineProps({
  sectionsLength: {
    type: Number,
    require: false,
  },
  currentSection: {
    type: Number,
    require: false,
  },
});

const emit = defineEmits(["swipeUp", "swipeDown"]);

const imageHover = ref(false);

onMounted(() => {
  var stage = document.getElementById("deliver");
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
section {
  min-height: 100vh;
  display: flex;
}

#deliver {
  height: auto;
  width: 100%;
  max-width: 100vw;
  max-height: 700px;
  background-color: white;
  padding: 0 140px;
  position: relative;
  overflow: hidden;
  z-index: 2;

  .wrapper--deliver {
    top: 0;
    left: 0;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 550px;
    background-color: #eeeaea;
  }

  .container-custom {
    z-index: 2;
    height: 100%;
    width: 100%;
    padding: 80px 0;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;

    .pic-cto {
      width: 523px;
      height: 609px;
      object-fit: contain;
    }

    .pic-cto-1 {
      width: 528px;
      height: 340px;
      object-fit: contain;
    }
  }
}

.text-paragraph {
  font-size: 18px;
}

@media screen and (max-width: 1440px) {
  #deliver {
    .container-custom {
      .pic-cto {
        width: 423px;
        height: 509px;
        object-fit: contain;
      }

      .pic-cto-1 {
        width: 428px;
        height: auto;
        object-fit: contain;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  #deliver {
    max-height: none;

    .container-custom {
      .row {
        gap: 30px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #deliver {
    padding: 0 30px;

    .container-custom {
      height: 100%;
      padding: 80px 0;
      border: none;

      .pic-cto {
        width: 400px;
        height: 609px;
        object-fit: contain;
      }

      .pic-cto-1 {
        width: 100%;
        height: 340px;
        object-fit: contain;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  #deliver {
    .container-custom {
      .pic-cto {
        width: 423px;
        height: 509px;
        object-fit: contain;
      }

      .pic-cto-1 {
        width: 100%;
        height: 340px;
        object-fit: contain;
      }
    }
  }
}

@media screen and (max-width: 510px) {
  #deliver {
    .wrapper--deliver {
      height: 450px;
    }

    .container-custom {
      .pic-cto {
        width: 326px;
        height: 409px;
        object-fit: contain;
      }

      .pic-cto-1 {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
}

// .image-hover {
//   animation: popup 1s ease-out;
//   transform: scale(1.1);
// }
// .image-unhover {
//   animation: popdown 1s ease-out;
//   transform: scale(1);
// }
// @keyframes popup {
//   from {
//     transform: scale(1);
//   }
//   to {
//     transform: scale(1.1);
//   }
// }
// @keyframes popdown {
//   from {
//     transform: scale(1.1);
//   }
//   to {
//     transform: scale(1);
//   }
// }
</style>
