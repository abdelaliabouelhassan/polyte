<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-7xl m-auto px-4 pl-8 space-y-24">
        <div class="w-full space-y-20 pt-16">
          <div class="w-full flex justify-between items-start">
            <div class="flex items-center space-x-4 relative">
              <div class="flex items-start space-x-3 group">
                <div class="flex flex-col items-start space-y-1">
                  <span class="text-3xl font-bold text-primary-black font-Inter"  v-if="!EditTitle"
                    >{{title}}</span
                  >
                   <input
                    v-else
                    v-model="title"
                    type="text"
                    class="
                      text-3xl
                      font-bold
                      text-primary-black
                      font-Inter
                      py-2
                      outline-none
                      bg-tertiary-gray
                    "
                  />
                  <span
                    class="
                      text-xl
                      font-normal
                      text-primary-black
                      font-Inter
                      text-opacity-50
                    "
                    >Last updated 2022-02-18</span
                  >
                </div>
                <div
                  class="hidden group-hover:block cursor-pointer" :class="{'block':EditTitle}"
                  @click="EditTitle = !EditTitle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.653"
                    height="20.652"
                    viewBox="0 0 25.653 25.652"
                  >
                    <path
                      id="Path_35"
                      data-name="Path 35"
                      d="M24.629,4.485,21.166,1.023a3.5,3.5,0,0,0-4.947,0L.74,16.5A2.509,2.509,0,0,0,0,18.288v4.836a2.531,2.531,0,0,0,2.528,2.528H7.364a2.509,2.509,0,0,0,1.786-.74L24.629,9.432a3.5,3.5,0,0,0,0-4.947M7.362,23.123H2.528V18.29L14.272,6.545l4.834,4.834ZM22.841,7.645,20.894,9.591,16.06,4.758l1.947-1.947a.971.971,0,0,1,1.371,0l3.463,3.463a.97.97,0,0,1,0,1.371m-8.609,5.563L8.774,18.666a1.264,1.264,0,0,1-1.788-1.788l5.458-5.458a1.264,1.264,0,0,1,1.788,1.788"
                      fill="#001324"
                      opacity="0.53"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-5 space-y-1">
              <span
                class="text-xl font-Inter text-opacity-60 text-primary-black"
                :class="{ 'font-bold text-primary-red': !onAir }"
                >{{ onAir ? "ON AIR" : "OFFLINE" }}</span
              >
              <div>
                <input type="checkbox" v-model="onAir" />
              </div>
            </div>
          </div>

          <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            <div class="w-full">
              <PreviewCard />
            </div>
            <div class="flex flex-col items-start space-y-14 w-full">
              <ActiveVersion />
              <AppKey />
            </div>
            <div class="md:col-span-2 w-full">
              <ImpressionsCard />
            </div>
            <div class="w-full">
              <Devices />
            </div>
            <div class="w-full">
              <OperatingSystem />
            </div>
            <div class="w-full md:col-span-2">
              <InfoCard />
            </div>
          </div>
        </div>
      </div>
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../layouts/SidebarLayout.vue";
import SideBar from "./includes/SideBar.vue";
import PreviewCard from "../../components/cards/PreviewCard.vue";
import ImpressionsCard from "../../components/cards/ImpressionsCard.vue";
import ActiveVersion from "../../components/widgets/ActiveVersion.vue";
import OperatingSystem from "../../components/cards/OperatingSystem.vue";
import Devices from "../../components/cards/DevicesCard.vue";
import InfoCard from "../../components/cards/InfoCard.vue";
import AppKey from "../../components/widgets/AppKey.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    SideBar,
    PreviewCard,
    ActiveVersion,
    AppKey,
    ImpressionsCard,
    OperatingSystem,
    Devices,
    InfoCard,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const onAir = ref(false);
     const title = ref("Angelcab Stroller");
    const EditTitle = ref(false);
    return {
      router,
      route,
      onAir,
      title,
      EditTitle,
    };
  },
};
</script>


<style scoped>
input[type="checkbox"] {
  position: relative;
  width: 50px;
  height: 28px;
  -webkit-appearance: none;
  -webkit-appearance: none;
  background: #001324;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: background 300ms linear;
}
input[type="checkbox"]::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  top: 4px;
  left: 4px;
  border-radius: 20px;
  background-color: #f7f7fa;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: left 300ms linear;
}
input[type="checkbox"]:checked {
  background: #ff5064;
}
input[type="checkbox"]:checked::before {
  left: 26px;
  background-color: #f7f7fa;
}
</style>