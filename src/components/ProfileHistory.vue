<template>
  <div class="container profile-history">
    <div class="card shadow">
      <div class="card-body text-start pl-3">
        <h5 class="card-title">History</h5>
        <div class="card-text" v-for="(history, i) in historyList" :key="i">
          <h4>
            <span class="fw-bold">{{ history.companyName }}</span> -
            {{ history.position }}
          </h4>
          <span class="date">{{ history.date }}</span>
          <p class="description">{{ history.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileHistory",
  props: ["historyList"],
  data() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.card {
  padding: 35px 24px;
}

.card-title {
  margin-bottom: 44px;
}
.card-text {
  padding-left: 22px;
  margin-bottom: 35px;

  h4 {
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 0;
  }

  .date {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 13px;
  }

  .description {
    font-size: 14px;
    line-height: 21px;
  }
}
</style>
