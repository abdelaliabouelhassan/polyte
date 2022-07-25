<template>
  <div class="w-full flex flex-col items-start space-y-4 font-Inter">
    <div class="flex justify-between items-center w-full">
      <span class="text-primary-black font-bold text-3xl"
        >Billing information</span
      >
    </div>
    <div class="w-full bg-white rounded-2xl  h-96 flex flex-col justify-between  input-border">
      <div
        class="
          flex flex-col
          items-start
          space-y-5
          p-10
          text-xl
          font-light
          text-primary-black
        "
      >
        <span class="text-xl font-bold text-primary-black">Berghain GmbH</span>
        <p class="max-w-[190px]">
          Berghain GmbH Am Wriezener bhf 10243 Berlin Germany
        </p>
        <span>VAT/Tax ID: <span class="font-bold"> DE 310 025 781</span></span>
      </div>

      <div class="border-0 border-t-4 border-quaternary-gray p-5 flex">
        <button
          class="
            m-auto
            text-xl
            font-bold font-Inter
            text-white
            bg-primary-blue
            hover:bg-secondary-blue
            py-2
            px-14
            rounded-md
            focus:ring-2
            ring-primary-gray
          "
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const AllFunctions = () => {
      router.push({
        name: "manage-contents-variant-options",
        params: { id: route.params.id },
      });
    };

    return {
      AllFunctions,
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