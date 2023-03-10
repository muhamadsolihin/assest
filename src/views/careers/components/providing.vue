<template>
  <div id="providing">
    <div class="header">
      <div
        class="card-text d-flex flex-column align-items-center justify-content-left"
      >
        <p class="monts-bold-35">Benefit Working On TCI</p>
        <p class="open-reg-24 ms-4">
          More than a place to work, Teknologi Cakra Internasional is a place
          where you could grow, learn, and collaborate with all your passion.
        </p>
      </div>
    </div>
    <div class="card-gift mt-5 pt-5 mb-5 pb-5 hide-on-mobile">
      <div class="col-md-12 d-flex justify-content-center">
        <img
          class="asset-4"
          src="@/assets/images/careers/animate.gif"
          alt="asset"
        />
      </div>
    </div>
    <div class="col-12 title-list-mobile">
      <ul class="nav d-flex">
        <!--begin::Tab nav-->
        <li class="nav-item d-flex align-items-center justify-content-center">
          <a
            class="nav-link btn btn-active-white open-reg-18 active"
            @click="setActivePointMobile(1)"
            data-bs-toggle="tab"
            href="#list-1"
          >
            01
            <span v-if="activePointMobile == 1">&nbsp;Healthcare</span>
          </a>
        </li>
        <li class="nav-item d-flex align-items-center justify-content-center">
          <a
            class="nav-link btn btn-active-white open-reg-18"
            @click="setActivePointMobile(2)"
            data-bs-toggle="tab"
            href="#list-2"
            >02<span v-if="activePointMobile == 2"
              >&nbsp;Skill Improvement</span
            ></a
          >
        </li>
        <li class="nav-item d-flex align-items-center justify-content-center">
          <a
            class="nav-link btn btn-active-white open-reg-18"
            @click="setActivePointMobile(3)"
            data-bs-toggle="tab"
            href="#list-3"
            >03<span v-if="activePointMobile == 3"
              >&nbsp;Career Acceleration</span
            ></a
          >
        </li>
        <li class="nav-item d-flex align-items-center justify-content-center">
          <a
            class="nav-link btn btn-active-white open-reg-18"
            @click="setActivePointMobile(4)"
            data-bs-toggle="tab"
            href="#list-4"
            >04<span v-if="activePointMobile == 4"
              >&nbsp;Work with Diversity</span
            ></a
          >
        </li>
        <li class="nav-item d-flex align-items-center justify-content-center">
          <a
            class="nav-link btn btn-active-white open-reg-18"
            @click="setActivePointMobile(5)"
            data-bs-toggle="tab"
            href="#list-5"
            >05<span v-if="activePointMobile == 5">&nbsp;Time Balance</span></a
          >
        </li>
        <li class="nav-item d-flex align-items-center justify-content-center">
          <a
            class="nav-link btn btn-active-white open-reg-18"
            @click="setActivePointMobile(6)"
            data-bs-toggle="tab"
            href="#list-6"
            >06<span v-if="activePointMobile == 6"
              >&nbsp;Ease yout Worries</span
            ></a
          >
        </li>
        <li class="nav-item d-flex align-items-center justify-content-center">
          <a
            class="nav-link btn btn-active-white open-reg-18"
            @click="setActivePointMobile(7)"
            data-bs-toggle="tab"
            href="#list-7"
            >07<span v-if="activePointMobile == 7">&nbsp;Family Time</span></a
          >
        </li>
      </ul>
    </div>
    <div class="col-12 description-list col-xl-6 d-flex justify-content-center">
      <div class="tab-content">
        <!--begin::Tab pane-->
        <div class="tab-pane fade active show mb-5" id="list-1">
          <!--begin::Section-->
          <p class="open-reg-18">
            We care about your health and well-being. You could choose the best
            plan that fit for your life and let us cover that for you.
          </p>
          <div class="d-flex justify-content-center">
            <img
              style="width: 30%"
              src="@/assets/images/careers/mobile/Healtcare.png"
            />
          </div>
          <!--end::Section-->
        </div>
        <!--end::Tab pane-->

        <!--begin::Tab pane-->
        <div class="tab-pane fade" id="list-2">
          <!--begin::Chart-->
          <p class="open-reg-18">
            We gave you plenty of rooms to improve and obtain new skill through
            some of our programs.
          </p>
          <div class="d-flex justify-content-center">
            <img
              style="width: 30%"
              src="@/assets/images/careers/mobile/Skill.png"
            />
          </div>
          <!--end::Chart-->
        </div>
        <!--end::Tab pane-->
        <!--begin::Tab pane-->
        <div class="tab-pane fade" id="list-3">
          <!--begin::Items-->
          <p class="open-reg-18">
            We let you focus on your passions so you could grow and understand
            your motivations, you also could make a lot of connections to
            accelerate your career.
          </p>
          <div class="d-flex justify-content-center">
            <img
              style="width: 30%"
              src="@/assets/images/careers/mobile/Career.png"
            />
          </div>
        </div>
        <div class="tab-pane fade" id="list-4">
          <p class="open-reg-18">
            TCI could be your safe place to work without worrying about
            discrimination, bullying, and harassment.
          </p>
          <div class="d-flex justify-content-center">
            <img
              style="width: 30%"
              src="@/assets/images/careers/mobile/Diversity.png"
            />
          </div>
        </div>
        <div class="tab-pane fade" id="list-5">
          <p class="open-reg-18">
            You could get your vacation time or send some remote working request
            when you need it, your team members got your back!
          </p>
          <div class="d-flex justify-content-center">
            <img
              style="width: 30%"
              src="@/assets/images/careers/mobile/time.png"
            />
          </div>
        </div>
        <div class="tab-pane fade" id="list-6">
          <p class="open-reg-18">
            At TCI, we offer some benefits that allows you to gain more skill
            through our Interconnect Academy Program. You could also get a Paid
            Sick Leave, Holiday Allowance, Business Travel Allowance, and
            Expense Reimbursement.
          </p>
          <div class="d-flex justify-content-center">
            <img
              style="width: 30%"
              src="@/assets/images/careers/mobile/ease.png"
            />
          </div>
        </div>
        <div class="tab-pane fade" id="list-7">
          <p class="open-reg-18">
            You could spend more time with your family by taking the parental
            leave when you are welcoming a new child through birth, adoption,
            foster, or surrogacy.
          </p>
          <div class="d-flex justify-content-center">
            <img
              style="width: 30%"
              src="@/assets/images/careers/mobile/family.png"
            />
          </div>
        </div>

        <!--end::Items-->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const docState = ref("saved");
