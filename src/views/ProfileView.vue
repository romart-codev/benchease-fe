<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<template>
  <div class="container profile">
    <ProfileHeader />
    <ProfileDetails />
    <ProfileSkills :skills="skills" />
    <ProfileHistory :historyList="historyList" />
  </div>
</template>

<script lang="ts">
import ProfileHeader from "@/components/ProfileHeader.vue";
import ProfileDetails from "@/components/ProfileDetails.vue";
import ProfileSkills from "@/components/ProfileSkills.vue";
import ProfileHistory from "@/components/ProfileHistory.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileView",
  components: {
    ProfileDetails,
    ProfileHeader,
    ProfileSkills,
    ProfileHistory,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      skills: {
        primary: [
          "Javascript",
          "ReactJS",
          "PHP Development",
          "WordPress Development ",
          "UI Design",
        ],
        additional: [
          "Quality Assurance",
          "Automation Testing",
          "HTML/CSS",
          "Product Design",
          "SEO Content",
          "UI/UX",
          "Google Analytics",
          "Selenium",
        ],
      },
      historyList: [
        {
          companyName: "Wisnet",
          position: "WordPress Developer",
          date: "Dec 2022 - Mar 2023",
          description:
            "The Geeks & Creatives of wisnet can help you navigate the overwhelming – sometimes scary – tasks of brand building and web technology. The result: communications that celebrate uniqueness, stand out from the noise, and help teams confidently go fearlessly into the ’net.",
        },
        {
          companyName: "BaseMap",
          position: "WordPress Developer",
          date: "April 2021 - Oct 2022",
          description:
            "BaseMap® is the industry leading mobile and desktop mapping application providing hunters and outdoorsmen the tools and knowledge they need to plan, navigate, and share their outdoor adventures. BaseMap®’s goal is to help people be more successful outdoors with easy to use, cutting-edge technology like 3D maps, Smart Markers, unlimited offline mapping, live location sharing and much more.",
        },
      ],
    };
  },
  computed: {
    currentUser() {
      // @ts-ignore
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
});
</script>
