<template>
  <MenuComponent :theme="'dark'" :direction="'light'" @goMenu="scrollToTop" />
  <div id="Careers">
    <HeroSection />
    <Culture />
    <Careerpage />
    <SearchJob />
    <FooterComponent
      :sections-length="5"
      :current-section="4"
      @toTop="scrollToTop"
    />
  </div>
</template>

<script setup>
import MenuComponent from "@/components/MenuComponent.vue";
import HeroSection from "./components/HeroSection.vue";
import Culture from "./components/culture.vue";
import Careerpage from "./components/providing.vue";
import SearchJob from './components/searchJob.vue';
import FooterComponent from "@/components/FooterComponent.vue";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>
