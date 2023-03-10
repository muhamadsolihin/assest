<template>
  <div
    ref="navigation"
    style="width: 100vw"
    class="navbar fixed-top py-3 d-flex flex-row justify-content-between align-items-center"
  >
    <!-- <img class="d-none d-md-block" src="@/assets/images/TCI.svg" />
    <img class="d-md-none" src="@/assets/images/tci-logo-2.svg" alt="logo" />
    <img
      class="pointer"
      src="@/assets/images/icons/menu.svg"
      @click="goToMenu"
    /> -->
    <transition :name="direction" mode="out-in">
      <img
        class="d-md-none"
        src="@/assets/images/tci-logo-2.svg"
        alt="logo"
        v-if="theme == 'dark'"
      />
      <img
        class="d-md-none"
        src="@/assets/images/tci-logo-2.svg"
        alt="logo"
        v-else
      />
    </transition>
    <transition :name="direction" mode="out-in">
      <img
        class="d-none d-md-block"
        src="@/assets/images/TCI.svg"
        @click="$router.replace('/')"
        style="cursor: pointer"
        v-if="theme == 'dark'"
      />
      <img
        class="d-none d-md-block"
        src="@/assets/images/TCI-dark.svg"
        @click="$router.replace('/')"
        style="cursor: pointer"
        v-else
      />
    </transition>
    <transition :name="direction" mode="out-in">
      <img
        class="pointer me-2"
        src="@/assets/images/icons/menu.svg"
        @click="goToMenu"
        v-if="theme == 'dark'"
      />
      <img
        class="pointer me-2"
        src="@/assets/images/icons/menu-dark.svg"
        @click="goToMenu"
        v-else
      />
    </transition>
  </div>
  <transition name="ease" mode="out-in">
    <div
      class="container-fluid"
      style="
        position: fixed;
        height: 100%;
        width: 100vw;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(10px);
        z-index: 100;
        top: 0;
      "
      v-if="showMenu"
    >
      <div
        class="container py-3 d-flex flex-row justify-content-end align-items-center"
        style="padding: 0 60px"
      >
        <div class="d-flex flex-column align-items-end text-white w-100">
          <img
            class="my-3 pointer"
            src="@/assets/images/icons/close.svg"
            style="width: 24px; height: 24px"
            @click="showMenu = false"
          />
          <transition-group
            appear
            tag="ul"
            @before-enter="beforeMenuEnter"
            @enter="menuEnter"
          >
            <li
              class="pointer"
              v-for="(mn, indexMn) in menu"
              :key="indexMn"
              :data-index="indexMn"
            >
              <router-link :to="mn.link">{{ mn.text }}</router-link>
            </li>
          </transition-group>

          <p class="ibm-semibold-16">Location</p>
          <p class="open-reg-18 address" style="text-align: end">
            PT Teknologi Cakra Internasional<br />Jl. Batununggal Indah IV
            No.45, Mengger, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40267
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";

const props = defineProps({
  theme: {
    type: String,
    require: true,
  },
  direction: {
    type: String,
    require: true,
  },
});
const emit = defineEmits(["goMenu"]);

const showMenu = ref(false);
const menu = ref([
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Who We Are",
    link: "/who-we-are",
  },
  {
    text: "Our Work",
    link: "/Our-Work",
  },
  {
    text: "Our Gallery",
    link: "/our-gallery",
  },
  {
    text: "Careers",
    link: "/careers",
  },
  {
    text: "Contact Us",
    link: "/contact-us",
  },
]);
const navigation = ref();

const beforeMenuEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateX(200px)";
};

const menuEnter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    duration: 0.8,
    onComplete: done,
    delay: el.dataset.index * 0.2,
  });
};

const goToMenu = () => {
  showMenu.value = true;
  emit("goMenu");
};

window.addEventListener("scroll", () => {
  if (window.scrollY) {
    navigation.value.classList.add("blur");
  } else {
    navigation.value.classList.remove("blur");
  }
});
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 5;
  background-color: transparent;
  padding: 0 145px;
}
.blur {
  backdrop-filter: blur(10px);
  background-color: rgb(210, 210, 210, 0.7);
  transition: 0.5s;
}
ul {
  padding: 15px 0 15px 40px;
  text-align: end;
  list-style-type: none;
  border-bottom: 4px solid #e68246;
  li {
    margin-bottom: 5px;
    font-family: "Montserrat", sans-serif;
    font-size: 50px;
    line-height: 61px;
    font-weight: 300;
    a {
      color: white;
      text-decoration: none;
    }
  }
}
.address {
  width: 50%;
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 0 30px;
  }
  ul {
    li {
      font-size: 40px;
    }
  }
  .address {
    width: 100%;
  }
}
</style>
