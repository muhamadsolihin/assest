<template>
  <div id="bitrix">
    <div class="d-flex flex-column bitrix">
      <div ref="bitrixForm"></div>

      <div
        class="d-flex flex-column w-100 justify-content-left align-items-center"
      >
        <div class="d-flex flex-row me-auto mt-5">
          <img src="@/assets/images/icons/agree.svg" alt="icon" />
          <a
            href="/third-party"
            class="mb-0 agree-link ms-2 fw-500"
            style="color: black"
          >
            I agree to receive other communications from TCI
          </a>
        </div>
        <div class="d-flex flex-row mt-3 me-auto">
          <img src="@/assets/images/icons/agree.svg" alt="icon" />
          <a
            href="/third-party"
            class="mb-0 agree-link ms-2 fw-500"
            style="color: black"
          >
            I agree to allow TCI to store and process my personal data
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const bitrixForm = ref(null);

onMounted(() => {
  const scriptUrl = "https://cdn.bitrix24.com/b23740419/crm/form/loader_32.js";
  const scriptAttributes = {
    "data-b24-form": "inline/32/5i6vek",
    "data-skip-moving": "true",
    async: "true",
  };
  const script = document.createElement("script");
  script.setAttribute("src", scriptUrl);
  Object.keys(scriptAttributes).forEach((key) => {
    script.setAttribute(key, scriptAttributes[key]);
  });
  bitrixForm.value.appendChild(script);
});
</script>

<style lang="scss" scoped>
.bitrix {
  width: 100%;
  padding: 0 33vw;
  margin-top: -18%;
}
@media screen and (max-width: 768px) {
  .bitrix {
    padding: 0 20vw;
    margin-top: -28%;
  }
}
@media screen and (max-width: 567px) {
  .bitrix {
    padding: 0 10vw !important;
    margin-top: -35% !important;
  }
}
</style>
