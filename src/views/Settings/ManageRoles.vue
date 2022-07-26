<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-7xl m-auto px-4 pl-8 space-y-10 pt-28">
        <div class="flex items-center justify-between w-full px-8">
          <span class="text-3xl font-bold text-primary-black">Roles</span>
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
                        Company
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
                        Billing
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
                        Admin
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
                        Content
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
                        Editor
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-tertiary-gray divide-y-4">
                    <tr
                      class="hover:bg-secondary-gray cursor-pointer"
                      v-for="(role, index, key) in Roles"
                      :key="key"
                    >
                      <td
                      @click="openCreateModal"
                        class="
                          whitespace-nowrap
                          py-4
                          pl-4
                          pr-3
                          text-sm
                          font-medium
                          text-gray-900
                          sm:pl-6
                          text-center
                        "
                      >
                        <div
                          class="py-2 px-1 rounded-full"
                          style="background: #83e6fd"
                          v-if="role.role == 'Artist'"
                        >
                          <span
                            class="
                              text-xl
                              font-bold
                              text-primary-black text-opacity-80
                            "
                            >{{ role.role }}</span
                          >
                        </div>
                        <div
                          class="py-2 px-1 rounded-full"
                          style="background: #83fcd1"
                          v-else-if="role.role == 'Admin'"
                        >
                          <span
                            class="
                              text-xl
                              font-bold
                              text-primary-black text-opacity-80
                            "
                            >{{ role.role }}</span
                          >
                        </div>
                        <div
                          class="py-2 px-1 rounded-full"
                          style="background: #fc8f83"
                          v-else
                        >
                          <span
                            class="
                              text-xl
                              font-bold
                              text-primary-black text-opacity-80
                            "
                            >{{ role.role }}</span
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
                        {{ role.description }}
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
                        {{ role.company }}
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-light font-Inter
                          text-primary-black text-opacity-80 text-center
                        "
                      >
                        <div class="justify-end flex">
                          <label class="control control-checkbox pb-4">
                            <input type="checkbox" v-model="role.billing" />
                            <div class="control_indicator"></div>
                          </label>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-light font-Inter
                          text-primary-black text-opacity-80 text-right
                        "
                      >
                        <div class="justify-end flex">
                          <label class="control control-checkbox pb-4">
                            <input type="checkbox" v-model="role.admin" />
                            <div class="control_indicator"></div>
                          </label>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-light font-Inter
                          text-primary-black text-opacity-80 text-right
                        "
                      >
                        <div class="justify-end flex">
                          <label class="control control-checkbox pb-4">
                            <input type="checkbox"  v-model="role.content"  />
                            <div class="control_indicator"></div>
                          </label>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-xl
                          font-light font-Inter
                          text-primary-black text-opacity-80 text-right
                        "
                      >
                        <div class="justify-end flex">
                          <label class="control control-checkbox pb-4">
                            <input type="checkbox"   v-model="role.editor" />
                            <div class="control_indicator"></div>
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <EditRole ref="EditRoleModal" />
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
import IconProfile from "../../Icons/IconProfile.vue";
import EditRole from "../../components/modals/Settings/EditRoleModal.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    SideBar,
    IconSearch,
    FilterIcon,
    SelectIcon,
    IconProfile,
    EditRole,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const EditRoleModal = ref(null);
    const Roles = ref([
      {
        role: "Artist",
        description: "Edit projects",
        company: "Berghain GmbH",
        billing: false,
        admin: false,
        content: false,
        editor: true,
      },
      {
        role: "Admin",
        description: "Manage Company",
        company: "Berghain GmbH",
        billing: true,
        admin: true,
        content: true,
        editor: false,
      },
      {
        role: "Manager",
        description: "Manage Projects",
        company: "Berghain GmbH",
        billing: false,
        admin: false,
        content: true,
        editor: false,
      },
    ]);
    const openCreateModal = () => {
      EditRoleModal.value.OpenModal();
    };
    return {
      router,
      route,
      Roles,
      openCreateModal,
      EditRoleModal,
    };
  },
};
</script>



<style scoped>
.control {
  font-family: arial;
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 5px;
  padding-top: 3px;
  cursor: pointer;
  font-size: 16px;
}
.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.control_indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
  border: 0px solid #000000;
  border-radius: 6px;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
  background: #cccccc;
}

.control input:checked ~ .control_indicator {
  background: #505efd;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:disabled ~ .control_indicator {
  background: #e6e6e6;
  opacity: 0.6;
  pointer-events: none;
}
.control_indicator:after {
  box-sizing: unset;
  content: "";
  position: absolute;
  display: none;
}
.control input:checked ~ .control_indicator:after {
  display: block;
}
.control-checkbox .control_indicator:after {
  left: 8px;
  top: 4px;
  width: 3px;
  height: 8px;
  border: solid #ffffff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.control-checkbox input:disabled ~ .control_indicator:after {
  border-color: #7b7b7b;
}
</style>

