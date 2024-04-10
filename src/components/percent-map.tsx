import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import { TMap, TRegion } from "../ts";
import { COLOR_LIST } from "../data";

highchartsMap(Highcharts);

Highcharts.seriesType(
  "bar",
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

      Highcharts.each(points, function (point, index) {
        const state = firstSeries.points[series.index - 3];

        point.graphic.attr({
          x: state.plotX,
          y: state.plotY - point.graphic.attr("height") - 20,
        });
      });
    },
  }
);

const ExampleBarChart = ({ data, map }: { data: TRegion[]; map: TMap }) => {
  const options = {
    chart: {
      map: map,
      width: 500,
      height: 700,
      events: {
        load: function () {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const chart = this;

          const data = [4, 2, 1, 1, 2];
          const data1 = calculateResult(data);
          const data2 = data1.map((value, index) => ({
            y: value * 1000,
            color: COLOR_LIST[index + 10],
          }));

          Highcharts.each(chart.series[0].points, function (state) {
            chart.addSeries(
              {
                type: "bar",
                name: state.id,
                zIndex: 6,
                pointWidth: 30,
                showInLegend: false,
                tooltip: {
                  pointFormat: "This is a bar chart",
                },
                data: data2,
              },
              false
            );
          });

          chart.redraw();
        },
      },
    },

    plotOptions: {
      bar: {
        borderColor: "rgba(255,255,255,0.4)",
        borderWidth: 1,
        stacking: "normal",
        tooltip: {
          pointFormat: "This is a bar chart",
          followPointer: true,
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

    yAxis: {
      min: 0,
      max: 70000,
      visible: false,
    },

    xAxis: {
      visible: false,
    },

    mapNavigation: {
      enableButtons: {
        zoomIn: true,
        zoomOut: true,
      },
      enableMouseWheelZoom: true,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"mapChart"}
    />
  );
};

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

function calculateResult(data: number[]): number[] {
  const result: number[] = [];
  let currentSum = 0;

  for (let i = data.length - 1; i >= 0; i--) {
    currentSum += data[i];
    result.unshift(currentSum);
  }

  return result;
}
