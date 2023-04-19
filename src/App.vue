<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<template>
  <div
    class="container-fluid vh-100 relative"
    :class="{ 'theme-bg-color': !loggedIn }"
  >
    <div class="row flex-nowrap h-100">
      <SideBar v-if="loggedIn" />
      <div class="col py-4">
        <router-view />
      </div>
    </div>
    <img
      v-if="!loggedIn"
      class="img-fluid position-absolute top-0 end-0"
      alt="login img"
      src="@/assets/bg-1.svg"
    />
    <img
      v-if="!loggedIn"
      class="img-fluid position-absolute bottom-0 start-0"
      alt="login img"
      src="@/assets/bg-2.svg"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/components/SideBar.vue"; // @ is an alias to /src

export default defineComponent({
  name: "App",
  components: {
    SideBar,
  },
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  computed: {
    // @ts-ignore
    loggedIn() {
      // @ts-ignore
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
});
</script>

<style lang="scss">
@import "@/assets/sass/main.scss";

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
