import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { VIET_NAM_MAP } from "../data/viet-nam";
import { COLOR_LIST } from "../data";

highchartsMap(Highcharts);

const MekongMap = () => {
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

export default MekongMap;

const MAP_CHART = [
  {
    name: "Bến Tre",
    color: COLOR_LIST[0],
    data: [
      {
        code: "ben-tre",
        color: COLOR_LIST[0],
      },
    ],
  },
  {
    name: "Sóc Trăng",
    color: COLOR_LIST[1],
    data: [
      {
        code: "soc-trang",
        color: COLOR_LIST[1],
      },
    ],
  },
  {
    name: "Cà Mau",
    color: COLOR_LIST[2],
    data: [
      {
        code: "ca-mau",
        color: COLOR_LIST[2],
      },
    ],
  },
  {
    name: "An Giang",
    color: COLOR_LIST[3],
    data: [
      {
        code: "an-giang",
        color: COLOR_LIST[3],
      },
    ],
  },
  {
    name: "Bạc Liêu",
    color: COLOR_LIST[3],
    data: [
      {
        code: "bac-lieu",
        color: COLOR_LIST[3],
      },
    ],
  },
  {
    name: "Đồng Tháp",
    color: COLOR_LIST[4],
    data: [
      {
        code: "dong-thap",
        color: COLOR_LIST[4],
      },
    ],
  },
  {
    name: "Tiền Giang",
    color: COLOR_LIST[5],
    data: [
      {
        code: "tien-giang",
        color: COLOR_LIST[5],
      },
    ],
  },
  {
    name: "Trà Vinh",
    color: COLOR_LIST[6],
    data: [
      {
        code: "tra-vinh",
        color: COLOR_LIST[6],
      },
    ],
  },
  {
    name: "Vĩnh LOng",
    color: COLOR_LIST[7],
    data: [
      {
        code: "vinh-long",
        color: COLOR_LIST[7],
      },
    ],
  },
  {
    name: "Kiên Giang",
    color: COLOR_LIST[8],
    data: [
      {
        code: "kien-giang",
        color: COLOR_LIST[8],
      },
    ],
  },
  {
    name: "Hậu Giang",
    color: COLOR_LIST[9],
    data: [
      {
        code: "hau-giang",
        color: COLOR_LIST[9],
      },
    ],
  },
];
