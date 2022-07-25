<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-7xl m-auto px-4 pl-8 space-y-10 pt-28">
        <div class="flex items-center justify-between w-full px-8">
          <span class="text-3xl font-bold text-primary-black">Licences</span>
          <div class="flex items-center space-x-4 max-w-xl w-full">
            <div class="max-w-[540px] w-full h-[46px] relative">
              <div class="absolute left-4 top-4">
                <IconSearch />
              </div>
              <input
                type="text"
                class="
                  w-full
                  h-full
                  rounded-lg
                  bg-white
                  outline-none
                  pl-10
                  px-4
                  placeholder-opacity-25 placeholder-primary-black
                  text-xl
                  font-light font-Inter
                  input-border
                "
                placeholder="Search"
              />
            </div>
            <button
              class="
                h-[46px]
                w-[56px]
                rounded-lg
                bg-white
                flex
                input-border
                hover:bg-opacity-60
              "
            >
              <FilterIcon class="m-auto" />
            </button>
            <button
              class="
                h-[46px]
                w-[56px]
                rounded-lg
                bg-white
                flex
                input-border
                hover:bg-opacity-60
              "
            >
              <SelectIcon class="m-auto" />
            </button>
            <button
              @click="openCreateModal"
              class="
                h-[46px]
                w-[56px]
                rounded-lg
                bg-primary-blue
                input-border
                flex
                hover:bg-opacity-60
              "
            >
              <span class="m-auto text-2xl font-bold text-white">+</span>
            </button>
          </div>
        </div>
        <div class="px-4 sm:px-6 lg:px-8 w-full">
          <div class="mt-8 flex flex-col">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="
                  inline-block
                  min-w-full
                  py-2
                  align-middle
                  md:px-6
                  lg:px-8
                "
              >
                <table
                  class="
                    min-w-full
                    divide-tertiary-gray divide-y-4
                    bg-white
                    rounded-2xl
                    border border-quaternary-gray
                    overflow-hidden
                  "
                >
                  <thead class="">
                    <tr class="">
                      <th
                        scope="col"
                        class="
                          py-3.5
                          pl-4
                          pr-3
                          text-left text-xl
                          font-light font-Inter
                          text-gray-900 text-opacity-50
                          sm:pl-6
                        "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="
                          py-3.5
                          px-3
                          text-left text-xl
                          font-light font-Inter
                          text-gray-900 text-opacity-50
                        "
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="
                          py-3.5
                          px-3
                          text-left text-xl
                          font-light font-Inter
                          text-gray-900 text-opacity-50
                        "
                      >
                        Impressions
                      </th>
                      <th
                        scope="col"
                        class="
                          py-3.5
                          px-3
                          text-right text-xl
                          font-light font-Inter
                          text-gray-900 text-opacity-50
                        "
                      >
                        Extra Impres.
                      </th>
                      <th
                        scope="col"
                        class="
                          py-3.5
                          px-3
                          text-right text-xl
                          font-light font-Inter
                          text-gray-900 text-opacity-50
                        "
                      >
                        Storage
                      </th>
                      <th
                        scope="col"
                        class="
                          py-3.5
                          px-3
                          text-right text-xl
                          font-light font-Inter
                          text-gray-900 text-opacity-50
                        "
                      >
                        User
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-tertiary-gray divide-y-4">
                    <tr
                      class="hover:bg-secondary-gray cursor-pointer"
                      v-for="(licence, index, key) in Licences"
                      :key="key"
                    >
                      <td
                        class="
                          whitespace-nowrap
                          py-6
                          pl-4
                          pr-3
                          text-sm
                          font-medium
                          text-gray-900
                          sm:pl-6
                        "
                      >
                        <div class="flex items-center space-x-4">
                          <IconSub
                            :width="33.16"
                            :height="33.16"
                            :border="'#FF581A'"
                            :maincolor="'#BF3806'"
                            v-if="index == 0"
                          />
                           <IconSub
                            :width="33.16"
                            :height="33.16"
                            :border="'#D817FC'"
                            :maincolor="'#8800A2'"
                            v-else-if="index == 1"
                          />
                           <IconSub
                            :width="33.16"
                            :height="33.16"
                            :border="'#FFED65'"
                            :maincolor="'#C69800'"
                            v-else-if="index == 2"
                          />
                           <IconSub
                            :width="33.16"
                            :height="33.16"
                            :border="'#155188'"
                            :maincolor="'#001324'"
                            v-else
                          />

                          <span
                            class="
                              text-xl text-primary-black
                              font-Inter font-bold
                            "
                            >{{ licence.name }}</span
                          >
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-light font-Inter
                          text-primary-black text-left
                        "
                      >
                        {{ licence.description }}
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-bold font-Inter
                          text-primary-black text-opacity-80 text-right
                        "
                      >
                        {{ licence.impressions }}
                      </td>
                      <td
                        class="
                           whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-bold font-Inter
                          text-primary-black text-opacity-80 text-right
                        "
                      >
                        <span>{{ licence.extra_impres }}</span>
                      </td>
                      <td
                        class="
                           whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-bold font-Inter
                          text-primary-black text-opacity-80 text-right
                        "
                      >
                        <span>{{ licence.Storage }}</span>
                      </td>
                      <td
                        class="
                           whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-bold font-Inter
                          text-primary-black text-opacity-80 text-right
                        "
                      >
                        <span>{{ licence.user }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <CreateNewLicenseModal ref="createModal" />
      </div>
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../layouts/SidebarLayout.vue";
import SideBar from "./includes/SideBar.vue";
import IconSearch from "../../Icons/IconSearch.vue";
import FilterIcon from "../../Icons/FilterIcon.vue";
import SelectIcon from "../../Icons/SelectIcon.vue";
import IconSub from "../../Icons/IconSub.vue";
import CreateNewLicenseModal from "../../components/modals/Settings/CreateNewLicenseModal.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    SideBar,
    IconSearch,
    FilterIcon,
    SelectIcon,
    IconSub,
    CreateNewLicenseModal,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const createModal = ref(null);
    const Licences = ref([
      {
        name: "Polyte Maker",
        description: "Ideal for Content Creators",
        impressions: "1.500",
        extra_impres: "0.1 €",
        Storage: "5 GB",
        user: "1",
      },
      {
        name: "Polyte Business",
        description: "Ideal for small business",
        impressions: "20.000",
        extra_impres: "0.1 €",
        Storage: "800 GB",
        user: "3",
      },
      {
        name: "Polyte Business Pro",
        description: "Ideal for large business",
        impressions: "40.000",
        extra_impres: "0.05 €",
        Storage: "1.500 GB",
        user: "5",
      },
      {
        name: "Custom - CL",
        description: "Coniclabs Internal",
        impressions: "100.000",
        extra_impres: "0 €",
        Storage: "1.500 GB",
        user: "100",
      },
      {
        name: "Custom - Fabrix",
        description: "Fabrik - Manage Companies",
        impressions: "20.000",
        extra_impres: "0.1 €",
        Storage: "800 GB",
        user: "10",
      },
      {
        name: "Custom - Adidas",
        description: "Large Scale Impressions",
        impressions: "150.000",
        extra_impres: "0.01 €",
        Storage: "1.500 GB",
        user: "5",
      },
    ]);
    const openCreateModal = () => {
      createModal.value.OpenModal();
    };
    return {
      router,
      route,
      Licences,
      openCreateModal,
      createModal,
    };
  },
};
</script>


