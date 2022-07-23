<template>
  <div
    v-if="open"
    class="relative z-50"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        fixed
        inset-0
        bg-[#00132422] bg-opacity-100
        transition-opacity
        overflow-hidden
      "
      style="backdrop-filter: blur(7px); -webkit-backdrop-filter: blur(7px)"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="
          flex
          items-end
          sm:items-center
          justify-center
          min-h-full
          text-center
          sm:p-0
        "
      >
        <div
          class="
            relative
            bg-white
            rounded-[27px]
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:w-full
            modal-border
            max-w-5xl
            p-10
          "
        >
          <div class="w-full flex flex-col items-start space-y-4">
            <div class="flex flex-col items-start space-y-4 w-full">
              <div class="w-full flex justify-between items-center">
                <div class="flex flex-col items-start space-y-4">
                  <div class="flex items-center space-x-2 w-full">
                    <span
                      class="font-bold font-Inter text-3xl text-primary-black"
                      >Edit Role</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <span
                      class="
                        text-xl
                        font-light font-Inter
                        text-primary-black text-opacity-50
                      "
                      >Company:</span
                    >
                    <select
                      name=""
                      id=""
                      class="
                        bg-white
                        border-[3px] border-secondary-gray
                        outline-none
                        rounded-xl
                        py-2
                        px-2
                        text-xl text-primary-black
                        focus:border-secondary-blue
                        font-bold
                        w-full
                      "
                    >
                      <option value="">Berghain GmbH</option>
                    </select>
                  </div>
                </div>
                <div class="py-2 px-4 rounded-full" style="background: #fc8f83">
                  <span
                    class="text-xl font-bold text-primary-black text-opacity-80"
                    >Manager</span
                  >
                </div>
              </div>

              <div class="grid grid-cols-1 gap-10 w-full">
                <div class="m-auto w-full space-y-2">
                  <label
                    for="email"
                    class="
                      block
                      text-xl
                      font-bold
                      text-primary-black
                      font-Inter
                    "
                    >Role Name</label
                  >
                  <div class="mt-1 w-full">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="
                        bg-white
                        px-4
                        py-2
                        rounded-xl
                        border-[3px] border-secondary-gray
                        outline-none
                        focus:border-secondary-blue
                        text-bases
                        placeholder-primary-black placeholder-opacity-50
                        font-light font-Inter
                        w-full
                      "
                      placeholder="Enter Role Name"
                      aria-describedby="email-description"
                    />
                  </div>
                </div>

                <div class="m-auto w-full space-y-2">
                  <label
                    for="email"
                    class="
                      block
                      text-xl
                      font-bold
                      text-primary-black
                      font-Inter
                    "
                    >Description</label
                  >
                  <div class="mt-1 w-full">
                    <textarea
                      placeholder="Enter Description"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      class="
                        h-24
                        bg-white
                        px-4
                        py-2
                        rounded-xl
                        border-[3px] border-secondary-gray
                        outline-none
                        focus:border-secondary-blue
                        text-bases
                        placeholder-primary-black placeholder-opacity-50
                        font-light font-Inter
                        w-full
                      "
                    ></textarea>
                  </div>
                </div>
                <div
                  class="w-full flex flex-col space-y-2"
                  v-for="(item, index, key) in Roles"
                  :key="key"
                >
                  <button class="w-full flex items-center space-x-2" @click="openClose(item)">
                    <IconArrow :class="{'arrow-left':item.open}" />
                    <span class="text-xl font-bold text-primary-black">{{
                      item.name
                    }}</span>
                  </button>

                  <div
                    v-show="item.open"
                    class="flex flex-col items-start space-y-4 pl-4"
                    v-for="(role, roleindex, rolekey) in item.roles"
                    :key="rolekey"
                  >
                    <div class="flex items-center space-x-2">
                      <label class="control control-checkbox pb-4">
                        <input type="checkbox" v-model="role.checked" />
                        <div class="control_indicator"></div>
                      </label>
                      <span
                        class="
                          text-primary-black text-opacity-60 text-xl
                          font-light font-Inter
                        "
                        >{{ role.name }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full flex justify-between items-center pt-24">
                <button
                  @click="Cancel"
                  type="button"
                  class="
                    inline-flex
                    items-center
                    px-8
                    py-2
                    border border-transparent
                    text-sm
                    font-medium
                    rounded-md
                    shadow-sm
                    text-primary-black
                    bg-secondary-gray
                    hover:bg-opacity-80
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-secondary-gray
                  "
                >
                  Cancel
                </button>
                <button
                  @click="Create"
                  type="button"
                  class="
                    inline-flex
                    items-center
                    px-10
                    py-2
                    border border-transparent
                    text-sm
                    font-medium
                    rounded-md
                    shadow-sm
                    text-white
                    bg-primary-blue
                    hover:bg-opacity-80
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-primary-blue
                  "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";

import IconArrowLeft from "../../../Icons/IconArrowLeft.vue";
import IconArrow from "../../../Icons/IconArrow.vue";
import { useStore } from "../../../stores/NewProjectStore.js";

export default {
  setup() {
    /// let  store = useStore(),
    const store = useStore();
    const open = ref(false);
    const Roles = ref([
      {
        name: "Billing",
        open:false,
        roles: [
          {
            name: "Manage User",
            checked: true,
          },
          {
            name: "Manage Roles",
            checked: true,
          },
          {
            name: "Manage Companies",
            checked: false,
          },
          {
            name: "Manage Licenses",
            checked: false,
          },
        ],
      },
      {
        name: "Admin",
        open:false,
        roles: [
          {
            name: "Manage User",
            checked: true,
          },
          {
            name: "Manage Roles",
            checked: true,
          },
          {
            name: "Manage Companies",
            checked: true,
          },
          {
            name: "Manage Licenses",
            checked: false,
          },
        ],
      },
      {
        name: "Content",
        open:false,
        roles: [
          {
            name: "Manage User",
            checked: true,
          },
          {
            name: "Manage Roles",
            checked: false,
          },
          {
            name: "Manage Companies",
            checked: false,
          },
          {
            name: "Manage Licenses",
            checked: true,
          },
        ],
      },
      {
        name: "Editor",
        open:false,
        roles: [
          {
            name: "Manage User",
            checked: true,
          },
          {
            name: "Manage Roles",
            checked: false,
          },
          {
            name: "Manage Companies",
            checked: true,
          },
          {
            name: "Manage Licenses",
            checked: false,
          },
        ],
      },
    ]);
    const Cancel = () => {
      open.value = false;
    };
    const OpenModal = () => {
      open.value = true;
    };
    const Create = () => {
      //create code here

      //close modal after create
      open.value = false;
    };

    const openClose = (item) => {
      item.open = !item.open;

    }

    return {
      Create,
      Cancel,
      OpenModal,
      open,
      store,
      Roles,
      openClose,
    };
  },
  components: {
    IconArrowLeft,
    IconArrow,
  },
};
</script>


<style scoped>
.rounded-color {
  background-color: #f4f6f8;
}
</style>


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