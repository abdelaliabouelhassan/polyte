<template>
  <div
    class="
      fixed z-40
      w-full
      bg-white
      px-10
      pb-4
      pt-4
      border-0 border-b-2 border-secondary-gray
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
          hover:bg-gray-300
        "
        :class="{
          'bg-primary-gray text-opacity-100  font-bold hover:bg-primary-gray ':
            item.active,
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
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    Logo,
    ProfileIcon,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const links = ref([
      {
        name: "Overview",
        pathname: "overview",
        active: false,
        children: [],
      },
      {
        name: "Manage Content",
        pathname: "manage-content",
        active: false,
        children: [],
      },
      {
        name: "Manage Projects",
        pathname: "manage-projects-projects",
        active: false,
        children: [
          "manage-projects-projects",
          "manage-projects-details",
          "manage-projects-create",
        ],
      },
      {
        name: "Settings",
        pathname: "settings",
        active: false,
        children: [],
      },
    ]);
    const SetActive = (link) => {
      
      links.value.forEach((item) => {
        item.active = false;
      });
    link.active = true;
      GoTo(link.pathname);
    };
    const GoTo = (pathname) => {
      router.push({ name: pathname });
    };
    const SetLinkActive = () => {
      links.value.forEach((item) => {
        if (item.pathname == route.name) {
          item.active = true;
        } else {
          item.active = false;
          item.children.forEach((child) => {
            if (child == route.name) {
              item.active = true;
            }
          });
        }
      });
    };
    onMounted(() => {
      setTimeout(() => {
        SetLinkActive();
      }, 10);
    });

    return {
      links,
      SetActive,
      GoTo,
      SetLinkActive,
    };
  },
};
</script>