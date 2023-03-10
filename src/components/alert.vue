<template>
    <div class="card">
      <div v-if="showSuccessAlert" class="success-alert">Form submitted successfully!</div>
      <!-- Your component code here -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showSuccessAlert: false,
      };
    },
    created() {
      const queryParams = new URLSearchParams(window.location.search);
      if (queryParams.get('form_success') === 'success') {
        this.showSuccessAlert = true;
      }
    },
  };
  </script>
  
  <style lang="scss" scoped>
.card {
  z-index: 999 !important;
  border: none;
  margin-top: -10%;
  background: transparent;
}
.success-alert {
  background-color: #e58146;
  color: white;
  padding: 16px;
  z-index: 999 !important;
  border-radius: 20px;
  text-align: center;
}
@media screen and (max-width: 567px) {
  .card {
    border: none;
    padding: 80px 0;
  }
}
  </style>
  