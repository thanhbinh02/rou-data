import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { ROU_MAP } from "../data/rou-map";
import { COLOR_LIST } from "../data";

highchartsMap(Highcharts);

const ROUMap = () => {
  const options = {
    chart: {
      map: ROU_MAP,
      width: 500,
      height: 700,
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.point.name;
          },
          style: {
            textOutline: "none",
          },
          verticalAlign: "middle",
          align: "center",
        },
        borderColor: "none",
        borderWidth: 0,
      },

      map: {
        allAreas: false,
        joinBy: ["id", "code"],

        states: {
          inactive: { opacity: 1 },
        },
      },
    },

    series: MAP_CHART,

    tooltip: {
      enabled: false,
    },

    mapNavigation: {
      enableButtons: {
        zoomIn: true,
        zoomOut: true,
      },
      enableMouseWheelZoom: true, //
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

export default ROUMap;

const MAP_CHART = [
  {
    name: "Far EAST",
    color: COLOR_LIST[10],
    data: [
      {
        code: "far-east",
        color: COLOR_LIST[10],
      },
    ],
  },
  {
    name: "Near EAST",
    color: COLOR_LIST[1],
    data: [
      {
        code: "near-east",
        color: COLOR_LIST[1],
      },
    ],
  },
  {
    name: "HCM",
    color: COLOR_LIST[2],
    data: [
      {
        code: "hcm",
        color: COLOR_LIST[2],
      },
    ],
  },
  {
    name: "Mekong",
    color: COLOR_LIST[3],
    data: [
      {
        code: "mekong",
        color: COLOR_LIST[3],
      },
    ],
  },
];
