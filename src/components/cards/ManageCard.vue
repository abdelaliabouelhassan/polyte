<template>
  <div class="w-full flex flex-col items-start space-y-16 font-Inter">
    <div class="flex justify-between items-center w-full">
      <span class="text-primary-black font-bold text-3xl">Berghain GmbH</span>
      <button
       @click="router.push({name:'app-settings-overview'})"
        class="
          text-primary-black text-xl
          font-normal
          py-2
          px-4
          rounded-md
          bg-primary-gray
          hover:bg-gray-300
        "
      >
        Manage
      </button>
    </div>
    <div class="flex flex-col items-start space-y-10 w-full">
      <LicenseType />
      <Impressions />
      <Storage />
    </div>
  </div>
</template>

<script>
import LicenseType from "../widgets/LicenseType.vue";
import Impressions from "../widgets/Impressions.vue";
import Storage from "../widgets/Storage.vue";
import { useRouter } from "vue-router";
export default {
  setup(){
      const router = useRouter();
    return {
      router,
    }
  },
  components: {
    LicenseType,
    Impressions,
    Storage,
  },
};
</script>