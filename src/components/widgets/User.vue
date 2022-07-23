<template>
  <div class="w-full flex flex-col items-start space-y-2 font-Inter">
    <div class="w-full flex justify-between items-center pr-4">
      <span class="text-primary-black text-xl font-light font-Inter">User</span>
    </div>
    <div
      class="
        w-full
        rounded-2xl
        bg-white
        py-6
        px-4
        flex
        justify-between
        items-center
      "
    >
      <div class="flex items-center space-x-4">
        <IconProfile />
        <span
          class="
            text-xl
            font-bold font-Inter
            text-primary-black text-opacity-100
          "
          >2 / 3 Active Users</span
        >
      </div>
      <div class="flex items-center space-x-1">
        <button
          @click="manageUsers"
          class="
            text-primary-black text-base
            font-normal
            py-2
            px-4
            rounded-md
            bg-primary-gray
            hover:bg-gray-300
          "
        >
          Manage
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import IconProfile from "../../Icons/ProfileIcon.vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const manageUsers = () => {
      router.push({
        name: "app-settings-manage-users",
      });
    };
    return {
      manageUsers,
    };
  },
  components: {
    IconProfile,
  },
};
</script>