<template>
	<!-- <MenuComponent :theme="'dark'" @goMenu="scrollToTop" /> -->
	<div id="assessment">
	  <page-list />
	</div>
  </template>
  
  <script setup>
  import PageList from "./components/PageList.vue"
  </script>
  
  <style lang="scss" scoped>
  section {
	min-height: 100vh;
	display: flex;
  }
  </style>
  