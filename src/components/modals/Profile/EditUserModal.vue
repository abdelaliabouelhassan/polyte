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
              <div class="w-full justify-between flex items-center px-4">
                <div class="flex items-center space-x-4">
                  <div
                    class="
                      w-[120px]
                      h-[120px]
                      rounded-[19px]
                      flex
                      bg-tertiary-gray
                    "
                  >
                    <span class="m-auto text-3xl text-primary-black font-bold"
                      >MW</span
                    >
                  </div>
                  <div class="flex flex-col items-start space-y-1">
                    <span
                      class="font-bold font-Inter text-3xl text-primary-black"
                      >Marius Wildeke</span
                    >
                    <span
                      class="font-bold font-Inter text-xl text-primary-black"
                      >Berghain GmbH</span
                    >
                  </div>
                </div>
              </div>

              <div
                class="
                  grid grid-cols-2
                  gap-10
                  w-full
                  overflow-y-auto
                  max-h-[450px]
                  px-4
                "
              >
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
                    >Display Name</label
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
                      placeholder="Enter Name"
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
                    >Email:</label
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
                      placeholder="Enter Email"
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
                    >Given Name</label
                  >
                  <div class="mt-1 w-full">
                    <input
                      type="text"
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
                      placeholder="Enter  Name"
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
                    >Surname:</label
                  >
                  <div class="mt-1 w-full">
                    <input
                      type="email"
                      name="text"
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
                      placeholder="Enter Surname"
                      aria-describedby="email-description"
                    />
                  </div>
                </div>

              
                <div class="m-auto w-full space-y-2">
                  <span
                    class="
                      block
                      text-xl
                      font-bold
                      text-primary-black
                      font-Inter
                    "
                    > Details (optional)</span
                  >
                  <label
                    for="email"
                    class="
                      block
                      text-xl
                      font-bold
                      text-primary-black
                      font-Inter
                    "
                    >Street</label
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
                      placeholder="Enter Street name"
                      aria-describedby="email-description"
                    />
                  </div>
                </div>
                <div class="m-auto w-full space-y-2">
                  <span class="invisible">.</span>
                  <label
                    for="email"
                    class="
                      block
                      text-xl
                      font-bold
                      text-primary-black
                      font-Inter
                    "
                    >Street Number</label
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
                      placeholder="Enter Street Number"
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
                    >Zip Code</label
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
                      placeholder="Enter Zip Code"
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
                    >City</label
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
                      placeholder="Enter City"
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
                    >Country</label
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
                      placeholder="Enter Country"
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
                    >Website</label
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
                      placeholder="Enter Website"
                      aria-describedby="email-description"
                    />
                  </div>
                </div>
               
              </div>

              <div class="w-full flex justify-between items-center pt-10">
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
import IconFlag from "../../../Icons/IconFlag.vue";
import { useStore } from "../../../stores/NewProjectStore.js";

export default {
  setup() {
    /// let  store = useStore(),
    const store = useStore();
    const open = ref(false);

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

    return {
      Create,
      Cancel,
      OpenModal,
      open,
      store,
    };
  },
  components: {
    IconArrowLeft,
    IconFlag,
  },
};
</script>




<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ebebf0;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
