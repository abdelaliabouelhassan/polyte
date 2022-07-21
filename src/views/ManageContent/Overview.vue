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
              <div class="flex flex-col items-start space-y-1">
                <span class="text-3xl font-bold text-primary-black font-Inter"
                  >Angelcab Stroller</span
                >
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
            </div>
              <div class="flex items-center space-x-5 space-y-1">
              <span
                class="
                  text-xl
                  font-Inter
                  text-opacity-60 text-primary-black
                "
                :class="{'font-bold text-primary-red':!onAir}"
                >{{ onAir ? "ON AIR" : "OFFLINE" }}</span
              >
              <div>
                <input type="checkbox" v-model="onAir" />
              </div>
            </div>
           
          </div>

          <div class=" w-full grid grid-cols-2 gap-x-10 gap-y-10">
            <div>
                <PreviewCard />
            </div>
            <div class=" flex flex-col items-start space-y-14">
                <ActiveVersion />
                <AppKey />
            </div>
            <div class=" col-span-2">
                <ImpressionsCard />
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
    ImpressionsCard
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const onAir = ref(false);
    return {
      router,
      route,
      onAir
    };
  },
};
</script>


<style scoped>

input[type='checkbox'] {
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
input[type='checkbox']::before {
  position: absolute;
  content: '';
  width: 20px;
  height: 20px;
  top: 4px;
  left: 4px;
  border-radius: 20px;
  background-color: #F7F7FA;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: left 300ms linear;
}
input[type='checkbox']:checked {
  background: #FF5064;
}
input[type='checkbox']:checked::before {
  left: 26px;
  background-color: #F7F7FA;
}
</style>