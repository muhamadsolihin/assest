<template>
	<!-- <MenuComponent :theme="'dark'" @goMenu="scrollToTop" /> -->
	<div id="assessment">
	  <page-list />
	</div>
  </template>
  
  <script setup>
  import PageList from "./components/PageList.vue"

  
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
  