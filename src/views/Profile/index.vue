<template>
  <HomeLayout>
    <template v-slot:content>
      <div class="pt-16 pb-10 font-Inter">
        <div
          class="flex flex-col items-start space-y-14 max-w-4xl m-auto w-full"
        >
          <ProfileCard /> 
          <TrophiesCard />
        </div>
      </div>
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../layouts/HomeLayout.vue";
import ProfileCard from "../../components/cards/ProfileCard.vue";
import TrophiesCard from "../../components/cards/TrophiesCard.vue";
import { useRouter } from "vue-router";

import { ref } from "@vue/reactivity";
export default {
  components: {
    HomeLayout,
    ProfileCard,
    TrophiesCard
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>


