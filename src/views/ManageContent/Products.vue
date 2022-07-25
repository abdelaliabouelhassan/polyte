<template>
  <HomeLayout>
    <template v-slot:content>
      <div class="pt-16 pb-10 font-Inter">
        <div
          class="flex flex-col items-start space-y-4 max-w-7xl m-auto w-full"
        >
          <div class="flex items-center justify-between w-full px-8">
            <span class="text-3xl font-bold text-primary-black">Products</span>
            <div class="flex items-center space-x-4 max-w-xl w-full">
              <div class="max-w-[540px] w-full h-[46px] relative">
                <div class="absolute left-4 top-5">
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
                    pl-12
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
                class="h-[46px] w-[56px] rounded-lg bg-white flex input-border hover:bg-opacity-60"
              >
                <FilterIcon class="m-auto" />
              </button>
              <button
                class="h-[46px] w-[56px] rounded-lg bg-white flex input-border hover:bg-opacity-60"
              >
                <SelectIcon class="m-auto" />
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
                          Name
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
                          Options
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
                          Views
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
                    <tbody class="divide-tertiary-gray divide-y-4">
                      <tr
                        class="hover:bg-secondary-gray cursor-pointer"
                        v-for="(product, index, key) in Products"
                        :key="key"
                      >
                        <td
                          @click="goToProduct(product)"
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
                              w-[86px]
                              h-[60px]
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
                          @click="goToProduct(product)"
                          class="
                            whitespace-nowrap
                            py-4
                            px-3
                            text-xl
                            font-bold font-Inter
                            text-primary-black text-left
                          "
                        >
                          {{ product.name }}
                        </td>
                        <td
                          @click="goToProduct(product)"
                          class="
                            whitespace-nowrap
                            py-4
                            px-3
                            text-xl
                            font-bold font-Inter
                            text-primary-black text-opacity-80 text-right
                          "
                        >
                          {{ product.impressions }}
                        </td>
                        <td
                          @click="goToProduct(product)"
                          class="
                            whitespace-nowrap
                            py-4
                            px-3
                            text-xl
                            font-light font-Inter
                            text-primary-black text-opacity-80 text-right
                          "
                        >
                          {{ product.options }}
                        </td>
                        <td
                          @click="goToProduct(product)"
                          class="
                            whitespace-nowrap
                            py-4
                            px-3
                            text-xl
                            font-light font-Inter
                            text-primary-black text-opacity-80 text-right
                          "
                        >
                          {{ product.views }}
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
                          <div class="flex float-right space-x-4">
                            <span
                              :class="{
                                'font-bold text-primary-red': !product.status,
                                'text-opacity-60 font-normal text-primary-black':
                                  product.status,
                              }"
                              class="text-xl font-Inter"
                              >{{ product.status ? "ON AIR" : "OFFLINE" }}</span
                            >
                            <div>
                              <input v-model="product.status" type="checkbox" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "../../layouts/HomeLayout.vue";
import IconSearch from "../../Icons/IconSearch.vue";
import FilterIcon from "../../Icons/FilterIcon.vue";
import SelectIcon from "../../Icons/SelectIcon.vue";
import { useRouter } from "vue-router";

import { ref } from "@vue/reactivity";
export default {
  components: {
    HomeLayout,
    IconSearch,
    FilterIcon,
    SelectIcon,
  },
  setup() {
    const router = useRouter();
    const Products = ref([
      {
        image: "../transparent-baby.png",
        name: "Angelcab Stroller",
        impressions: "6.820",
        options: "681",
        views: "197",
        status: false,
      },
      {
        image: "",
        name: "Adidas Running Shoe	",
        impressions: "21",
        options: "2",
        views: "23",
        status: true,
      },
      {
        image: "",
        name: "Adidas Sport Shoe",
        impressions: "3.456",
        options: "4",
        views: "53",
        status: false,
      },
      {
        image: "",
        name: "Puma Jacket",
        impressions: "7.658",
        options: "8",
        views: "2",
        status: true,
      },
      {
        image: "",
        name: "Byton M-Byte",
        impressions: "9.716",
        options: "76",
        views: "8",
        status: false,
      },
    ]);
    const goToProduct = (product) => {
      router.push({
        name: "manage-contents-overview",
        params: {
          id: 1,
        },
      });
    };
    return {
      Products,
      goToProduct,
    };
  },
};
</script>


<style scoped>
input[type="checkbox"] {
  position: relative;
  width: 50px;
  height: 28px;
  -webkit-appearance: none;
  -webkit-appearance: none;
  background: #001324;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: background 300ms linear;
}
input[type="checkbox"]::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  top: 4px;
  left: 4px;
  border-radius: 20px;
  background-color: #f7f7fa;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: left 300ms linear;
}
input[type="checkbox"]:checked {
  background: #ff5064;
}
input[type="checkbox"]:checked::before {
  left: 26px;
  background-color: #f7f7fa;
}
</style>