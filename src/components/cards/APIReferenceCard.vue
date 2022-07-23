<template>
  <div class="w-full flex flex-col items-start space-y-4 font-Inter">
    <div class="flex justify-between items-center w-full">
      <span class="text-primary-black font-bold text-3xl">API reference</span>
    </div>
    <div class="w-full bg-white rounded-2xl input-border p-5 flex relative">
      <button
        @click="copyCode"
        class="
          text-xl
          font-normal
          text-primary-black
          font-Inter
          bg-quaternary-gray
          hover:bg-secondary-gray
          py-3
          px-4
          rounded-md
          focus:ring-2
          ring-secondary-gray
          absolute
          right-4
          top-2.5
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.683"
          height="16.456"
          viewBox="0 0 13.683 16.456"
        >
          <path
            id="Path_41"
            data-name="Path 41"
            d="M10,0H3.685A3.689,3.689,0,0,0,0,3.684v9.087a3.689,3.689,0,0,0,3.685,3.684H10a3.688,3.688,0,0,0,3.684-3.684V3.684A3.688,3.688,0,0,0,10,0m2.062,12.771A2.065,2.065,0,0,1,10,14.834H3.685a2.065,2.065,0,0,1-2.063-2.062V3.684A2.065,2.065,0,0,1,3.685,1.622h.081v.25A1.268,1.268,0,0,0,5.032,3.139H8.651A1.268,1.268,0,0,0,9.918,1.872v-.25H10a2.065,2.065,0,0,1,2.062,2.062Zm-1.517-5.8a.811.811,0,0,1-.811.811H3.968a.811.811,0,1,1,0-1.622H9.733a.811.811,0,0,1,.811.811m0,2.69a.811.811,0,0,1-.811.811H3.968a.811.811,0,1,1,0-1.622H9.733a.811.811,0,0,1,.811.811M8,12.506a.811.811,0,0,1-.811.811H3.95a.811.811,0,0,1,0-1.622H7.19A.811.811,0,0,1,8,12.506"
            fill="#001324"
          />
        </svg>
      </button>
      <highlightjs language="js" :code="'<script>' + code + ' \n</script>'" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  methods: {
    copyCode() {
      var code = this.code;
      var textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    },
  },
};
</script>



<style scoped>
div.code {
  white-space: pre;
}
</style>