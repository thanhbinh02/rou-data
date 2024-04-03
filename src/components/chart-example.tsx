import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import * as BA_RIA_VUNG_TAU_DATA from "../data/near-east/ba-ria-vung-tau/ba-ria-vung-tau.json";

highchartsMap(Highcharts);

const calculateSumFromIndex = (arr, index) => {
  const sum = arr
    .slice(0, index + 1)
    .reduce((acc, currentValue) => acc + currentValue, 0);
  return sum;
};

Highcharts.seriesType(
  "mapcolumn",
  "column",
  {
    dataLabels: {
      enabled: false,
    },
  },
  {
    drawPoints: function () {
      Highcharts.seriesTypes.column.prototype.drawPoints.call(this);

      const series = this,
        points = series.points,
        firstSeries = series.chart.series[0];

      const total = points
        .map((point) => point.y)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      const percentList = points.map((point) => (point.y / total) * 100);

      const state = firstSeries.points[series.index - 3];
      Highcharts.each(points, function (point, index) {
        const y =
          state.plotY +
          index * 6 -
          calculateSumFromIndex(percentList, index) -
          20;

        point.graphic.attr({
          x: state.plotX,
          y,
        });
      });
    },
  }
);

// Highcharts.seriesType(
//   "mapcolumn",
//   "column",
//   {
//     dataLabels: {
//       enabled: false,
//     },
//   },
//   {
//     drawPoints: function () {
//       Highcharts.seriesTypes.column.prototype.drawPoints.call(this);

//       const series = this,
//         points = series.points,
//         firstSeries = series.chart.series[0];

//       Highcharts.each(points, function (point, index) {
//         const state = firstSeries.points[series.index - 3];

//         point.graphic.attr({
//           x: state.plotX,
//           y: state.plotY - index * 4 - point.graphic.attr("height") - 20,
//         });
//       });
//     },
//   }
//  );

function ExampleBarChart() {
  const options = {
    chart: {
      map: BA_RIA_VUNG_TAU_DATA,
      width: 500,
      height: 700,
      events: {
        load: function () {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const chart = this;

          Highcharts.each(chart.series[0].points, function (state) {
            chart.addSeries(
              {
                type: "mapcolumn",
                name: state.id,
                zIndex: 6,
                pointWidth: 30,
                showInLegend: false,
                tooltip: {
                  pointFormat: "This is a bar chart",
                },
                data: [
                  {
                    x: 2000,
                    y: 1000,
                    color: "rgb(75 85 99)",
                  },
                  {
                    x: 2000,
                    y: 3000,
                    color: "rgb(14 165 233)",
                  },
                  {
                    x: 2000,
                    y: 2000,
                    color: "rgb(217 70 239)",
                  },
                  {
                    x: 2000,
                    y: 2000,
                    color: "rgb(225 29 72)",
                  },
                ],
              },
              false
            );
          });

          chart.redraw();
        },
      },
    },

    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },

    tooltip: {
      enabled: false, // Disable default tooltip
    },

    plotOptions: {
      mapcolumn: {
        borderColor: "rgba(255,255,255,0.4)",
        borderWidth: 1,
        stacking: "normal",
        tooltip: {
          shared: false,
          pointFormat: "This is a bar chart",
        },
        height: 200,
      },

      map: {
        joinBy: ["id", "code"],
        dataLabels: {
          enabled: true,
          joinBy: ["id", "code"],
          style: {
            textOutline: "none",
            color: "black",
            fontWeight: "bold",
          },
          align: "center",
          verticalAlign: "middle",
        },
        states: {
          inactive: { opacity: 1 },
        },
        borderColor: "gray", // Border color of the regions
        borderWidth: 1,
      },
    },

    series: MAP_CHART,

    legend: {
      enabled: false,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"mapChart"}
    />
  );
}

export default ExampleBarChart;

const MAP_CHART = [
  {
    name: "Đồng Nai",
    key: "vn-331",
  },
  {
    name: "Hồ Chí Minh",
    key: "79",
  },
  {
    name: "Bình Dương",
    key: "74",
  },
];
