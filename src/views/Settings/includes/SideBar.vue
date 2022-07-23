<template>
  <div class="w-full flex flex-col items-start space-y-10 px-5 font-Inter">
    <div class="w-full pl-4 space-y-8">
      <div class="w-full flex flex-col items-start space-y-4 pt-10 pl-4">
        <span class="text-3xl text-primary-black font-bold font-Inter text-left"
          >Settings</span
        >
      </div>
      <div class="flex flex-col items-start space-y-2">
        <button
          @click="GoTo(item.pathname)"
          v-for="(item, index, key) in List"
          :key="key"
          class="
            text-xl
            font-Inter
            text-primary-black
            hover:bg-white
            py-2
            px-4
            w-full
            text-left
            rounded-lg
          "
          :class="{ 'bg-white font-bold': item.active }"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const List = ref([
      {
        name: "Overview",
        pathname: "app-settings-overview",
        active: false,
      },
      {
        name: "Manage Users",
        pathname: "app-settings-manage-users",
        active: false,
      },
      {
        name: "Manage Roles",
        pathname: "app-settings-manage-roles",
      },
      {
        name: "Subscription",
        pathname: "app-settings-subscription",
      },
      {
        name: "Billing",
        pathname: "app-settings-billing",
      },
      {
        name: "Manage Companies",
        pathname: "app-settings-manage-companies",
      },
      {
        name: "Manage Licences",
        pathname: "app-settings-manage-licences",
      },
    ]);
    const SetActive = (item) => {
      List.value.forEach((item) => {
        item.active = false;
      });
      item.active = true;
    };
    const GoTo = (pathname) => {
      router.push({ name: pathname, params: { id: route.params.id } });
    };
    const SetLinkActive = () => {
      List.value.forEach((item) => {
        if (item.pathname == route.name) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    };
    const goBack = () => {
      router.push({ name: "manage-contents-Products" });
    };
    onMounted(() => {
      setTimeout(() => {
        SetLinkActive();
      }, 10);
    });
    return {
      route,
      router,
      List,
      SetActive,
      GoTo,
      SetLinkActive,
      goBack,
    };
  },
};
</script>
