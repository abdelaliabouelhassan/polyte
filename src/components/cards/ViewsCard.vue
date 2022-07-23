<template>
  <div class="w-full flex flex-col items-start space-y-4 font-Inter">
    <div class="flex justify-between items-center w-full">
      <span class="text-primary-black font-bold text-3xl">Views</span>
      <button
        class="
          text-primary-black text-lg
          font-normal
          py-2
          px-4
          rounded-md
          bg-primary-gray
          hover:bg-gray-300
        "
      >
        Export JSON
      </button>
    </div>
    <div
      class="
        w-full
        bg-white
        rounded-2xl
        input-border
        flex flex-col
        items-start
        relative
        overflow-hidden
      "
    >
      <div class="w-full border-0 border-b-4 border-tertiary-gray">
        <input
          type="text"
          placeholder="Search"
          class="
            font-light
            text-primary-black
            placeholder-primary-black placeholder-opacity-25
            font-Inter
            py-2
            px-4
            pl-10
            w-full
            outline-none
          "
        />
        <div class="absolute top-3 left-4">
          <IconSearch />
        </div>
        <div class="absolute right-4 top-3">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.1"
              height="18.987"
              viewBox="0 0 21.1 18.987"
            >
              <path
                id="Path_1228"
                data-name="Path 1228"
                d="M20.383,0H.716A.715.715,0,0,0,.162,1.167L7.3,9.889a1.855,1.855,0,0,1,.419,1.174v7.418a.505.505,0,0,0,.786.42l4.46-2.984a.955.955,0,0,0,.424-.794V11.063A1.855,1.855,0,0,1,13.8,9.889l7.133-8.722A.715.715,0,0,0,20.383,0M9.436,17.149a.4.4,0,1,1-.791,0V11.511a.4.4,0,1,1,.791,0Z"
                transform="translate(0)"
                fill="#001324"
                opacity="0.25"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        class="
          w-full
          p-5
          flex flex-col
          items-start
          space-y-2
          max-h-[700px]
          h-full
          overflow-y-auto
        "
      >
        <div
          v-for="(item, index, key) in Options"
          :key="key"
          class="
            w-full
            cursor-pointer
            flex
            items-center
            justify-between
            hover:bg-primary-blue
            rounded-xl
            py-2
            px-4
          "
          :class="{ 'bg-primary-blue': item.active }"
        >
          <div class="flex items-center space-x-4">
            <CameraIcon :class="{ 'text-white': item.active }" />
            <span
              @click="change(index)"
              class="text-xl font-normal font-Inter hover:text-white"
              :class="{
                'text-white': item.active,
                'text-primary-black': !item.active,
              }"
              >{{ item.name }}</span
            >
          </div>
          <div class="flex items-center space-x-2" v-if="item.active">
            <button
              class="
                bg-quinary-gray
                py-2
                px-2.5
                hover:bg-opacity-50
                bg-opacity-10
                rounded-lg
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.406"
                height="14.92"
                viewBox="0 0 12.406 14.92"
              >
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M9.066,0H3.341A3.344,3.344,0,0,0,0,3.341v8.239A3.344,3.344,0,0,0,3.341,14.92H9.066a3.344,3.344,0,0,0,3.34-3.341V3.341A3.344,3.344,0,0,0,9.066,0m1.87,11.579a1.872,1.872,0,0,1-1.87,1.87H3.341a1.872,1.872,0,0,1-1.87-1.87V3.341a1.872,1.872,0,0,1,1.87-1.87h.073V1.7A1.15,1.15,0,0,0,4.562,2.846H7.844A1.15,1.15,0,0,0,8.992,1.7V1.471h.074a1.872,1.872,0,0,1,1.87,1.87ZM9.56,6.32a.735.735,0,0,1-.735.735H3.6a.735.735,0,1,1,0-1.471H8.825a.735.735,0,0,1,.735.735m0,2.439a.735.735,0,0,1-.735.735H3.6a.735.735,0,1,1,0-1.471H8.825a.735.735,0,0,1,.735.735m-2.306,2.58a.735.735,0,0,1-.735.735H3.582a.735.735,0,0,1,0-1.471H6.519a.735.735,0,0,1,.735.735"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import IconSearch from "../../Icons/IconSearch.vue";
import CameraIcon from "../../Icons/CameraIcon.vue";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const Options = ref([
      {
        name: "Front view",
        active: true,
      },
      {
        name: "Rear View",
        active: false,
      },
      {
        name: "Side View",
        active: false,
      },
      {
        name: "Detail View",
        active: false,
      },
      {
        name: "Auto Rotate Camera",
        active: false,
      },
      {
        name: "Detail - Mobile",
        active: false,
      },
      {
        name: "Front - Mobile",
        active: false,
      },
    ]);
    const change = (index) => {
      Options.value.forEach((item, i) => {
        if (i === index) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    };
    return {
      Options,
      change,
    };
  },
  components: {
    IconSearch,
    CameraIcon,
  },
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ebebf0;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>