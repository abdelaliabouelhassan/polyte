<template>
  <div class="w-full flex flex-col items-start space-y-4 font-Inter">
    <div class="flex justify-between items-center w-full">
      <span class="text-primary-black font-bold text-3xl">Latest Products</span>
      <button
        @click="AllProducts"
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
        All Products
      </button>
    </div>
    <div class="w-full bg-white rounded-2xl overflow-hidden card-border">
      <div
        class="
          flex
          justify-between
          items-center
          w-full
          border-0 border-b-4 border-tertiary-gray
          py-4
          px-4
          rounded-t-md
        "
      >
        <span class="text-primary-black text-opacity-50 text-xl font-Inter"
          >Name</span
        >
        <span class="text-primary-black text-opacity-50 text-xl font-Inter"
          >Status</span
        >
      </div>
      <div
        class="
          w-full
          py-4
          px-4
          flex flex-col
          items-start
          space-y-4
          max-h-96
          h-96
          overflow-y-auto
        "
      >
        <div  @click="AllProducts" class="flex items-center justify-between w-full hover:bg-secondary-gray bg-opacity-60 hover:py-2 hover:px-2 cursor-pointer rounded-xl">
          <div class="flex items-center space-x-4">
            <div
              class="w-14 h-9 rounded-md overflow-hidden bg-quaternary-gray"
            ></div>
            <span class="text-xl text-primary-black font-normal font-Inter"
              >Adidas Sport Shoe</span
            >
          </div>
          <div class="flex items-center space-x-4">
            <span
              class="
                text-xl text-primary-black
                font-normal font-Inter
                text-opacity-60
                uppercase
              "
              >ON AIR</span
            >
            <div
              class="w-3 h-3 rounded-full overflow-hidden"
              style="background: #ff5064"
            ></div>
          </div>
        </div>
        <div  @click="AllProducts" class="flex items-center justify-between w-full hover:bg-secondary-gray bg-opacity-60 hover:py-2 hover:px-2 cursor-pointer rounded-xl">
          <div class="flex items-center space-x-4">
            <div
              class="w-14 h-9 rounded-md overflow-hidden bg-quaternary-gray"
            ></div>
            <span class="text-xl text-primary-black font-normal font-Inter"
              >Elder Scrolls</span
            >
          </div>
          <div class="flex items-center space-x-4">
            <span
              class="
                text-xl text-primary-black
                font-normal font-Inter
                text-opacity-60
                uppercase
              "
              >ON AIR</span
            >
            <div
              class="w-3 h-3 rounded-full overflow-hidden"
              style="background: #ff5064"
            ></div>
          </div>
        </div>
        <div  @click="AllProducts" class="flex items-center justify-between w-full hover:bg-secondary-gray bg-opacity-60 hover:py-2 hover:px-2 cursor-pointer rounded-xl">
          <div class="flex items-center space-x-4">
            <div
              class="w-14 h-9 rounded-md overflow-hidden bg-quaternary-gray"
            ></div>
            <span class="text-xl text-primary-black font-normal font-Inter"
              >Sport Shelf</span
            >
          </div>
          <div class="flex items-center space-x-4">
            <span
              class="
                text-xl text-primary-black
                font-normal font-Inter
                text-opacity-60
                uppercase
              "
              >ON AIR</span
            >
            <div
              class="w-3 h-3 rounded-full overflow-hidden"
              style="background: #ff5064"
            ></div>
          </div>
        </div>
        <!-- here we have bg-opacity-25 -->
        <div  @click="AllProducts" class="flex items-center justify-between w-full hover:bg-secondary-gray bg-opacity-60 hover:py-2 hover:px-2 cursor-pointer rounded-xl">
          <div class="flex items-center space-x-4">
            <div
              class="
                w-14
                h-9
                rounded-md
                overflow-hidden
                bg-opacity-25 bg-quaternary-gray
              "
            ></div>
            <span
              class="
                text-xl text-primary-black
                font-normal font-Inter
                text-opacity-25
              "
              >Model Airplane</span
            >
          </div>
          <div class="flex items-center space-x-4">
            <span
              class="
                text-xl text-primary-black
                font-normal font-Inter
                text-opacity-25
                uppercase
              "
              >OFFLINE</span
            >
            <div
              class="
                w-3
                h-3
                rounded-full
                overflow-hidden
                bg-primary-black bg-opacity-25
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const AllProducts = () => {
      router.push({ name: "manage-contents-Products" });
    };

    return {
      AllProducts,
    };
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