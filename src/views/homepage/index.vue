<template>
  <MenuComponent theme="dark" direction="up" />
  <!-- <loader> -->
  <!-- <transition :name="direction" @after-enter="listening = true" mode="out-in">
    <Home
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-if="currentSection == 1"
    />
    <Deliver
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 2"
    />
    <HowWeDo
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 3"
    />
    <HowWork
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 4"
    />
    <Stack
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 5"
    />
    <Services
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 6"
    />
    <Product
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      :theme="currentSection == 7 ? 'light' : 'dark'"
      v-else-if="currentSection == 7"
    />
    <Journey
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 8"
    />
    <Gallery
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 9"
    />
    <OurTeam
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 10"
    />
    <Blog
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 11"
    />
    <Blog v-else-if="currentSection == 10" />
    <FooterComponent
      :sections-length="sections.length"
      :current-section="currentSection"
      @toTop="currentSection = 1"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 12"
    />
  </transition> -->

  <Home :sections-length="sections.length" :current-section="sections[0]" />
  <Deliver :sections-length="sections.length" :current-section="sections[1]" />
  <HowWeDo :sections-length="sections.length" :current-section="sections[2]" />
  <HowWork :sections-length="sections.length" :current-section="sections[3]" />
  <Stack :sections-length="sections.length" :current-section="sections[4]" />
  <Services :sections-length="sections.length" :current-section="sections[5]" />
  <Product :sections-length="sections.length" :current-section="sections[6]" />
  <Journey :sections-length="sections.length" :current-section="sections[7]" />
  <Gallery :sections-length="sections.length" :current-section="sections[8]" />
  <OurTeam :sections-length="sections.length" :current-section="sections[9]" />
  <Blog :sections-length="sections.length" :current-section="sections[10]" />

  <FooterComponent
    :sections-length="sections.length"
    :current-section="sections[11]"
  />
</template>

<script setup>
import gsap from "gsap";
import { onMounted, ref } from "vue";

import ScrollTrigger from "gsap/ScrollTrigger";
import MenuComponent from "@/components/MenuComponent.vue";
// import loader from "@/components/Loader.vue";
import Home from "./components/home.vue";
import Deliver from "./components/Deliver.vue";
import HowWeDo from "./components/howWeDo.vue";
import HowWork from "./components/HowWork.vue";
import Stack from "./components/stack.vue";
import Services from "./components/services.vue";
import Product from "./components/Product.vue";
import Journey from "./components/Journey.vue";
import Gallery from "./components/Gallery.vue";
import OurTeam from "./components/OurTeam.vue";
import Blog from "./components/blog.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const sections = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
// const currentSection = ref(1);
// const listening = ref(false);
// const direction = ref("up");

// function go(dir) {
//   listening.value = false;

//   if (currentSection.value + dir < 1) {
//     currentSection.value = 1;
//     listening.value = true;
//   } else if (currentSection.value + dir >= sections.value.length) {
//     currentSection.value = sections.value.length - 1;
//     listening.value = true;
//   } else {
//     currentSection.value += dir;
//   }
// }

//Mouse Wheel Scroll Transition
// let scrollTimeout;
// function wheel(e) {
//   if (!listening.value) return false;
//   clearTimeout(scrollTimeout);
//   setTimeout(function () {
//     if (e.deltaY < -40) {
//       direction.value = "up";
//       go(-1);
//     } else if (e.deltaY >= 40) {
//       direction.value = "down";
//       go(1);
//     }
//   });
// }

// function swipeUp() {
//   direction.value = "down";
//   go(1);
// }

