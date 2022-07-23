<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-2xl m-auto px-4 pl-8 space-y-24 font-Inter">
        <div class="flex justify-between items-start w-full">
          <div class=" flex flex-col items-start space-y-4">
            <span class=" text-3xl font-bold text-primary-black font-Inter text-left">Berghain GmbH</span>
            <div class=" max-w-[150px]">
              <p class=" text-xl font-light text-primary-black font-Inter">Am Wriezener bhf 10243 Berlin Germany</p>
            </div>
            <div class=" flex items-center space-x-2">
              <span class=" text-xl font-light text-primary-black font-Inter">VAT/Tax ID: </span>
              <span class=" text-xl font-bold text-primary-black font-Inter">DE 310 025 781</span>
            </div>
          </div>
          <div>
            <button
             @click="Edit"
              class="
                text-primary-black text-base
                font-normal
                py-2
                px-4
                rounded-md
                bg-primary-gray
                hover:bg-gray-300
              "
            >
              Edit
            </button>
          </div>
        </div>
       <div class=" flex flex-col items-start space-y-10">
         <LicenseType :manage="true" />
        <Impressions />
        <User />
        <Storage :showMessage="true" />
       </div>
      </div>
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../layouts/SidebarLayout.vue";
import SideBar from "./includes/SideBar.vue";
import LicenseType from "../../components/widgets/LicenseType.vue";
import Impressions from "../../components/widgets/Impressions.vue";
import User from "../../components/widgets/User.vue";
import Storage from "../../components/widgets/Storage.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    SideBar,
    LicenseType,
    Impressions,
    User,
    Storage
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const Edit  = () => {
      router.push({
        name: "app-settings-billing"
      });
    }
    return {
      router,
      route,
      Edit
    };
  },
};
</script>


