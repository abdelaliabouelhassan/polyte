<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-7xl m-auto px-4 pl-8 space-y-24">
        <div class="w-full space-y-2">
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
          <div class="w-full grid grid-cols-2 gap-x-20 gap-y-2 pt-20">
            <div>
              <ProjectBriefingCard />
            </div>
            <div>
              <ExternalContentCard />
            </div>
            <div>
              <StatisticsCard />
            </div>
            <div class="pt-8"><DeployedCard /></div>
            <div class="w-full flex items-center space-x-4">
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
                  font-light font-Inter
                  rounded-md
                  text-white
                  bg-primary-red
                  hover:bg-opacity-80
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-primary-red
                "
              >
                <div class="m-auto flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="13.734"
                    height="16.37"
                    viewBox="0 0 13.734 16.37"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_100"
                          data-name="Rectangle 100"
                          width="13.734"
                          height="16.37"
                          fill="#fff"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_1020"
                      data-name="Group 1020"
                      transform="translate(0 0)"
                    >
                      <g
                        id="Group_120"
                        data-name="Group 120"
                        transform="translate(0 0)"
                        clip-path="url(#clip-path)"
                      >
                        <path
                          id="Path_40"
                          data-name="Path 40"
                          d="M7.481,12.513l.373-4.338a.811.811,0,1,1,1.616.139L9.1,12.652a.811.811,0,0,1-.807.742c-.023,0-.047,0-.07,0a.811.811,0,0,1-.739-.877m-2.036.88c.023,0,.047,0,.07,0a.811.811,0,0,0,.739-.877L5.881,8.175a.811.811,0,1,0-1.616.139l.373,4.338a.811.811,0,0,0,.807.742M12.7,5.881l-.657,8.2A2.5,2.5,0,0,1,9.564,16.37H4.17a2.5,2.5,0,0,1-2.482-2.291l-.657-8.2a1.931,1.931,0,0,1,.9-3.64h.923l.353-.916A2.01,2.01,0,0,1,5.074,0H8.66a2.01,2.01,0,0,1,1.866,1.325l.353.916H11.8a1.931,1.931,0,0,1,.9,3.64m-8.11-3.64H9.142l-.128-.333a.4.4,0,0,0-.353-.287H5.074a.4.4,0,0,0-.353.287ZM1.622,4.174a.31.31,0,0,0,.31.31H11.8a.31.31,0,0,0,0-.62H1.932a.311.311,0,0,0-.31.31m9.436,1.932H2.676L3.3,13.949a.873.873,0,0,0,.866.8H9.564a.873.873,0,0,0,.866-.8Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>

                  <span>Delete Project</span>
                </div>
              </button>
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
                  font-light font-Inter
                  rounded-md
                  text-primary-black
                  bg-quaternary-gray
                  hover:bg-secondary-gray
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-quaternary-gray
                "
              >
                <div class="m-auto flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18.164" height="18.164" viewBox="0 0 18.164 18.164">
  <path id="Path_36" data-name="Path 36" d="M30.635,22.847h7.129a.649.649,0,0,0,0-1.3H30.635a.649.649,0,1,0,0,1.3" transform="translate(-25.118 -18.05)" fill="#1d1d1b"/>
  <path id="Path_37" data-name="Path 37" d="M0,0V14.609a3.559,3.559,0,0,0,3.555,3.555H14.609a3.559,3.559,0,0,0,3.555-3.555V0ZM16.865,14.609a2.257,2.257,0,0,1-2.256,2.256H3.555A2.257,2.257,0,0,1,1.3,14.609V1.3H16.865Z" fill="#1d1d1b"/>
</svg>


                  <span> Archive Project</span>
                </div>
              </button>
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
import DeployedCard from "../../components/cards/DeployedCard.vue";
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
    StatisticsCard,
    DeployedCard,
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