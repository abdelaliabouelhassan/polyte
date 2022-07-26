<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-[1280px] m-auto px-4 pl-8 space-y-24">
        <div class="w-full grid grid-cols-3 gap-10 pt-20">
          <div class="w-full col-span-1">
            <ViewsCard />
          </div>
          <div class="w-full col-span-2 grid grid-cols-1 gap-10">
            <Preview3D2Card />
            <APIReferenceCard :code="code" />
          </div>
        </div>
      </div>
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../layouts/SidebarLayout.vue";
import SideBar from "./includes/SideBar.vue";
import ViewsCard from "../../components/cards/ViewsCard.vue";
import _3DPreview2Card from "../../components/cards/_3DPreview2Card.vue";
import APIReferenceCard from "../../components/cards/APIReferenceCard.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    SideBar,
    ViewsCard,
    Preview3D2Card: _3DPreview2Card,
    APIReferenceCard,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const code = `
     function setCamera() 
      { 
        var player = document.querySelector(„polyte-player“);
        player.setCamera(„Front view“);
      }`;
    return {
      router,
      route,
      code,
    };
  },
};
</script>


