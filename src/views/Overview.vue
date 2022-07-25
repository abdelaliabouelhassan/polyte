<template>
  <HomeLayout>
    <template v-slot:content>
      <div class="w-full flex pt-16 pb-10">
        <div class="w-full flex text-center">
          <span
            class="
              text-primary-black
              font-bold font-Inter
              text-6xl text-center
              m-auto
            "
            >Good morning, Marius</span
          >
        </div>
      </div>
      <div
        class="max-w-7xl m-auto w-full grid md:grid-cols-2 gap-x-48 gap-y-14 pt-20"
      >
        <div class="w-full">
          <LatestProductCard />
        </div>
        <div class="w-full">
          <ManageCard />
        </div>
        <div class="w-full">
          <LatestProjectsCard />
        </div>

        <div class="w-full pt-16">
          <HelpReferencesCard />
        </div>
      </div>
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout.vue";
import LatestProductCard from "../components/cards/LatestProductCard.vue";
import ManageCard from "../components/cards/ManageCard.vue";
import LatestProjectsCard from "../components/cards/LatestProjectsCard.vue";
import HelpReferencesCard from "../components/cards/HelpReferencesCard.vue";
export default {
  components: {
    HomeLayout,
    LatestProductCard,
    ManageCard,
    LatestProjectsCard,
    HelpReferencesCard,
  },
};
</script>