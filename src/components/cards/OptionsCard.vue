<template>
  <div class="w-full flex flex-col items-start space-y-4 font-Inter">
    <div class="flex justify-between items-center w-full">
      <span class="text-primary-black font-bold text-3xl">Options</span>
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
      <div class="w-full border-0 border-b-4 border-tertiary-gray py-4">
        <input
          type="text"
          placeholder="Search"
          class="
            font-light
            text-primary-black
            placeholder-primary-black placeholder-opacity-25  text-xl 
            font-Inter
            py-2
            px-4
            pl-14
            w-full
            outline-none
          "
        />
        <div class="absolute top-6 left-6">
          <IconSearch />
        </div>
        <div class="absolute right-6 top-6">
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
            group
            rounded-xl
            py-2
            px-4
          "
            @click.self="change(index)"
          :class="{
            'bg-primary-blue': item.active,
            'hover:bg-tertiary-gray': !item.active,
          }"
        >
          <span
            @click="change(index)"
            class="text-xl font-normal font-Inter"
            :class="{
              'text-white': item.active,
              'text-primary-black': !item.active,
            }"
            >{{ item.name }}</span
          >
          <div
            class="items-center space-x-2 flex"
            :class="{ 'hidden  group-hover:flex': !item.active }"
          >
            <button
             @click="Copy(item.name)"
              class="py-2 px-2.5 rounded-lg"
              :class="{
                'bg-white hover:bg-secondary-gray': !item.active,
                'bg-quinary-gray bg-opacity-10 hover:bg-opacity-50':
                  item.active,
              }"
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
                  :fill="item.active ? '#fff' : '#001324'"
                />
              </svg>
            </button>
            <button
              class="py-3 px-2.5 rounded-lg"
              :class="{
                'bg-white hover:bg-secondary-gray': !item.active,
                'bg-quinary-gray bg-opacity-10 hover:bg-opacity-50':
                  item.active,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.193"
                height="8.604"
                viewBox="0 0 10.193 8.604"
              >
                <path
                  id="Path_1292"
                  data-name="Path 1292"
                  d="M9.819,5.206h0L6.794,8.231A1.278,1.278,0,0,1,4.987,6.423L5.83,5.58H1.278a1.278,1.278,0,0,1,0-2.556H5.83l-.843-.842A1.278,1.278,0,0,1,6.794.375L9.819,3.4a1.278,1.278,0,0,1,0,1.807"
                  transform="translate(0 0)"
                  :fill="item.active ? '#fff' : '#001324'"
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
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const Options = ref([
      {
        name: "Variant Option 298",
        active: true,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
        active: false,
      },
      {
        name: "Variant Option 298",
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
    const Copy = (text) => {
      navigator.clipboard.writeText(text);
    }
    return {
      Options,
      change,
      Copy
    };
  },
  components: {
    IconSearch,
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