<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-7xl m-auto px-4 pl-8 space-y-24">
        <div class=" w-full space-y-2">
          <div class="w-full flex justify-between items-center">
            <div></div>
            <div class="flex items-center space-x-2">
              <span
                class="
                  text-xl
                  font-normal font-Inter
                  text-opacity-60 text-primary-black
                "
                >{{ Privat ? "Privat" : "Set Privat" }}</span
              >
              <div>
                <input type="checkbox" v-model="Privat" />
              </div>
            </div>
          </div>
          <div class="w-full flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <div
                class="
                  w-[89px]
                  h-[71px]
                  rounded-xl
                  overflow-hidden
                  cursor-pointer
                  group-hover:absolute group-hover:bottom-2
                  bottom-0
                  transition-all
                  duration-300
                  ease-in-out
                "
                :style="{ border: '6px solid ' + '#6482FF' + '36' }"
              >
                <div
                  class="w-full h-full flex relative"
                  :style="{ background: '#6482FF' }"
                >
                  <div class="m-auto">
                    <IconProject />
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-start space-y-1">
                <span class="text-3xl font-bold text-primary-black font-Inter"
                  >Adidas Sport Shoe</span
                >
                <span
                  class="
                    text-xl
                    font-normal
                    text-primary-black
                    font-Inter
                    text-opacity-50
                  "
                  >Created 2022-07-25</span
                >
              </div>
            </div>
            <button
              type="button"
              class="
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                shadow-sm
                text-lg
                font-normal font-Inter
                rounded-md
                text-white
                bg-primary-black
                hover:bg-primary-blue
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-primary-blue
              "
            >
              <div class="m-auto flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.107"
                  height="20.194"
                  viewBox="0 0 18.107 20.194"
                >
                  <path
                    id="Path_1254"
                    data-name="Path 1254"
                    d="M16.244,3.52,10.862.473a3.69,3.69,0,0,0-3.617,0L1.863,3.52A3.677,3.677,0,0,0,0,6.715v6.892a3.668,3.668,0,0,0,1.923,3.228l5.382,2.914a3.659,3.659,0,0,0,3.5,0l5.382-2.914a3.668,3.668,0,0,0,1.923-3.228V6.715A3.677,3.677,0,0,0,16.244,3.52M14.971,7.34h0L11.033,9.386a1.96,1.96,0,0,0-1.056,1.739v6.9c0,1.329-1.222,1.42-2.007.982L2.446,16.066a2.674,2.674,0,0,1-1.416-2.36V6.379A1.278,1.278,0,0,1,2.718,5.043L8.092,7.834a2.087,2.087,0,0,0,1.922,0l4.1-2.131a.962.962,0,0,1,.545-.113.923.923,0,0,1,.31,1.749"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                </svg>

                <span> New Project wizard</span>
              </div>
            </button>
          </div>
          <div class=" w-full grid grid-cols-2 gap-20 pt-20">
            <div>
              <ProjectBriefingCard />
            </div>
             <div>
              <ExternalContentCard />
            </div>
            <div>
              <StatisticsCard />
            </div>
          </div>
        </div>
      </div>
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../layouts/SidebarLayout.vue";
import IconProject from "../../Icons/IconProject.vue";
import ProjectBriefingCard from "../../components/cards/ProjectBriefingCard.vue";
import ExternalContentCard from "../../components/cards/ExternalContentCard.vue";
import StatisticsCard from "../../components/cards/StatisticsCard.vue";
import SideBar from "./includes/SideBar.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    SideBar,
    IconProject,
    ProjectBriefingCard,
    ExternalContentCard,
    StatisticsCard
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const Privat = ref(false);

    return {
      router,
      route,
      Privat,
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
  background: #ffffff;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
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
  background-color: #dedee3;
  transform: scale(1.1);
  transition: left 300ms linear;
}
input[type="checkbox"]:checked {
  background: #001324;
}
input[type="checkbox"]:checked::before {
  left: 26px;
  background-color: #dedee3;
}
</style>