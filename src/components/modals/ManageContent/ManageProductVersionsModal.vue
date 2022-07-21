<template>
  <div
   v-if="open"
    class="relative z-50 font-Inter"
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
            p-10
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:w-full
            modal-border
            space-y-10
            max-w-5xl
          "
        >
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <div>
                <IconVersion />
              </div>
              <span class="font-bold text-3xl text-primary-black"
                >Manage Product Versions</span
              >
            </div>
            <div>
              <button
                class="
                  text-xl
                  font-light
                  text-white
                  font-Inter
                  bg-primary-red
                  hover:bg-opacity-80
                  py-2
                  px-6
                  rounded-md
                  flex
                  items-center
                  space-x-2
                "
              >
              <IconTrash />
                <span> Delete all unused</span>
              </button>
            </div>
          </div>

          <div class="w-full">
            <div class="flex flex-col">
              <div class="overflow-x-auto">
                <div class="inline-block min-w-full py-2 align-middle max-h-96 h-full">
                  <table
                    class="
                      min-w-full
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
                          Thumb
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
                          Source Assembly
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
                          Date
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
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, index, key) in Products" :key="key">
                        <td
                          class="
                            whitespace-nowrap
                            py-4
                            pl-4
                            pr-3
                            text-sm
                            font-medium
                            text-gray-900
                            sm:pl-6
                          "
                        >
                          <div
                            class="
                              w-[79px]
                              h-[53px]
                              rounded-md
                              overflow-hidden
                              bg-quaternary-gray
                            "
                          >
                            <div class="w-full h-full object-contain">
                              <img :src="product.image" alt="" />
                            </div>
                          </div>
                        </td>
                        <td
                          class="
                            whitespace-nowrap
                            py-4
                            px-3
                            text-xl
                            font-bold font-Inter
                            text-primary-black text-left
                          "
                        >
                          <div class="flex items-center space-x-2">
                            <div
                              :class="{ invisible: !product.status }"
                              class="w-3 h-3 rounded-full"
                              style="background: #00ffba"
                            ></div>
                            <span>{{ product.name }}</span>
                          </div>
                        </td>
                        <td
                          class="
                            whitespace-nowrap
                            py-4
                            px-3
                            text-xl
                            font-bold font-Inter
                            text-primary-black text-opacity-80 text-left
                          "
                        >
                          {{ product.date }}
                        </td>
                        <td
                          class="
                            whitespace-nowrap
                            py-4
                            px-3
                            text-xl
                            font-light font-Inter
                            text-primary-black text-opacity-80 text-right
                            w-full
                          "
                        >
                          <div class="flex items-center justify-end space-x-4">
                            <button
                             @click="ChangeStatus(product)"
                              :class="{
                                'bg-secondary-green px-5': product.status,
                              }"
                              class="
                                flex
                                items-center
                                space-x-2
                                bg-quaternary-gray
                                py-2
                                px-4
                                rounded-lg
                                hover:bg-opacity-60
                              "
                            >
                              <div
                                class="w-2 h-2 rounded-full bg-primary-black"
                                v-if="product.status"
                              ></div>
                              <span
                                class="font-normal text-primary-black text-xl"
                                :class="{
                                  'bg-secondary-green font-bold':
                                    product.status,
                                }"
                                >{{
                                  product.status ? "LIVE" : "Set live"
                                }}</span
                              >
                            </button>
                            <button
                              class="
                                flex
                                items-center
                                space-x-2
                                bg-quaternary-gray
                                py-3
                                px-4
                                rounded-lg
                                hover:bg-primary-red group
                              "
                            >
                              <IconTrash class="  text-primary-black text-opacity-[0.499] group-hover:text-white" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              
              </div>
                <div class=" w-full flex pt-4">
                    <button @click="open = false" class=" m-auto text-xl font-normal font-Inter text-primary-black py-2 px-6 rounded-lg bg-quaternary-gray hover:bg-secondary-gray">Done</button>
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
import IconTrash from "../../../Icons/IconTrash.vue";
import IconVersion from "../../../Icons/IconVersion.vue";
export default {
  components: {
    IconTrash,
    IconVersion
  },
  setup() {
    const open = ref(false)
    const Products = ref([
      {
        image: "../../../transparent-baby.png",
        name: "Angelcab Stroller",
        date: "2022-08-02",
        status: true,
      },
      {
        image: "",
        name: "Angelcab Stroller",
        date: "2022-08-02",
        status: false,
      },
      {
        image: "",
        name: "Angelcab Stroller",
        date: "2022-08-02",
        status: false,
      },
   
      
 
    ]);
    const ChangeStatus = (product) => {
      product.status = !product.status;
    };
    const openModal = () => {
        open.value = true;
    }
    return {
      Products,
      ChangeStatus,
      open,
      openModal
    };
  },
};
</script>


