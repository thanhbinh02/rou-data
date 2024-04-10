import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { TMap, TRegion } from "../ts";
import { handleDataMap } from "../utils";

highchartsMap(Highcharts);

const RegionMap = ({ data, map }: { data: TRegion[]; map: TMap }) => {
  const options = {
    chart: {
      map: map,
      width: 500,
      height: 700,
      animation: false,
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          // formatter: function () {
          //   return this.point.name;
          // },
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

        borderColor: "white", // Border color of the regions
        borderWidth: 1,
      },
    },

    series: handleDataMap(data),

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

export default RegionMap;
