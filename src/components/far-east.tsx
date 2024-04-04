import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { VIET_NAM_MAP } from "../data/viet-nam";
import { COLOR_LIST } from "../data";

highchartsMap(Highcharts);

const FarEast = () => {
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

export default FarEast;

const MAP_CHART = [
  {
    name: "Tây Ninh",
    color: COLOR_LIST[0],
    data: [
      {
        code: "tay-ninh",
        color: COLOR_LIST[0],
      },
    ],
  },
  {
    name: "Lâm Đồng",
    color: COLOR_LIST[1],
    data: [
      {
        code: "lam-dong",
        color: COLOR_LIST[1],
      },
    ],
  },
  {
    name: "Bình Phước",
    color: COLOR_LIST[2],
    data: [
      {
        code: "binh-phuoc",
        color: COLOR_LIST[2],
      },
    ],
  },
  {
    name: "Đắk Nông",
    color: COLOR_LIST[3],
    data: [
      {
        code: "dak-nong",
        color: COLOR_LIST[3],
      },
    ],
  },
];
