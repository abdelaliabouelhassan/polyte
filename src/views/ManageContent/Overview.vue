<template>
  <SidebarLayout>
    <template v-slot:sidebar>
     <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-7xl m-auto px-4 pl-8 space-y-24">
        sdfsdf
      </div>
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../layouts/SidebarLayout.vue";
import SideBar from "./includes/SideBar.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    SideBar,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
   
    return {
      router,
      route,
      
    };
  },
};
</script>


