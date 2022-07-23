<template>
  <div class="w-full flex flex-col items-start space-y-4 font-Inter">
    <div class="flex justify-between items-center w-full">
      <span class="text-primary-black font-bold text-3xl">Active Version</span>
    </div>
    <div
      class="
        w-full
        bg-white
        rounded-2xl
        input-border
        flex
        relative
        p-5
        items-center
        justify-between
      "
    >
      <div class="flex items-center space-x-2">
        <div
          class="
            w-[53px]
            h-[37px]
            rounded-md
            overflow-hidden
            bg-quaternary-gray
          "
        >
          <div class="w-full h-full object-contain">
            <img
              src="https://polyte-app.herokuapp.com/transparent-baby.png"
              alt=""
            />
          </div>
        </div>
        <div class="w-3 h-3 rounded-md" style="background: #00ffba"></div>
        <span class="text-xl text-primary-black font-normal text-opacity-80"
          >Adidas Sport Shoe</span
        >
      </div>
      <button
        @click="Change"
        class="
          text-xl
          font-normal
          text-primary-black
          font-Inter
          bg-quaternary-gray
          hover:bg-secondary-gray
          py-2
          px-6
          rounded-md
        "
      >
        Change Version
      </button>
    </div>
    <ManageProductVersionsModal ref="ManageProductVersions" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import ManageProductVersionsModal from "../../components/modals/ManageContent/ManageProductVersionsModal.vue";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const ManageProductVersions = ref(null);
    const AllFunctions = () => {
      router.push({
        name: "manage-contents-variant-options",
        params: { id: route.params.id },
      });
    };
    const Change = () => {
      ManageProductVersions.value.openModal();
    };
    return {
      AllFunctions,
      Change,
      ManageProductVersions,
    };
  },
  components: {
    ManageProductVersionsModal,
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