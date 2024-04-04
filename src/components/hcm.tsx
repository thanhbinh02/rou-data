import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { VIET_NAM_MAP } from "../data/viet-nam";
import { COLOR_LIST } from "../data";

highchartsMap(Highcharts);

const HCMMap = () => {
  const options = {
    chart: {
      map: VIET_NAM_MAP,
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

export default HCMMap;

const MAP_CHART = [
  {
    name: "TP Hồ Chí Minh",
    color: COLOR_LIST[0],
    data: [
      {
        code: "tp-hcm",
        color: COLOR_LIST[0],
      },
    ],
  },
  {
    name: "Long An",
    color: COLOR_LIST[1],
    data: [
      {
        code: "long-an",
        color: COLOR_LIST[1],
      },
    ],
  },
];
