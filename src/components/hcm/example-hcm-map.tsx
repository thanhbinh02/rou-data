import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import { COLOR_LIST } from "../../data";
import * as HCM_DATA from "../../data/hcm/tp-hcm/hcm.json";

highchartsMap(Highcharts);

const ExampleHCMMap = () => {
  const options = {
    chart: {
      map: HCM_DATA,
      width: 500,
      height: 700,
    },

    title: {
      text: "DATA HCM",
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

export default ExampleHCMMap;

const data = [
  "quan-1",
  "quan-12",
  "quan-go-vap",
  "quan-binh-thach",
  "quan-tan-binh",
  "quan-tan-phu",
  "quan-phu-thuan",
  "thu-duc",
  "quan-3",
  "quan-10",
  "quan-11",
  "quan-4",
  "quan-5",
  "quan-6",
  "quan-8",
  "binh-tan",
  "quan-7",
  "cu-chi",
  "hoc-mon",
  "binh-chanh",
  "nha-be",
  "can-gio",
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
