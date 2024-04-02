import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { VIET_NAM_MAP } from "../data/viet-nam";
import { COLOR_LIST } from "../data";

highchartsMap(Highcharts);

const ROUMap = () => {
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

export default ROUMap;

const MAP_CHART = [
  {
    name: "Far EAST",
    color: COLOR_LIST[0],
    data: ["tay-ninh", "lam-dong", "binh-phuoc", "dak-nong"].map((code) => ({
      code,
      color: COLOR_LIST[10],
    })),
  },
  {
    name: "Near EAST",
    color: COLOR_LIST[1],
    data: ["binh-duong", "dong-nai", "binh-thuan", "ba-ria-vung-tau"].map(
      (code) => ({
        code,
        color: COLOR_LIST[11],
      })
    ),
  },
  {
    name: "HCM",
    color: COLOR_LIST[2],
    data: ["tp-hcm", "long-an"].map((code) => ({
      code,
      color: COLOR_LIST[1],
    })),
  },
  {
    name: "Mekong",
    color: COLOR_LIST[3],
    data: [
      "ben-tre",
      "soc-trang",
      "ca-mau",
      "an-giang",
      "bac-lieu",
      "dong-thap",
      "tien-giang",
      "tra-vinh",
      "vinh-long",
      "kien-giang",
      "hau-giang",
    ].map((code) => ({
      code,
      color: COLOR_LIST[13],
    })),
  },
];
