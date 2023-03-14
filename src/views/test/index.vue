<template>
	<div id="assessment">
	  <HeroSection />
	  <list-movie />
	  <!-- <page-list /> -->
	</div>
  </template>
  
  <script setup>
  import HeroSection from "./components/Home.vue";
  import ListMovie from "./components/listMovie.vue"
  
  const scrollToTop = () => {
	window.scrollTo(0, 0);
  };
  </script>
  
  <style lang="scss" scoped>
  section {
	min-height: 100vh;
	display: flex;
  }
  </style>
  