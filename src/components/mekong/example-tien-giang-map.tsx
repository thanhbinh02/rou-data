import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import { COLOR_LIST } from "../../data";
import * as TIEN_GIANG_DATA from "../../data/mekong/tien-giang/tien-giang.json";

highchartsMap(Highcharts);

const ExampleTienGiangMap = () => {
  const options = {
    chart: {
      map: TIEN_GIANG_DATA,
      width: 500,
      height: 700,
    },

    title: {
      text: "DATA TIEN GIANG",
    },

    tooltip: {
      enabled: false,
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          formatter: function () {
            return (
              '<text x="0" y="0">' +
              '<tspan x="0" dy="1.2em" style="color: black; font-weight: bold; font-size: 12px; background-color: blue;">' +
              this.point.series.userOptions.volumes +
              " tons" +
              "</tspan>" +
              '<tspan x="0" dy="1.2em" style="color: black; font-weight: bold; font-size: 16px; text-transform: uppercase;">' +
              this.point.name +
              "</tspan>" +
              "</text>"
            );
          },

          style: {
            textOutline: "none",
            backgroundColor: "red",
            // color: "black",
          },
          verticalAlign: "middle",
          align: "center",
        },
      },

      map: {
        allAreas: false,
        joinBy: ["id", "code"],
        tooltip: {
          enabled: false,
        },
        states: {
          inactive: { opacity: 1 },
        },
      },
    },

    series: MAP_CHART,

    legend: {
      accessibility: {
        enabled: false,
      },
    },

    mapNavigation: {
      // enabled: true,
      enableButtons: {
        zoomIn: true,
        zoomOut: true,
      },
      enableMouseWheelZoom: true, // Enable mouse wheel zoom
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

export default ExampleTienGiangMap;

const data = [
  "tp-my-tho",
  "go-cong",
  "cai-lay",
  "tan-phuoc",
  "tan-phuoc",
  "cai-be",
  "cai-lay",
  "chau-thanh",
  "cho-gao",
  "go-cong-tay",
  "go-cong-dong",
  "tan-phu-dong",
  "tx-cai-lay",
];

const MAP_CHART = data.map((item, i) => ({
  color: COLOR_LIST[i] || "#C41D7F",
  volumes: 500,
  data: [
    {
      code: item,
    },
  ],
}));
// return (
//   this.point.name + " - " + this.point.series.userOptions.thanhbinh
// ); // Access 'age' property from the point object
