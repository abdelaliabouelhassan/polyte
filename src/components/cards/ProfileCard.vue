<template>
  <div class="w-full flex flex-col items-start space-y-4 font-Inter">
    <div class="w-full bg-white rounded-2xl input-border space-y-6">
      <div class="w-full p-6 space-y-6">
        <div class="w-full flex justify-between items-start">
          <div class="flex items-center space-x-5">
            <div
              class="w-[120px] h-[120px] rounded-[19px] flex bg-tertiary-gray"
            >
              <span class="m-auto text-3xl text-primary-black font-bold"
                >MW</span
              >
            </div>
            <div class="flex flex-col items-start space-y-1">
              <span class="text-3xl font-bold text-primary-black"
                >Marius Wildeke</span
              >
              <span class="text-xl font-bold text-primary-black"
                >Berghain GmbH</span
              >
            </div>
          </div>
          <div class="py-2 px-6 rounded-full bg-[#83FCD1]">
            <span class="text-xl font-bold text-primary-black">Admin</span>
          </div>
        </div>
        <div class="max-w-[200px] w-full py-6">
          <p class="font-light text-primary-black text-xl">
            Am Wriezener bhf 10243 Berlin Germany
          </p>
        </div>

        <div class="w-full flex justify-end">
          <button
            class="
              text-xl
              font-bold font-Inter
              text-white
              bg-primary-blue
              hover:bg-secondary-blue
              py-2
              px-6
              rounded-md
              focus:ring-2
              ring-primary-gray
            "
          >
            Invite a friend
          </button>
        </div>
      </div>

      <div
        class="
          p-5
          border-0 border-t-4 border-quaternary-gray
          w-full
          flex
          justify-between
          items-center
        "
      >
        <button
         @click="EditUser"
          class="
            text-xl
            font-normal font-Inter
            text-primary-black
            bg-tertiary-gray
            hover:bg-secondary-gray
            py-2
            px-6
            rounded-md
            focus:ring-2
            ring-primary-gray
          "
        >
          Edit Profile
        </button>
        <button
          class="
            text-xl
            font-normal font-Inter
            text-primary-black
            bg-tertiary-gray
            hover:bg-secondary-gray
            py-2
            px-6
            rounded-md
            focus:ring-2
            ring-primary-gray
          "
        >
          Change Password
        </button>
      </div>
    </div>
    <EditUserModal ref="openModal" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter, useRoute } from "vue-router";
import EditUserModal from "../modals/Profile/EditUserModal.vue";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const openModal = ref(false)
    const AllFunctions = () => {
      router.push({
        name: "manage-contents-variant-options",
        params: { id: route.params.id },
      });
    };
    const EditUser = () => {
      openModal.value.OpenModal();
    };
    return {
      AllFunctions,
      openModal,
      EditUser
    };
  },
  components: {
    EditUserModal,
  },
};
</script>
