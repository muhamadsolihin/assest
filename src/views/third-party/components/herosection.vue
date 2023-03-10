<template>
  <section id="hero">
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'dark'"
        :sections-length="4"
        :current-section="1"
      />
      <div class="row">
        <div
          class="col-md-12 d-flex flex-column w-100 d-flex justify-content-center"
        >
          <p class="monts-bold-50 text-white text-center">
            TCI Third-Party Code of Conduct
          </p>
          <p class="text-center monts-semilight-51 text-white">
            Business is all about trust. Trust is built on integrity. Your
            decision matters.
          </p>
          <div class="row">
            <div class="col-md-3 text-center d-flex justify-content-center">
              <div class="section-number d-flex justify-content-center">
                <SectionNumberComponent
                  class="mt-auto tex-center"
                  :section-name="'Table of Content'"
                  :color="'#ffffff'"
                />
              </div>
            </div>
          </div>
          <div class="row list-table mt-2">
            <div class="col-md-6">
              <dl class="list-content text-white albert-reg-27">
                <dd>- Introduction</dd>
                <dd>- TCI Values</dd>
                <dd>- Applicability of this code</dd>
                <dd>- 1. Legal and regulatory compliance</dd>
                <dd>- 1.1. Anti-corruption</dd>
                <dd>- 1.2. Trade compliance</dd>
                <dd>- 1.3 Insider Trading</dd>
                <dd>- 1.4. Fair competition / Antitrust</dd>
                <dd>
                  - 1.5. Anti-money laundering and anti-facilitation of tax
                  evasion
                </dd>
                <dd>- 1.6 Data privacy</dd>
                <dd>
                  - 1.7. Intellectual property and confidential information
                </dd>
              </dl>
            </div>
            <div class="col-md-6">
              <dl class="list-content text-white albert-reg-27">
                <dd>- 2. Ethical business prcatices</dd>
                <dd>- 2.1. Conflict of interest</dd>
                <dd>- 2.2. Record keeping</dd>
                <dd>- 2.3. Concern reporting</dd>
                <dd>- 3. Environmental and social regulations</dd>
                <dd>- 3.1. Fair employment</dd>
                <dd>- 3.2. Environment</dd>
                <dd>- 3.3. Health and safety</dd>
                <dd>- 3.4. Human rights</dd>
                <dd>
                  - 4. Your responsibility under this code of conduct as a TCI
                  <br />Third Party
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#hero {
  background-image: url("@/assets/images/third-party/BG.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  position: relative;

  .container-custom {
    height: 100vh;
    padding: 0 180px;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
  }
}
@media screen and (max-width: 768px) {
  #hero {
    padding: 0 40px;
    .container-custom {
      padding: 0 50px;
      .monts-bold-50 {
        font-size: 32px;
        line-height: 34px;
      }
      .section-number {
        margin-left: 10px;
        width: 150px;
        font-size: 12px;
      }
      .monts-semilight-51 {
        font-size: 14px;
        line-height: 18px;
      }
      .albert-reg-27 {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
}

@media screen and (max-width: 567px) {
  #hero {
    padding: 0 20px;
    .container-custom {
      padding: 0 40px;
      .monts-bold-50 {
        font-size: 16px;
        line-height: 24px;
      }
      .section-number {
        margin-left: 10px;
        width: 120px;
        font-size: 9px;
      }
      .monts-semilight-51 {
        font-size: 12px;
        width: 100%;
        line-height: 14px;
      }
      .albert-reg-27 {
        font-size: 11px;
        line-height: 11px;
      }
    }
  }

}
</style>
