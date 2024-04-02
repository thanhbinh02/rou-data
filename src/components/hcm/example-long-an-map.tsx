import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import { COLOR_LIST } from "../../data";
import * as LONG_AN_DATA from "../../data/hcm/long-an/longan.json";

highchartsMap(Highcharts);

const ExampleLongAnMap = () => {
  const options = {
    chart: {
      map: LONG_AN_DATA,
      width: 500,
      height: 700,
    },

    title: {
      text: "DATA LONG AN",
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

export default ExampleLongAnMap;

const data = [
  "tan-an",
  "kien-tuong",
  "tan-huong",
  "vinh-hung",
  "moc-hoa",
  "tan-thanh",
  "thanh-hoa",
  "duc-hue",
  "duc-hoa",
  "ben-luc",
  "thu-thua",
  "tan-tru",
  "tan-tru",
  "can-duoc",
  "can-giuoc",
  "chau-thanh",
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
