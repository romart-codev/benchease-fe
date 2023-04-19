<template>
  <div class="container profile-skills">
    <div class="text-end btn-container">
      <!-- <button
        type="button"
        class="btn btn-primary theme-bg-color theme-border-color"
      >
        <img src="../assets/plus.png" alt="plus" />
        Add Skill
      </button> -->
      <ModalApp :skills="skills.primary" />
    </div>

    <div class="row">
      <div>
        <h3 class="text-start">Primary Skills</h3>
      </div>
      <div class="d-inline-flex flex-wrap">
        <button
          v-for="(skill, i) in skills.primary"
          type="button"
          class="btn btn-primary theme-bg-color theme-border-color mr-3 mb-3"
          :key="i"
        >
          {{ skill }}
        </button>
      </div>
    </div>
    <div class="row">
      <div>
        <h3 class="text-start">Additional Skills</h3>
      </div>
      <div class="d-inline-flex flex-wrap">
        <button
          v-for="(skill, i) in skills.additional"
          type="button"
          class="btn btn-default theme-color-text theme-border-color mr-3 mb-3"
          :key="i"
        >
          {{ skill }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalApp from "@/components/shared/ModalApp.vue"; // @ is an alias to /src

export default defineComponent({
  name: "ProfileSkills",
  components: { ModalApp },
  props: ["skills"],
  data() {
    return {};
  },
});
</script>
<style lang="scss">
.profile-skills {
  margin-top: 29px;
  margin-bottom: 49px;

  .btn-container + .row {
    margin-bottom: 65px;
    margin-right: 0;
  }
  h3 {
    font-size: 18px;
    line-height: 27px;
  }
  .btn {
    margin-right: 16px;
    font-size: 15px;
    line-height: 22px;
  }
}
</style>
