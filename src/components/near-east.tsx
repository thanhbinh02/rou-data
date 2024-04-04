import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { VIET_NAM_MAP } from "../data/viet-nam";
import { COLOR_LIST } from "../data";

highchartsMap(Highcharts);

const NearEast = () => {
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

export default NearEast;

// const MAP_CHART = [
//   {
//     name: "Near EAST",
//     color: COLOR_LIST[1],
//     data: ["binh-duong", "dong-nai", "binh-thuan", "ba-ria-vung-tau"].map(
//       (code) => ({
//         code,
//         color: COLOR_LIST[11],
//       })
//     ),
//   },
// ];

const MAP_CHART = [
  {
    name: "Bình Dương",
    color: COLOR_LIST[0],
    data: [
      {
        code: "binh-duong",
        color: COLOR_LIST[0],
      },
    ],
  },
  {
    name: "Đồng Nai",
    color: COLOR_LIST[1],
    data: [
      {
        code: "dong-nai",
        color: COLOR_LIST[1],
      },
    ],
  },
  {
    name: "Bình Thuận",
    color: COLOR_LIST[2],
    data: [
      {
        code: "binh-thuan",
        color: COLOR_LIST[2],
      },
    ],
  },
  {
    name: "Bà Rịa Vũng Tàu",
    color: COLOR_LIST[3],
    data: [
      {
        code: "ba-ria-vung-tau",
        color: COLOR_LIST[3],
      },
    ],
  },
];