const docState1 = ref("saved");

const activePointMobile = ref(1);

const setActivePointMobile = (number) => {
  activePointMobile.value = number;
};
</script>

<style lang="scss" scoped>
#providing {
  height: 100%;
  width: 100%;
  .open-reg-24 {
    text-align: center;
  }
  .header {
    background-image: url("@/assets/images/careers/bg-header.png");
    background-size: cover;
    height: 340px;
    .card-text {
      padding: 7% 180px;
    }
  }
  .title-list-mobile {
    display: none;
  }
  .description-list {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .monts-bold-35 {
    padding: 50px 0 0 0;
    font-size: 28px;
    width: 650px;
    line-height: 28px;
  }
  .open-reg-24 {
    font-size: 20px;
    width: 580px;
    line-height: 22px;
    text-align: left;
  }
  img {
    width: 100%;
  }
  .title-list-mobile {
    display: none;
  }
  .description-list {
    display: none;
  }
  .tab-content {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  .title-list-mobile {
    display: none;
  }
  .description-list {
    display: none;
  }
  .tab-content {
    display: none;
  }
}
@media screen and (max-width: 1920px) {
  .title-list-mobile {
    display: none;
  }
  .description-list {
    display: none;
  }
  .tab-content {
    display: none;
  }
}

@media screen and (max-width: 567px) {
  #providing {
    .monts-bold-35 {
      padding: 10px 0;
      font-weight: 700;
      font-size: 24px;
      line-height: 20px;
      width: 88vw;
    }
    .card-text {
      
      padding: 10% 0px;
    }
    .header {
      background-image: url("@/assets/images/careers/mobile/bg-mobile.png");
      background-size: cover;
      height: 200px;
    }

    .open-reg-24 {
      font-size: 14px;
      line-height: 16px;
      text-align: left;
      width: 370px !important;
    }

    .tab-content {
      display: block;
    }
    .hide-on-mobile {
      display: none;
    }

    .description-list {
      display: block;
      padding: 0 30px;
    }
    .title-list-mobile {
      display: block;
      padding: 50px 30px;
      .nav {
        gap: 10px;

        .nav-item {
          .nav-link {
            border-radius: 100%;
            border: 1px solid #b8bdc6;
            opacity: 0.5;
            color: #b8bdc6;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.2s;
            width: 32px;
            height: 32px;
          }

          .nav-link.active {
            border: 1px solid #000;
            border-radius: 36px;
            color: black;
            width: auto;
            opacity: 1;
          }
        }
      }
    }
    @keyframes slideUp {
      0% {
        transform: translateY(300px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
}
</style>
