<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
    viewBox="0 0 60 60"
  >
    <defs>
      <linearGradient
        :id="'linear-gradient-sub-1-' + maincolor"
        x1="1.007"
        y1="-0.048"
        x2="-0.012"
        y2="1.028"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" :stop-color="border" />
        <stop offset="1" :stop-color="maincolor" />
      </linearGradient>
    </defs>
    <g id="Group_995" data-name="Group 995" transform="translate(0.5 0.5)">
      <path
        id="Path_28"
        data-name="Path 28"
        d="M35.105,0H23.9C5.275,0,0,5.273,0,23.9v11.21C0,53.725,5.275,59,23.9,59H35.105C53.725,59,59,53.725,59,35.106V23.9C59,5.276,53.725,0,35.105,0"
        transform="translate(0 0)"
        stroke="rgba(0,0,0,0)"
        stroke-width="1"
        opacity="0.21"
        :fill="'url(#linear-gradient-sub-1-' + maincolor + ')'"
      />
      <rect
        id="Rectangle_80"
        data-name="Rectangle 80"
        width="32.077"
        height="34.993"
        transform="translate(14.58 12.732)"
        fill="#fff"
      />
      <g id="Group_62" data-name="Group 62" transform="translate(5.323 5.323)">
        <path
          id="Path_28-2"
          data-name="Path 28"
          d="M28.771,0H19.584C4.323,0,0,4.321,0,19.584v9.188c0,15.26,4.323,19.583,19.584,19.583h9.187c15.26,0,19.583-4.323,19.583-19.583V19.584C48.354,4.324,44.031,0,28.771,0m3.743,15.163h-.95V34.7A2.047,2.047,0,0,1,29.7,36.782a1.972,1.972,0,0,1-2.078-1.969V15.163H24.535a1.905,1.905,0,0,0-1.905,1.905v4.9a1.938,1.938,0,0,0,1.1,1.722,4.221,4.221,0,0,1,2.33,3.775V34.7a2.048,2.048,0,0,1-1.866,2.081,1.972,1.972,0,0,1-2.078-1.969V28.439a1.893,1.893,0,0,0-1.52-1.862c-3.768-.738-6.55-3.26-6.55-7.437v-.064c0-4.522,3.271-7.5,8.531-7.5h9.837a1.864,1.864,0,0,1,1.895,1.7,1.8,1.8,0,0,1-1.793,1.893"
          transform="translate(0 0)"
          :fill="'url(#linear-gradient-sub-1-' + maincolor + ')'"
        />
      </g>
    </g>
  </svg>
</template>


<script>
export default {
  props:{
    maincolor:{
      type:String,
      default:'#FFED65'
    },
    border:{
      type:String,
      default:'#C69800'
    },
    width:{
      type:Number,
      default:60
    },
    height:{
      type:Number,
      default:60
    }
  }
}
</script>