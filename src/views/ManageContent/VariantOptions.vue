<template>
  <SidebarLayout>
    <template v-slot:sidebar>
     <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-7xl m-auto px-4 pl-8 space-y-24">
        <div class=" w-full grid grid-cols-3 gap-10 pt-20">
          <div class=" w-full col-span-1">
            <OptionsCard />
          </div>
          <div class=" w-full col-span-2 grid grid-cols-1 gap-10">
            <Preview3DCard />
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
import OptionsCard from "../../components/cards/OptionsCard.vue";
import _3DPreviewCard from  "../../components/cards/_3DPreviewCard.vue";
import APIReferenceCard from "../../components/cards/APIReferenceCard.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    SideBar,
    OptionsCard,
    'Preview3DCard':_3DPreviewCard,
    APIReferenceCard
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const code = ` 
function setVariant()
         {
             var player = document.querySelector('polyte-player');
              player.setVariant('Variant Option 298');
         }`;
    return {
      router,
      route,
      code
    };
  },
};
</script>


