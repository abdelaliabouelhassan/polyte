<template>
  <div class="w-full flex flex-col items-start space-y-4">
    <span class="text-primary-black font-bold font-Inter text-3xl"
      >Deployed to Products</span
    >
    <div
      class="
        w-full
        bg-white
        rounded-2xl
        overflow-hidden
        input-border
        flex flex-col
        items-start
        py-4
        space-y-2
      "
    >
      <div class="w-full p-4 border-0 border-b-4 border-tertiary-gray">
        <span
          class="
            text-xl
            font-light
            text-primary-black text-opacity-50 text-left
            font-Inter
          "
          >Product name</span
        >
      </div>
      <div
        v-for="(product, index) in Products"
        :key="index"
        @click="details(product)"
        class="
          w-full
          p-4
          border-0 border-b-4 border-tertiary-gray hover:bg-secondary-gray
          flex
          justify-between
          items-center
        "
      >
        <span
          class="
            text-xl
            font-light
            text-primary-black text-opacity-100 text-left
            font-Inter
          "
          >{{ product.name }}</span
        >
        <button
          class="
            py-2
            px-4
            rounded-md
            bg-quaternary-gray
            hover:bg-secondary-gray
            text-xl text-primary-black
            font-normal font-Inter
          "
        >
          Go to
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const Products = ref([
      {
        name: "Adidas Running Shoe",
      },
      {
        name: "Adidas Sport Shoe",
      },
    ]);
    const details = () => {
      router.push({
        name: "manage-contents-overview",
        params: {
          id: 1,
        },
      });
    };
    return {
      Products,
      details,
    };
  },
};
</script>

