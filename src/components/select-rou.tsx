import { Select, Space } from "antd";
import { useState } from "react";
import { PROVINCES_FAR_EAST, REGION_ROU } from "../data";
import { ROU_MAP } from "../data/rou-map";
import { VIET_NAM_MAP } from "../data/viet-nam";
import { TMap, TRegion, TRou } from "../ts";
import RegionMap from "./region-map";

import {
  DISTRICTS_HA_TINH,
  DISTRICTS_HAI_DUONG,
} from "../data/10-province-04-05-2024/select-province-04-05-2024";
import * as HA_TINH_DATA from "../data/10-province-05-05-2024/ha-tinh/ha-tinh.json";
import * as HAI_DUONG_DATA from "../data/10-province-05-05-2024/hai-duong/hai-duong.json";

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
      {
        label: "HAI_DUONG",
        value: "HAI_DUONG",
        data: DISTRICTS_HAI_DUONG,
        map: HAI_DUONG_DATA,
      },
    ],
  },
];
