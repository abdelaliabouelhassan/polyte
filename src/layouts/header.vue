<template>
  <div
    class="
     fixed
      w-full
      bg-white
      px-10
      pb-4 pt-4
      border-0 border-b-2  border-secondary-gray
      card-shadow
      flex
      justify-between
      items-center
      font-Inter
    "
  >
    <div>
      <Logo />
    </div>

    <div class="flex items-center space-x-10">
      <div
        @click="SetActive(item)"
        v-for="(item, index, key) in links"
        :key="key"
        class="
          cursor-pointer
          text-primary-black text-center text-xl
          py-2
          px-4
          rounded-md
        "
        :class="{
          'bg-primary-gray text-opacity-100  font-bold': item.active,
          'font-normal text-opacity-50 ': !item.active,
        }"
      >
        <span class="font-Inter">{{ item.name }}</span>
      </div>
    </div>
    <div class="flex items-center space-x-3">
      <div class="flex flex-col items-end">
        <span class="text-primary-black text-opacity-100 text-base font-normal"
          >Marius Wildeke</span
        >
        <span class="text-primary-black text-opacity-50 text-xs font-normal"
          >Berghain GmbH</span
        >
      </div>
      <div class="cursor-pointer">
        <ProfileIcon />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Logo from "../Icons/Logo.vue";
import ProfileIcon from "../Icons/ProfileIcon.vue";
export default {
  components: {
    Logo,
    ProfileIcon,
  },
  setup() {
    const links = ref([
      {
        name: "Overview",
        path: "/",
        active: true,
      },
      {
        name: "Manage Content",
        path: "/about",
        active: false,
      },
      {
        name: "Manage Projects",
        path: "/contact",
        active: false,
      },
      {
        name: "Settings",
        path: "/contact",
        active: false,
      },
    ]);
    const SetActive = (link) => {
      links.value.forEach((item) => {
        item.active = false;
      });
      link.active = true;
    };
    return {
      links,
      SetActive,
    };
  },
};
</script>