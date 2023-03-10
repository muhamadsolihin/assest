<template>
  <MenuComponent :theme="'dark'" />
  <HeroSection />
  <AcceleratedSection />
  <CoreValueSection />
  <VisionMissionSection />
  <OurPeople />
  <DiversitySection />
  <DownloadAssetSection />
  <FooterComponent :sections-length="9" :current-section="8" @toTop="scrollToTop" />
</template>

<script setup>
import MenuComponent from "@/components/MenuComponent.vue";
import HeroSection from "./components/HeroSection.vue";
import AcceleratedSection from "./components/AcceleratedSection.vue";
import CoreValueSection from "./components/CoreValueSection.vue";
import VisionMissionSection from "./components/VisionMissionSection.vue";
import OurPeople from "./components/OurPeople.vue";
import DiversitySection from "./components/DiversitySection.vue";
import DownloadAssetSection from "./components/DownloadAssetSection.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  display: flex;
}
</style>
