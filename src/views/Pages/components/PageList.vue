<template>
  <section id="howWeDoIt">
    <div class="container-custom">
      <div class="d-flex flex-wrap align-items-center flex-wrap">
        <p id="headerHowWeDo" class="text-white open-reg-26">Discover Movies</p>
      </div>
      <div class="d-flex flex-wrap">
        <div class="sort-by p-3 me-auto d-flex flex-column">
          <div class="label open-reg-16" style="color: #e5e5e5">
            Sort Result By
          </div>
          <select
            class="form-select mt-3 text-white"
            style="background: #e0e0e021"
            aria-label="Default select example"
          >
            <option selected class="text-white">Popularity</option>
            <option value="1" class="text-dark">One</option>
            <option value="2" class="text-dark">Two</option>
            <option value="3" class="text-dark">Three</option>
          </select>
          <label class="open-reg-16 text-white mt-3">Genres</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckDefault"
            >
              Action
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckChecked"
            >
              Adventure
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckChecked"
            >
              Animation
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckChecked"
            >
              Comedy
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckChecked"
            >
              Crime
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckChecked"
            >
              Documentary
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckChecked"
            >
              Drama
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckChecked"
            >
              Family
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckChecked"
            >
              Fantasy
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckChecked"
            >
              History
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              class="form-check-label open-reg-14 text-white"
              for="flexCheckChecked"
            >
              Horror
            </label>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div class="images d-flex flex-wrap ms-2">
            <img :src="photoList[0]" class="me-3" alt="photo" />
            <img :src="photoList[1]" class="me-3" alt="photo" />
            <img :src="photoList[2]" class="me-3" alt="photo" />
            <img :src="photoList[3]" class="me-3" alt="photo" />
          </div>
          <div class="images pt-3 d-flex flex-wrap ms-2">
            <img :src="photoList[0]" class="me-3" alt="photo" />
            <img :src="photoList[1]" class="me-3" alt="photo" />
            <img :src="photoList[2]" class="me-3" alt="photo" />
            <img :src="photoList[3]" class="me-3" alt="photo" />
          </div>
        </div>
     
      </div>
      <div  class="buttons mt-5 align-items-center d-flex justify-content-center">
      <button  >Load More</button>
    </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const photoList = ref([
  require("@/assets/assessment/list-1.png"),
  require("@/assets/assessment/list-2.png"),
  require("@/assets/assessment/list-3.png"),
  require("@/assets/assessment/slide-4.png"),
  require("@/assets/assessment/slide-5.png"),
]);
</script>

<style lang="scss" scoped>
#howWeDoIt {
  height: 100%;
  width: 100%;
  padding: 100px 140px;
  background: #292e35;
  position: relative;
}

.sort-by {
  // position: absolute;
  width: 240px;
  height: 586px;

  background: linear-gradient(180deg, #0e1723 0%, rgba(30, 35, 42, 0) 100%);
  border-radius: 8px;
}
</style>
