<template>
  <SidebarLayout>
    <template v-slot:sidebar>
     <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-20 max-w-7xl m-auto px-20  space-y-24">
          <div class=" flex flex-col items-start space-y-10">
            <IntegrationCode :code="code" :code2="code2" />

            <AccessingPolytePlayerCard />
          </div>
      </div>
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../layouts/SidebarLayout.vue";
import SideBar from "./includes/SideBar.vue";
import IntegrationCode from  "../../components/cards/IntegrationCode.vue";
import AccessingPolytePlayerCard from "../../components/cards/AccessingPolytePlayerCard.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    SideBar,
    IntegrationCode,
    AccessingPolytePlayerCard
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const code = "\nimport https://cdn.polyte.cloud/PolytePlayer.js";
    const code2 = "<polyte-player app-key=983749biqneorngäoqmjäo3jo2joet9 ></polyte-player>"
    return {
      router,
      route,
      code,
      code2
    };
  },
};
</script>


