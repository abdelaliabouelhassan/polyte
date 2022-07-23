<template>
  <div class="w-full">
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
        :style="{ border: '6px solid ' + store.NewProject.color + '36' }"
      >
        <div
          class="w-full h-full flex relative"
          :style="{ background: store.NewProject.color }"
        >
          <div class="m-auto">
            <IconProject />
          </div>
        </div>
      </div>
      <span class="text-xl font-bold text-primary-black font-Inter"
        >New Project</span
      >
    </div>
    <div class="pt-10 flex flex-col items-start space-y-10 w-full">
      <div class="w-full">
        <label
          for="Name"
          class="block text-xl font-bold text-primary-black font-Inter"
          >Name:</label
        >
        <div class="mt-1 w-full">
          <input
            v-model="store.NewProject.name"
            type="text"
            name="Name"
            id="Name"
            class="
              w-full
              bg-white
              px-4
              py-2
              rounded-xl
              outline-none
              input-ring
              text-xl
              placeholder-primary-black placeholder-opacity-50
              font-light font-Inter
            "
            placeholder="Enter Project Name"
          />
        </div>
      </div>
      <div class="flex flex-col items-start space-y-1">
        <span class="block text-xl font-bold text-primary-black font-Inter"
          >Project Label Color</span
        >

        <div
          class="
            p-5
            border-[3px] border-[#F7F7FA]
            rounded-xl
            bg-white
            flex
            items-center
            space-x-8
          "
        >
          <div>
            <svg
              :class="{
                ' bg-primary-black bg-opacity-10':
                  store.NewProject.color == '#ffffff',
              }"
              xmlns="http://www.w3.org/2000/svg"
              width="19.478"
              height="22.768"
              viewBox="0 0 19.478 22.768"
            >
              <path
                id="Path_38"
                data-name="Path 38"
                d="M19.478,2.848A2.848,2.848,0,0,0,14.617.834L13.341,2.11l-.2-.2A2.043,2.043,0,0,0,10.25,4.8l.2.2L4.334,11.117a3.171,3.171,0,0,0-.674.992L2.482,14.83a1.93,1.93,0,0,1-.411.605L1.009,16.5A1.394,1.394,0,1,0,2.98,18.469l1.062-1.062A1.952,1.952,0,0,1,4.648,17l2.721-1.177a3.175,3.175,0,0,0,.992-.674l6.118-6.118.2.2a2.092,2.092,0,0,0,2.889,0,2.045,2.045,0,0,0,0-2.889l-.2-.2,1.276-1.276a2.831,2.831,0,0,0,.834-2.014M11.333,5.881,13.6,8.145,11.18,10.562H6.652Zm6.43-1.9L15.6,6.137,16.688,7.22a.8.8,0,0,1,0,1.126.815.815,0,0,1-1.126,0l-4.43-4.429A.8.8,0,0,1,12.258,2.79l1.083,1.083L15.5,1.716a1.64,1.64,0,0,1,2.264,0,1.6,1.6,0,0,1,0,2.264M1.284,20.11c.335.621.8.842.852,1.472A1.071,1.071,0,1,1,0,21.7c0-.721.5-.93.856-1.587a.241.241,0,0,1,.428,0"
                :fill="store.NewProject.color"
              />
            </svg>
          </div>
          <div class="flex items-center space-x-4">
            <div
              class="w-5 h-5 rounded-full cursor-pointer"
              style="background: #001324"
              @click="SelectColor('#001324')"
            ></div>
            <div
              class="
                w-5
                h-5
                rounded-full
                ring-2 ring-primary-black
                cursor-pointer
              "
              style="background: #ffffff"
              @click="SelectColor('#ffffff')"
            ></div>
            <div
              class="w-5 h-5 rounded-full cursor-pointer"
              style="background: #64bdfd"
              @click="SelectColor('#64bdfd')"
            ></div>
            <div
              class="w-5 h-5 rounded-full cursor-pointer"
              style="background: #6482fc"
              @click="SelectColor('#6482fc')"
            ></div>
            <div
              class="w-5 h-5 rounded-full cursor-pointer"
              style="background: #fec964"
              @click="SelectColor('#fec964')"
            ></div>
            <div
              class="w-5 h-5 rounded-full cursor-pointer"
              style="background: #fa5a3d"
              @click="SelectColor('#fa5a3d')"
            ></div>
            <div
              class="w-5 h-5 rounded-full cursor-pointer"
              style="background: #28f49e"
              @click="SelectColor('#28f49e')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import IconProject from "../../../../Icons/IconProject.vue";
import { useStore } from "../../../../stores/NewProjectStore.js";

export default {
  components: {
    IconProject,
  },
  setup() {
    const store = useStore();
    const SelectColor = (mycolor) => {
      store.NewProject.color = mycolor;
    };
    return {
      SelectColor,
      store,
    };
  },
};
</script>