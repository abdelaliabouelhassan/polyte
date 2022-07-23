<template>
  <div class="w-full flex flex-col items-start space-y-4">
    <span class="text-primary-black font-bold font-Inter text-3xl"
      >Project Briefing</span
    >
    <div class="w-full h-72 bg-white rounded-2xl overflow-hidden input-border">
      <textarea
        name=""
        id=""
        cols="2"
        rows="6"
        class="
          w-full
          h-[13.5rem]
          py-5
          px-4
          outline-none
          placeholder-primary-black placeholder-opacity-50
          text-xl
          font-light font-Inter
        "
        v-model="content"
        placeholder="Enter Project Briefing"
      >
      </textarea>
      <div
        class="
          w-full
          border-0 border-t-4 border-tertiary-gray
          p-5
          flex
          items-center
          space-x-16
        "
      >
        <div class="flex items-center space-x-8">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.906"
              height="18.413"
              viewBox="0 0 14.906 18.413"
            >
              <path
                id="Path_1269"
                data-name="Path 1269"
                d="M13.254,11.9a6.01,6.01,0,0,0-.848-.749A5.17,5.17,0,0,0,13.435,8a5.132,5.132,0,0,0-5.2-5.27H0V21.147H9.953a4.842,4.842,0,0,0,4.953-5.058A6.174,6.174,0,0,0,13.254,11.9M8.231,5.817A2.057,2.057,0,0,1,10.352,8a2.075,2.075,0,0,1-.471,1.37,1.872,1.872,0,0,1-1.468.56H3.083V5.817ZM9.953,18.063H3.083V13.018H8.412a3.442,3.442,0,0,1,2.593,1,3.062,3.062,0,0,1,.817,2.076,1.8,1.8,0,0,1-1.869,1.974"
                transform="translate(0 -2.734)"
                fill="#001324"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.467"
              height="18.413"
              viewBox="0 0 14.467 18.413"
            >
              <path
                id="Path_1255"
                data-name="Path 1255"
                d="M69.548,5.817V2.734H58.1V5.817h4L59.55,18.063H55.082v3.083H66.526V18.063H62.7L65.252,5.817Z"
                transform="translate(-55.082 -2.734)"
                fill="#001324"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.013"
              height="21.305"
              viewBox="0 0 18.013 21.305"
            >
              <path
                id="Path_1256"
                data-name="Path 1256"
                d="M116.969,19.131c-3.792,0-7.631-2.9-7.631-8.449V1.618h3.083v9.065c0,3.706,2.283,5.365,4.547,5.365s4.547-1.659,4.547-5.365V1.618H124.6v9.065c0,5.546-3.839,8.449-7.631,8.449"
                transform="translate(-107.963 -1.618)"
                fill="#001324"
              />
              <rect
                id="Rectangle_760"
                data-name="Rectangle 760"
                width="18.013"
                height="3.083"
                transform="translate(0 18.222)"
                fill="#001324"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center space-x-8">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.506"
              height="21.466"
              viewBox="0 0 20.506 21.466"
            >
              <rect
                id="Rectangle_761"
                data-name="Rectangle 761"
                width="14.637"
                height="3.083"
                transform="translate(5.869 1.822)"
                fill="#001324"
              />
              <rect
                id="Rectangle_762"
                data-name="Rectangle 762"
                width="14.637"
                height="3.083"
                transform="translate(5.869 9.277)"
                fill="#001324"
              />
              <rect
                id="Rectangle_763"
                data-name="Rectangle 763"
                width="14.637"
                height="3.083"
                transform="translate(5.869 17.099)"
                fill="#001324"
              />
              <path
                id="Path_1257"
                data-name="Path 1257"
                d="M202.693,6.715a.144.144,0,0,1-.161.165H199.2a.146.146,0,0,1-.166-.165V6.067c0-.116.055-.173.166-.173h1.354a.167.167,0,0,0,.166-.165V2a.046.046,0,0,0-.013-.034.067.067,0,0,0-.047-.012h-.072l-.06.046-.55.508a.158.158,0,0,1-.038.034.8.8,0,0,1-.086.082l-.042.036a.337.337,0,0,1-.119.012H199.2a.16.16,0,0,1-.166-.165V2a.154.154,0,0,1,.059-.119.747.747,0,0,1,.178-.08.548.548,0,0,0,.2-.106l1.05-.953a.157.157,0,0,1,.127-.051h.9c.109,0,.165.059.165.178V5.729c0,.109.058.165.173.165h.652c.107,0,.161.058.161.173Z"
                transform="translate(-198.947 -0.695)"
                fill="#001324"
              />
              <path
                id="Path_1258"
                data-name="Path 1258"
                d="M202.584,16.772a.144.144,0,0,1-.161.165h-3.336a.146.146,0,0,1-.165-.165v-.821a.32.32,0,0,1,.059-.2,1.071,1.071,0,0,1,.14-.2q.2-.207.673-.673.2-.2.379-.372c.116-.113.222-.22.315-.322q.258-.271.541-.614a3.868,3.868,0,0,0,.415-.648,1.439,1.439,0,0,0,.153-.635.442.442,0,0,0-.2-.423.976.976,0,0,0-.516-.119.963.963,0,0,0-.516.119.426.426,0,0,0-.2.423.419.419,0,0,1-.034.178.182.182,0,0,1-.153.072h-.64c-.106,0-.16-.059-.16-.177V12.12a1.287,1.287,0,0,1,.14-.61,1.063,1.063,0,0,1,.377-.436,1.567,1.567,0,0,1,.542-.237,2.465,2.465,0,0,1,1.282,0,1.776,1.776,0,0,1,.555.237,1.248,1.248,0,0,1,.516,1.045,2.864,2.864,0,0,1-.127.9,3,3,0,0,1-.342.741,3.993,3.993,0,0,1-.47.6q-.258.288-.685.681c-.13.127-.243.239-.337.337s-.174.178-.239.243a.456.456,0,0,0-.14.258c0,.049.022.072.068.072h2.112c.108,0,.161.058.161.173Z"
                transform="translate(-198.922 -2.999)"
                fill="#001324"
              />
              <path
                id="Path_1259"
                data-name="Path 1259"
                d="M202.639,24.759a2.035,2.035,0,0,1-.457,1.461,1.885,1.885,0,0,1-1.439.483,1.91,1.91,0,0,1-1.33-.411,1.684,1.684,0,0,1-.436-1.274.146.146,0,0,1,.166-.165h.66c.11,0,.165.063.165.19a.62.62,0,0,0,.186.529,1,1,0,0,0,.589.144.914.914,0,0,0,.673-.224.8.8,0,0,0,.237-.639q0-.377-.013-.491a.982.982,0,0,0-.092-.284.388.388,0,0,0-.212-.165,1.243,1.243,0,0,0-.4-.047h-.554a.181.181,0,0,1-.119-.059.169.169,0,0,1-.046-.118v-.4a.44.44,0,0,1,.012-.114.729.729,0,0,1,.085-.131l1.283-1.355a.3.3,0,0,0,.059-.211.162.162,0,0,0-.047-.119.18.18,0,0,0-.118-.046h-2.1c-.107,0-.161-.059-.161-.178V20.7a.162.162,0,0,1,.047-.126.14.14,0,0,1,.114-.051h3.09c.107,0,.16.059.16.177v1a.532.532,0,0,1-.008.106.16.16,0,0,1-.046.093l-1.135,1.249c-.015.042-.021.062-.021.059,0,.045.027.072.08.08a3.089,3.089,0,0,1,.639.156.791.791,0,0,1,.331.271,1.048,1.048,0,0,1,.14.385q.021.275.021.661"
                transform="translate(-198.935 -5.237)"
                fill="#001324"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.007"
              height="18.361"
              viewBox="0 0 20.007 18.361"
            >
              <rect
                id="Rectangle_764"
                data-name="Rectangle 764"
                width="14.637"
                height="3.083"
                transform="translate(5.37)"
                fill="#001324"
              />
              <rect
                id="Rectangle_765"
                data-name="Rectangle 765"
                width="14.637"
                height="3.083"
                transform="translate(5.37 7.456)"
                fill="#001324"
              />
              <rect
                id="Rectangle_766"
                data-name="Rectangle 766"
                width="14.637"
                height="3.083"
                transform="translate(5.37 15.278)"
                fill="#001324"
              />
              <rect
                id="Rectangle_770"
                data-name="Rectangle 770"
                width="2.736"
                height="3.083"
                fill="#001324"
              />
              <rect
                id="Rectangle_771"
                data-name="Rectangle 771"
                width="2.736"
                height="3.083"
                transform="translate(0 7.456)"
                fill="#001324"
              />
              <rect
                id="Rectangle_772"
                data-name="Rectangle 772"
                width="2.736"
                height="3.083"
                transform="translate(0 15.278)"
                fill="#001324"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.884"
              height="18.361"
              viewBox="0 0 20.884 18.361"
            >
              <rect
                id="Rectangle_767"
                data-name="Rectangle 767"
                width="11.672"
                height="3.083"
                transform="translate(0)"
                fill="#001324"
              />
              <rect
                id="Rectangle_768"
                data-name="Rectangle 768"
                width="20.884"
                height="3.083"
                transform="translate(0 7.456)"
                fill="#001324"
              />
              <rect
                id="Rectangle_769"
                data-name="Rectangle 769"
                width="17.967"
                height="3.083"
                transform="translate(0 15.278)"
                fill="#001324"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center space-x-8">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.767"
              height="19.768"
              viewBox="0 0 19.767 19.768"
            >
              <path
                id="Path_1265"
                data-name="Path 1265"
                d="M414.891,19.768a9.884,9.884,0,1,1,9.884-9.884,9.9,9.9,0,0,1-9.884,9.884m0-17.455a7.571,7.571,0,1,0,7.571,7.571,7.58,7.58,0,0,0-7.571-7.571"
                transform="translate(-405.008)"
                fill="#001324"
              />
              <path
                id="Path_1266"
                data-name="Path 1266"
                d="M414.956,9.184a1.344,1.344,0,1,1-1.344-1.344,1.343,1.343,0,0,1,1.344,1.344"
                transform="translate(-406.672 -1.796)"
                fill="#001324"
              />
              <path
                id="Path_1267"
                data-name="Path 1267"
                d="M422.814,9.184a1.344,1.344,0,1,1-1.344-1.344,1.343,1.343,0,0,1,1.344,1.344"
                transform="translate(-408.472 -1.796)"
                fill="#001324"
              />
              <path
                id="Path_1268"
                data-name="Path 1268"
                d="M416.312,18.873a5.575,5.575,0,0,1-5.1-3.337l1.412-.619a4.031,4.031,0,0,0,7.386,0l1.412.619a5.576,5.576,0,0,1-5.105,3.337"
                transform="translate(-406.428 -3.418)"
                fill="#001324"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.308"
              height="18.361"
              viewBox="0 0 21.308 18.361"
            >
              <path
                id="Path_1262"
                data-name="Path 1262"
                d="M477.234,21.419H455.926V3.058h21.308ZM459.01,18.336h15.141V6.141H459.01Z"
                transform="translate(-455.926 -3.058)"
                fill="#001324"
              />
              <path
                id="Path_1263"
                data-name="Path 1263"
                d="M470.82,10.88l3.037,2.968v4.587H461.941V16.566l2.726-2.718,2.181,1.627Z"
                transform="translate(-457.304 -4.85)"
                fill="#001324"
              />
              <path
                id="Path_1264"
                data-name="Path 1264"
                d="M464.935,10.382a1.675,1.675,0,1,1-1.674-1.674,1.674,1.674,0,0,1,1.674,1.674"
                transform="translate(-457.223 -4.353)"
                fill="#001324"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.646"
              height="15.195"
              viewBox="0 0 22.646 15.195"
            >
              <rect
                id="Rectangle_773"
                data-name="Rectangle 773"
                width="14.893"
                height="3.083"
                transform="translate(8 14.443) rotate(-75.877)"
                fill="#001324"
              />
              <path
                id="Path_1260"
                data-name="Path 1260"
                d="M517.7,17.676l-4.848-4.848,4.671-4.671,2.18,2.18-2.491,2.491,2.668,2.667Z"
                transform="translate(-512.848 -5.56)"
                fill="#001324"
              />
              <path
                id="Path_1261"
                data-name="Path 1261"
                d="M535.289,17.676l-2.18-2.18,2.667-2.668-2.491-2.491,2.18-2.18,4.671,4.671Z"
                transform="translate(-517.49 -5.56)"
                fill="#001324"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      content: "",
    };
  },
};
</script>


<style scoped>
textarea {
  resize: none;
}
</style>