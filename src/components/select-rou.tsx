import { Select } from "antd";
import { useState } from "react";
import {
  PROVINCES_FAR_EAST,
  PROVINCES_HO_CHI_MINH,
  PROVINCES_ME_KONG,
  PROVINCES_NEAR_EAST,
  REGION_ROU,
} from "../data";
import { TMap, TRou, TRouMap } from "../ts";
import { handleDataOfRou } from "../utils";
import RegionMap from "./region-map";
import ROUMap from "./rou-map";
import { VIET_NAM_MAP } from "../data/viet-nam";
import { ROU_MAP } from "../data/rou-map";

type TSelectRou = {
  data: TRouMap[];
  map: TMap;
};

const SelectRou = () => {
  const [rou, setRou] = useState<TSelectRou>({
    data: handleDataOfRou(REGION_ROU),
    map: ROU_MAP,
  });

  const handleChange = (_: number, record: TRou | TRou[]) => {
    if (!Array.isArray(record)) {
      setRou({
        data: record.data,
        map: record.map,
      });
    }
  };

  const handleClear = () => {
    setRou({
      data: handleDataOfRou(REGION_ROU),
      map: ROU_MAP,
    });
  };

  return (
    <div>
      <Select
        style={{ width: "300px" }}
        placeholder="Select rou"
        options={options}
        allowClear
        onChange={handleChange}
        onClear={handleClear}
      />

      {rou && <RegionMap data={rou.data} map={rou.map} />}

      {!rou && <ROUMap />}
    </div>
  );
};

export default SelectRou;
const options = [
  {
    label: "Far EAST",
    value: "far-east",
    data: handleDataOfRou(PROVINCES_FAR_EAST),
    map: VIET_NAM_MAP,
  },
  {
    label: "Near EAST",
    value: "near-east",
    data: handleDataOfRou(PROVINCES_NEAR_EAST),
    map: VIET_NAM_MAP,
  },
  {
    label: "HCM",
    value: "hcm",
    data: handleDataOfRou(PROVINCES_HO_CHI_MINH),
    map: VIET_NAM_MAP,
  },
  {
    label: "Mekong",
    value: "mekong",
    data: handleDataOfRou(PROVINCES_ME_KONG),
    map: VIET_NAM_MAP,
  },
];
