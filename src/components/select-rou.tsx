import { Select, Space } from "antd";
import { useState } from "react";
import { PROVINCES_FAR_EAST, REGION_ROU } from "../data";
import { ROU_MAP } from "../data/rou-map";
import { VIET_NAM_MAP } from "../data/viet-nam";
import { TMap, TRegion, TRou } from "../ts";
import RegionMap from "./region-map";

import {
  DISTRICTS_HA_NOI,
  DISTRICTS_HA_TINH,
} from "../data/10-province-04-05-2024/select-province-04-05-2024";
import * as HA_NOI_DATA from "../data/10-province-05-05-2024/ha-noi/ha-noi.json";
import * as HA_TINH_DATA from "../data/10-province-05-05-2024/ha-tinh/ha-tinh.json";

type TSelectRou = {
  data: {
    name: string;
    code: string;
  }[];
  map: TMap;
};

const SelectRou = () => {
  const [rou, setRou] = useState<TSelectRou>({
    data: REGION_ROU,
    map: ROU_MAP,
  });

  const [provinces, setProvinces] = useState<TRou[]>();

  const [displayChart, setDisplayChart] = useState(true);

  const handleChange = (_: number, record: TRou | TRou[]) => {
    if (!Array.isArray(record)) {
      setRou({
        data: record.data,
        map: record.map,
      });

      setDisplayChart(false);

      setTimeout(function () {
        setDisplayChart(true);
      }, 100);

      setProvinces(record.provinces);
    }
  };

  const handleClear = () => {
    setRou({
      data: REGION_ROU,
      map: ROU_MAP,
    });
    setProvinces([]);
    setDisplayChart(false);
  };

  const handleChangeProvince = (_: number, record: TRou | TRou[]) => {
    if (!Array.isArray(record)) {
      setRou({
        data: record.data,
        map: record.map,
      });

      setDisplayChart(false);

      setTimeout(function () {
        setDisplayChart(true);
      }, 100);
    }
  };

  const result = filterData(rou.data, rou.map);

  return (
    <div>
      <Space>
        <Select
          style={{ width: "300px" }}
          placeholder="Select rou"
          options={options}
          allowClear
          onChange={handleChange}
          onClear={handleClear}
        />

        <Select
          style={{ width: "300px" }}
          placeholder="Select province"
          options={provinces}
          allowClear
          onChange={handleChangeProvince}
          disabled={!provinces}
        />
      </Space>
      <RegionMap data={rou.data} map={rou.map} />
    </div>
  );
};

export default SelectRou;

function filterData(data: TRegion[], map: TMap) {
  const resultData = map.features.filter((item2) =>
    data.some((item1) => item1.code === item2.id)
  );

  return { type: map.type, features: resultData };
}

const options = [
  {
    label: "Far EAST",
    value: "far-east",
    data: PROVINCES_FAR_EAST,
    map: VIET_NAM_MAP,
    provinces: [
      // {
      //   label: "Gia Lai",
      //   value: "gia-lai",
      //   data: DISTRICTS_GIA_LAI,
      //   map: GIA_LAI_DATA,
      // },
      // {
      //   label: "HAU_GIAN",
      //   value: "HAU_GIAN",
      //   data: DISTRICTS_HAU_GIANG,
      //   map: HAU_GIANG_DATA,
      // },
      // {
      //   label: "HA_NOI",
      //   value: "HA_NOI",
      //   data: DISTRICTS_HA_NOI,
      //   map: HA_NOI_DATA,
      // },
      {
        label: "HA_TINH",
        value: "HA_TINH",
        data: DISTRICTS_HA_TINH,
        map: HA_TINH_DATA,
      },
    ],
  },
];
