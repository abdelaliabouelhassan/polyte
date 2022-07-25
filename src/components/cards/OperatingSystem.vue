<template>
  <div class="w-full flex flex-col items-start space-y-4 overflow-hidden">
    <span class="text-3xl font-bold text-primary-black font-Inter"
      >Operating System</span
    >
    <div class="w-full bg-white rounded-2xl p-5 input-border text-opacity-80">
      <apexchart
        class="w-full"
        height="265"
        type="donut"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      series: [44, 55, 41],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        labels: ["Chrome", "Firefox", "Safari"],
        colors: ["#EDBB15", "#ED15DC", "#5715ED"],
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            return [name, val.toFixed(1) + "%"];
          },
        },

        stroke: {
          width: 0,
          curve: "smooth",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
      
        legend: {
          formatter: function (val, opts) {
            return (
              `<span class=" text-primary-black font-light text-base text-opacity-80">${
                opts.w.globals.series[opts.seriesIndex]
              }</span>` +
              "%" +
              " - " +
              `<span class=" text-primary-black font-bold text-base">${val}</span>`
            );
          },
          itemMargin: {
            horizontal: 0,
            vertical: 15,
          },
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>