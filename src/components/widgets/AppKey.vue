<template>
  <div class="w-full flex flex-col items-start space-y-4 font-Inter">
    <div class="flex justify-between items-center w-full">
      <span class="text-primary-black font-bold text-3xl">App Key</span>
      <button
       @click="createKey"
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
        Add Key
      </button>
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
        <span class="text-xl text-primary-black font-bold">App Key:</span>
        <span class="text-xl font-light text-secondary-blue" id="appKey"
          >983749biqneorngäoqmjäo3jo2joet9</span
        >
      </div>
      <button
        @click="copyToClipboard"
        class="
          text-xl
          font-normal
          text-primary-black
          font-Inter
          bg-quaternary-gray
          hover:bg-secondary-gray
          py-3
          px-4
          rounded-md
          focus:ring-2
          ring-secondary-gray
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.683"
          height="16.456"
          viewBox="0 0 13.683 16.456"
        >
          <path
            id="Path_41"
            data-name="Path 41"
            d="M10,0H3.685A3.689,3.689,0,0,0,0,3.684v9.087a3.689,3.689,0,0,0,3.685,3.684H10a3.688,3.688,0,0,0,3.684-3.684V3.684A3.688,3.688,0,0,0,10,0m2.062,12.771A2.065,2.065,0,0,1,10,14.834H3.685a2.065,2.065,0,0,1-2.063-2.062V3.684A2.065,2.065,0,0,1,3.685,1.622h.081v.25A1.268,1.268,0,0,0,5.032,3.139H8.651A1.268,1.268,0,0,0,9.918,1.872v-.25H10a2.065,2.065,0,0,1,2.062,2.062Zm-1.517-5.8a.811.811,0,0,1-.811.811H3.968a.811.811,0,1,1,0-1.622H9.733a.811.811,0,0,1,.811.811m0,2.69a.811.811,0,0,1-.811.811H3.968a.811.811,0,1,1,0-1.622H9.733a.811.811,0,0,1,.811.811M8,12.506a.811.811,0,0,1-.811.811H3.95a.811.811,0,0,1,0-1.622H7.19A.811.811,0,0,1,8,12.506"
            fill="#001324"
          />
        </svg>
      </button>
    </div>
    <CreateKeyModal ref="CreateKeyModal" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import CreateKeyModal from "../../components/modals/ManageContent/CreateKeyModal.vue";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const CreateKeyModal = ref(null);
    const AllFunctions = () => {
      router.push({
        name: "manage-contents-variant-options",
        params: { id: route.params.id },
      });
    };
    const copyToClipboard = () => {
      const appKey = document.getElementById("appKey");
      const range = document.createRange();
      range.selectNode(appKey);
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    };
    const createKey = () =>{
        CreateKeyModal.value.openModal();
    }
    return {
      AllFunctions,
      CreateKeyModal,
      copyToClipboard,
      createKey
    };
  },
  components: {
    CreateKeyModal,
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