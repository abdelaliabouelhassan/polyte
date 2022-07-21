<template>
  <div class="flex flex-col items-start space-y-4 w-full font-Inter">
    <div class="w-full justify-between items-center flex">
      <span class="text-3xl font-bold text-primary-black"
        >Impressions last 30 days</span
      >
      <span class="text-3xl font-bold text-primary-black text-opacity-50"
        >6.820 Impressions</span
      >
    </div>
    <div class="w-full bg-white input-border rounded-2xl p-6">
      <apexchart
        class="w-full"
        height="265"
        type="line"
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
      totalRevenue: 5900,
      totalCost: 2900,
      series: [
        {
          name: "Total costs this year",
          data: [
            600, 100, 530, 550, 1000, 800, 1100, 1000, 3600, 1700, 3400, 4000,
            200, 30, 500, 1000, 800, 1100, 1000, 3600, 1700, 3400, 4000, 2000,
            2500, 300,
          ],
          color: "#5361FF",
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          background: "#fff",
          selection: {
            enabled: false,
            stroke: {
              width: 0,
            },
          },
        },
        markers: {
          discrete: [...this.getMarkerFormatForSeries(0, "#5361FF")],
          hover: {
            sizeOffset: 6,
          },
        },
        tooltip: {
          shared: false,
          intersect: true,
          x: {
            show: false,
          },
          custom: ({ series, seriesIndex, dataPointIndex, w }) => {
            return `
              <span class="graph-tooltip">${this.series[seriesIndex].data[dataPointIndex]}</span>
            `;
          },
        },
        dataLabels: {
          enabled: false,
          enabledOnSeries: false,
        },
        stroke: {
          curve: "straight",
          width: 2,
          lineCap: "round",
        },
        title: {
          // text: 'Product Trends by Month',
          align: "left",
        },
        legend: {
          show: false,
        },
        grid: {
          row: {
            colors: ["#FFFFFF"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "29",
            "30",
            "31",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
          ],
          tooltip: {
            enabled: false,
          },
          crosshairs: {
            show: false,
          },
          labels: {
            style: {
              colors: "#00000066",
              fontSize: "13px",
              fontFamily: "Inter",
              fontWeight: "Light",
              opacity: 0.4,
            },
          },
         
        },
        yaxis: {
          labels: {
            style: {
              colors: "#00000066",
              fontSize: "13px",
              fontFamily: "Inter",
              fontWeight: "Light",
              opacity: 0.4,
            },
          },
        },
      },
    };
  },
  methods: {
    getMarkerFormatForSeries(seriesIndex, strokeColor) {
      let data = [];
      for (let i = 0; i < 26; i++) {
        data.push({
          seriesIndex: seriesIndex,
          dataPointIndex: i,
          fillColor: "#FFF",
          strokeColor: strokeColor,
          size: 5,
          shape: "circle",
        });
      }

      return data;
    },
  },
};
</script>