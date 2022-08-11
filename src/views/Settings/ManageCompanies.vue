<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-7xl m-auto px-4 pl-8 space-y-10 pt-28">
        <div class="flex items-center justify-between w-full px-8">
          <span class="text-3xl font-bold text-primary-black">Companies</span>
          <div class="flex items-center space-x-4 max-w-xl w-full">
            <div class="max-w-[540px] w-full h-[46px] relative">
              <div class="absolute left-6 top-6">
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
                  pl-14
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
                        Main Contact
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
                        License
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
                      class="hover:bg-secondary-gray cursor-pointer "
                      v-for="(company, index, key) in Companies"
                      :key="key"
                    >
                      <td
                       @click="openCreateModal"
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
                          <IconFlag />
                          <span
                            class="
                              text-xl text-primary-black
                              font-Inter font-bold
                            "
                            >{{ company.name }}</span
                          >
                        </div>
                      </td>
                      <td
                       @click="openCreateModal"
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-light font-Inter
                          text-primary-black text-left
                        "
                      >
                        {{ company.description }}
                      </td>
                      <td
                       @click="openCreateModal"
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-light font-Inter
                          text-primary-black text-opacity-80 text-left
                        "
                      >
                        {{ company.main_contact }}
                      </td>
                      <td
                       @click="openCreateModal"
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-light font-Inter
                          text-primary-black text-opacity-80 text-right
                        "
                      >
                        <div class=" flex items-center space-x-4 justify-end">
                           <span> {{company.license}}</span>
                        <IconSub :width="33.16" :height="33.16" :border="'#C69800'" :maincolor="'#FFED65'"  v-if="index == 0"/>
                         <IconSub :width="33.16" :height="33.16" :border="'#001324'" :maincolor="'#155188'" v-else-if="index == 1" />
                          <IconSub :width="33.16" :height="33.16" :border="'#D817FC'" :maincolor="'#D817FC'"  v-else/>
                        </div>
                      </td>
                      <td
                       @click="openCreateModal"
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-light font-Inter
                          text-primary-black text-opacity-80 text-right
                        "
                      >
                       {{company.user}}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <CreateNewCompanyModal ref="createModal" />
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
import IconFlag from "../../Icons/IconFlag.vue";
import IconSub from "../../Icons/IconSub.vue";
import CreateNewCompanyModal from "../../components/modals/Settings/CreateNewCompanyModal.vue";
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
    CreateNewCompanyModal,
    IconFlag,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const createModal = ref(null);
    const Companies = ref([
      {
        name: "Vizoo GmbH",
        description: "Fabrix admin",
        main_contact: "renate@vizoo3d.com",
        license: "Polyte Business Pro",
        user: "6 / 20",
      },
      {
        name: "Coniclabs GmbH",
        description: "Polyte parent company",
        main_contact: "admin@coniclabs.com",
        license: "Custom",
        user: "25 / 100",
      },
      {
        name: "Berghain GmbH",
        description: "Brings furniture to life",
        main_contact: "aergerlich@berghain.com",
        license: "Polyte Business",
        user: "2 / 3",
      },
    ]);
    const openCreateModal = () => {
      createModal.value.OpenModal();
    };
    return {
      router,
      route,
      Companies,
      openCreateModal,
      createModal,
    };
  },
};
</script>