// function swipeDown() {
//   direction.value = "up";
//   go(-1);
// }

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from("#deliverLeft", {
    scrollTrigger: {
      trigger: "#deliverLeft",
      toggleActions: "play none none reverse",
    },
    x: -200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#deliverRight", {
    scrollTrigger: {
      trigger: "#deliverRight",
      toggleActions: "play none none reverse",
    },
    x: 200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#sectionNumberMobile", {
    scrollTrigger: {
      trigger: "#sectionNumberMobile",
      toggleActions: "play none none reverse",
    },
    x: -200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#headerHowWeDo", {
    scrollTrigger: {
      trigger: "#headerHowWeDo",
      toggleActions: "play none none reverse",
    },
    x: -200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#sectionNumber", {
    scrollTrigger: {
      trigger: "#sectionNumber",
      toggleActions: "play none none reverse",
    },
    x: 200,
    duration: 1,
    opacity: 0,
  });

  gsap.from(".title-list", {
    scrollTrigger: {
      trigger: ".title-list",
      toggleActions: "play none none reverse",
    },
    y: 200,
    duration: 1,
    opacity: 0,
  });

  gsap.from(".title-list-mobile", {
    scrollTrigger: {
      trigger: ".title-list-mobile",
      toggleActions: "play none none reverse",
    },
    x: -200,
    duration: 1,
    opacity: 0,
  });

  gsap.from(".description-list", {
    scrollTrigger: {
      trigger: ".description-list",
      toggleActions: "play none none reverse",
    },
    y: 200,
    duration: 1,
    opacity: 0,
  });

  /* Animation for section tech stack */
  gsap.from("#sectionNumberTechStackMobile", {
    scrollTrigger: {
      trigger: "#sectionNumberTechStackMobile",
      toggleActions: "play none none reverse",
    },
    x: -200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#sectionNumberTechStack", {
    scrollTrigger: {
      trigger: "#sectionNumberTechStack",
      toggleActions: "play none none reverse",
    },
    x: -200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#allTechStackImg", {
    scrollTrigger: {
      trigger: "#allTechStackImg",
      toggleActions: "play none none reverse",
    },
    y: 200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#allTechStackImgMobile", {
    scrollTrigger: {
      trigger: "#allTechStackImgMobile",
      toggleActions: "play none none reverse",
    },
    y: 200,
    duration: 1,
    opacity: 0,
  });

  gsap.from(".wrapper-tech-stack", {
    scrollTrigger: {
      trigger: ".wrapper-tech-stack",
      toggleActions: "play none none reverse",
    },
    y: 200,
    duration: 1,
    opacity: 0,
  });
  /* End */

  /* Animation for section service */
  gsap.from("#service .content-service div", {
    scrollTrigger: {
      trigger: "#service .content-service div",
      toggleActions: "play none none reverse",
    },
    y: 200,
    duration: 1,
    opacity: 0,
  });
  /* End */

  /* Animation for section journey */
  gsap.from("#journey .container-custom .left #sectionNumberJourney", {
    scrollTrigger: {
      trigger: "#journey .container-custom .left #sectionNumberJourney",
      toggleActions: "play none none reverse",
    },
    x: -200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#journey .container-custom .left h2", {
    scrollTrigger: {
      trigger: "#journey .container-custom .left h2",
      toggleActions: "play none none reverse",
    },
    x: -200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#journey .container-custom .left .open-reg-24", {
    scrollTrigger: {
      trigger: "#journey .container-custom .left .open-reg-24",
      toggleActions: "play none none reverse",
    },
    x: -200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#journey .container-custom .left .pic-weekly-event", {
    scrollTrigger: {
      trigger: "#journey .container-custom .left .pic-weekly-event",
      toggleActions: "play none none reverse",
    },
    x: -200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#journey .container-custom .right .pic-ceo", {
    scrollTrigger: {
      trigger: "#journey .container-custom .right .pic-ceo",
      toggleActions: "play none none reverse",
    },
    x: 200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#journey .container-custom .right .pic-ceo-small", {
    scrollTrigger: {
      trigger: "#journey .container-custom .right .pic-ceo-small",
      toggleActions: "play none none reverse",
    },
    x: 200,
    duration: 1,
    opacity: 0,
  });
  /* End */

  /* Animation for section gallery */
  gsap.from("#gallery .container-custom .header", {
    scrollTrigger: {
      trigger: "#gallery .container-custom .header",
      toggleActions: "play none none reverse",
    },
    y: 200,
    duration: 1,
    opacity: 0,
  });

  gsap.from("#gallery .container-custom .content", {
    scrollTrigger: {
      trigger: "#gallery .container-custom .content",
      toggleActions: "play none none reverse",
    },
    y: 200,
    duration: 1,
    opacity: 0,
  });
  /* End */

  /* Animation for section gallery */
  // gsap.from("#our-team .container-custom .header", {
  //   scrollTrigger: {
  //     trigger: "#our-team .container-custom .header",
  //     toggleActions: "play none none reverse",
  //   },
  //   y: 200,
  //   duration: 1,
  //   opacity: 0,
  // });

  gsap.from(
    "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(1)",
    {
      scrollTrigger: {
        trigger:
          "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(1)",
        toggleActions: "play none none reverse",
      },
      y: 200,
      duration: 1,
      opacity: 0,
    }
  );

  gsap.from(
    "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(2)",
    {
      scrollTrigger: {
        trigger:
          "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(2)",
        toggleActions: "play none none reverse",
      },
      y: 200,
      delay: 0.3,
      duration: 1,
      opacity: 0,
    }
  );

  gsap.from(
    "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(3)",
    {
      scrollTrigger: {
        trigger:
          "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(3)",
        toggleActions: "play none none reverse",
      },
      y: 200,
      delay: 0.6,
      duration: 1,
      opacity: 0,
    }
  );

  gsap.from(
    "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(4)",
    {
      scrollTrigger: {
        trigger:
          "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(4)",
        toggleActions: "play none none reverse",
      },
      y: 200,
      delay: 0.9,
      duration: 1,
      opacity: 0,
    }
  );

  gsap.from(
    "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(5)",
    {
      scrollTrigger: {
        trigger:
          "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(5)",
        toggleActions: "play none none reverse",
      },
      y: 200,
      delay: 1.2,
      duration: 1,
      opacity: 0,
    }
  );

  gsap.from(
    "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(6)",
    {
      scrollTrigger: {
        trigger:
          "#our-team .container-custom .section-body .photo-section .photo-container:nth-child(6)",
        toggleActions: "play none none reverse",
      },
      y: 200,
      delay: 1.5,
      duration: 1,
      opacity: 0,
    }
  );
  /* End */

  // window.addEventListener("mousewheel", wheel, false);
  // window.addEventListener("wheel", wheel, false);

  // //Press Up & Down Keyboard Arrow Event
  // window.addEventListener("keydown", function (e) {
  //   if (["ArrowDown", "ArrowRight"].includes(e.key)) {
  //     direction.value = "down";
  //     go(1);
  //   } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
  //     direction.value = "up";
  //     go(-1);
  //   }
  // });

  // listening.value = true;
});
</script>

<style lang="scss" scoped>
// section {
//   min-height: 100vh;
//   display: flex;
// }
</style>
