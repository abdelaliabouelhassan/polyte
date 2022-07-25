<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-7xl m-auto px-4 pl-8 space-y-24">
        <div class="w-full grid grid-cols-2 gap-10 pt-10">
          <BillingInformationCard />
          <PaymentMethodsCard />

          <div class="w-full col-span-2">
            <div class="w-full">
              <span class="text-primary-black font-bold font-Inter text-3xl"
                >Invoices</span
              >
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
                            Issue Date
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
                            Payment
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
                            Price
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
                            Status
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody class="divide-tertiary-gray divide-y-4">
                        <tr
                          class="hover:bg-secondary-gray cursor-pointer"
                          v-for="(invoices, index, key) in Invoices"
                          :key="key"
                        >
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
                            <div class="flex items-center space-x-2">
                              <IconProfile />
                              <span
                                class="
                                  text-xl text-primary-black
                                  font-Inter font-bold
                                "
                                >{{ invoices.date }}</span
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
                            {{ invoices.payment }}
                          </td>
                          <td
                            class="
                              whitespace-nowrap
                              py-4
                              px-3
                              text-xl
                              font-light font-Inter
                              text-primary-black text-opacity-80 text-left
                              w-[400px]
                            "
                          >
                            {{ invoices.description }}
                          </td>
                          <td
                            class="
                              whitespace-nowrap
                              py-4
                              px-3
                              text-xl
                              font-light font-Inter
                              text-primary-black text-opacity-80
                            "
                          >
                            {{ invoices.price }}
                          </td>
                          <td
                            class="
                              whitespace-nowrap
                              py-4
                              px-3
                              text-xl
                              font-light font-Inter
                              text-primary-black text-opacity-80
                            "
                          >
                            {{ invoices.status }}
                          </td>
                          <td
                            class="
                              whitespace-nowrap
                              py-4
                              px-3
                              text-xl
                              font-light font-Inter
                              text-primary-black text-opacity-80
                            "
                          >
                            <button
                              class="
                                text-primary-black text-base
                                font-normal
                                py-2
                                px-4
                                rounded-md
                                bg-tertiary-gray
                                hover:bg-secondary-gray
                              "
                            >
                              View
                            </button>
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
      </div>
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../layouts/SidebarLayout.vue";
import SideBar from "./includes/SideBar.vue";
import BillingInformationCard from "../../components/cards/BillingInformationCard.vue";
import PaymentMethodsCard from "../../components/cards/PaymentMethodsCard.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    SideBar,
    BillingInformationCard,
    PaymentMethodsCard,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const Invoices = ref([
      {
        date: "2022-07-02",
        payment: "****7651",
        description: "Polyte Business",
        price: "5.508€",
        status: "Paid",
      },
      {
        date: "2022-07-02",
        payment: "****7651",
        description: "Polyte Business",
        price: "5.508€",
        status: "Paid",
      },
      {
        date: "2022-07-02",
        payment: "****7651",
        description: "Polyte Business",
        price: "5.508€",
        status: "Paid",
      },
    ]);
    return {
      router,
      route,
      Invoices,
    };
  },
};
</script>


