import { Select, Space } from "antd";
import { useState } from "react";
import {
  PROVINCES_FAR_EAST,
  PROVINCES_HO_CHI_MINH,
  PROVINCES_ME_KONG,
  PROVINCES_NEAR_EAST,
  REGION_ROU,
} from "../data";
import * as BINH_PHUOC_DATA from "../data/far-east/binh-phuoc/binh-phuoc.json";
import * as DAK_NONG_DATA from "../data/far-east/dak-nong/dak-nong.json";
import * as LAM_DONG_DATA from "../data/far-east/lam-dong/lam-dong.json";
import {
  DISTRICTS_BINH_PHUOC,
  DISTRICTS_DAK_NONG,
  DISTRICTS_LAM_DONG,
  DISTRICTS_TAY_NINH,
} from "../data/far-east/select-district-far-east";
import * as TAY_NINH_DATA from "../data/far-east/tay-ninh/tay-ninh.json";
import {
  DISTRICTS_HCM,
  DISTRICTS_LONG_AN,
} from "../data/hcm/select-district-hcm";
import {
  DISTRICTS_AN_GIANG,
  DISTRICTS_BAC_LIEU,
  DISTRICTS_BEN_TRE,
  DISTRICTS_CA_MAU,
  DISTRICTS_DONG_THAP,
  DISTRICTS_HAU_GIANG,
  DISTRICTS_KIEN_GIANG,
  DISTRICTS_SOC_TRANG,
  DISTRICTS_TIEN_GIANG,
  DISTRICTS_TRA_VINH,
  DISTRICTS_VINH_LONG,
} from "../data/mekong/select-district-me-kong";
import {
  DISTRICTS_BA_RIA_VUNG_TAU,
  DISTRICTS_BINH_DUONG,
  DISTRICTS_BINH_THUAN,
  DISTRICTS_DONG_NAI,
} from "../data/near-east/select-district-near-east";
import { ROU_MAP } from "../data/rou-map";
import { VIET_NAM_MAP } from "../data/viet-nam";
import { TMap, TRegion, TRou } from "../ts";
import RegionMap from "./region-map";

import * as BA_RIA_VUNG_TAU_DATA from "../data/near-east/ba-ria-vung-tau/ba-ria-vung-tau.json";
import * as BINH_DUONG_DATA from "../data/near-east/binh-duong/binh-duong.json";
import * as BINH_THUAN_DATA from "../data/near-east/binh-thuan/binh-thuan.json";
import * as DONG_NAI_DATA from "../data/near-east/dong-nai/dong-nai.json";

import * as LONG_AN_DATA from "../data/hcm/long-an/longan.json";
import * as HCM_DATA from "../data/hcm/tp-hcm/hcm.json";

import * as AN_GIÀNG_DATA from "../data/mekong/an-giang/an-giang.json";
import * as BAC_LIEU_DATA from "../data/mekong/bac-lieu/bac-lieu.json";
import * as BEN_TRE_DATA from "../data/mekong/ben-tre/ben-tre.json";
import * as CA_MAU_DATA from "../data/mekong/ca-mau/ca-mau.json";
import * as DONG_THAP_DATA from "../data/mekong/dong-thap/dong-thap.json";
import * as HAU_GIANG_DATA from "../data/mekong/hau-giang/hau-giang.json";
import * as KIEN_GIANG_DATA from "../data/mekong/kien-giang/kien-giang.json";
import * as SOC_TRANG_DATA from "../data/mekong/soc-trang/soc-trang.json";
import * as TIEN_GIANG_DATA from "../data/mekong/tien-giang/tien-giang.json";
import * as TRA_VINH_DATA from "../data/mekong/tra-vinh/tra-vinh.json";
import * as VINH_LONG_DATA from "../data/mekong/vinh-long/vinh-long.json";
import PercentMap from "./percent-map";

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
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
        <RegionMap data={rou.data} map={rou.map} />

        <div>{displayChart && <PercentMap data={rou.data} map={result} />}</div>
      </div>
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
        label: "Tây Ninh",
        value: "tay-ninh",
        data: DISTRICTS_TAY_NINH,
        map: TAY_NINH_DATA,
      },
      {
        label: "Lâm Đồng",
        value: "lam-dong",
        data: DISTRICTS_LAM_DONG,
        map: LAM_DONG_DATA,
      },
      {
        label: "Bình Phước",
        value: "binh-phuoc",
        data: DISTRICTS_BINH_PHUOC,
        map: BINH_PHUOC_DATA,
      },
      {
        label: "Đắk Nông",
        value: "dak-nong",
        data: DISTRICTS_DAK_NONG,
        map: DAK_NONG_DATA,
      },
    ],
  },
  {
    label: "Near EAST",
    value: "near-east",
    data: PROVINCES_NEAR_EAST,
    map: VIET_NAM_MAP,
    provinces: [
      {
        label: "Bà Rịa - Vũng Tàu",
        value: "ba-ria-vung-tau",
        data: DISTRICTS_BA_RIA_VUNG_TAU,
        map: BA_RIA_VUNG_TAU_DATA,
      },
      {
        label: "Bình Dương",
        value: "binh-duong",
        data: DISTRICTS_BINH_DUONG,
        map: BINH_DUONG_DATA,
      },
      {
        label: "Đồng Nai",
        value: "dong-nai",
        data: DISTRICTS_DONG_NAI,
        map: DONG_NAI_DATA,
      },
      {
        label: "Bình Thuận",
        value: "binh-thuan",
        data: DISTRICTS_BINH_THUAN,
        map: BINH_THUAN_DATA,
      },
    ],
  },
  {
    label: "HCM",
    value: "hcm",
    data: PROVINCES_HO_CHI_MINH,
    map: VIET_NAM_MAP,
    provinces: [
      {
        label: "TP Hồ Chí Minh",
        value: "tp-ho-chi-minh",
        data: DISTRICTS_HCM,
        map: HCM_DATA,
      },
      {
        label: "Long An",
        value: "long-an",
        data: DISTRICTS_LONG_AN,
        map: LONG_AN_DATA,
      },
    ],
  },
  {
    label: "Mekong",
    value: "mekong",
    data: PROVINCES_ME_KONG,
    map: VIET_NAM_MAP,
    provinces: [
      {
        label: "Bến Tre",
        value: "ben-tre",
        data: DISTRICTS_BEN_TRE,
        map: BEN_TRE_DATA,
      },
      {
        label: "Sóc Trăng",
        value: "soc-trang",
        data: DISTRICTS_SOC_TRANG,
        map: SOC_TRANG_DATA,
      },
      {
        label: "Cà Mau",
        value: "ca-mau",
        data: DISTRICTS_CA_MAU,
        map: CA_MAU_DATA,
      },
      {
        label: "An Giang",
        value: "an-giang",
        data: DISTRICTS_AN_GIANG,
        map: AN_GIÀNG_DATA,
      },
      {
        label: "Bạc Liêu",
        value: "bac-lieu",
        data: DISTRICTS_BAC_LIEU,
        map: BAC_LIEU_DATA,
      },
      {
        label: "Đồng Tháp",
        value: "dong-thap",
        data: DISTRICTS_DONG_THAP,
        map: DONG_THAP_DATA,
      },
      {
        label: "Tiền Giang",
        value: "tien-giang",
        data: DISTRICTS_TIEN_GIANG,
        map: TIEN_GIANG_DATA,
      },
      {
        label: "Trà Vinh",
        value: "tra-vinh",
        data: DISTRICTS_TRA_VINH,
        map: TRA_VINH_DATA,
      },
      {
        label: "Vĩnh Long",
        value: "vinh-long",
        data: DISTRICTS_VINH_LONG,
        map: VINH_LONG_DATA,
      },
      {
        label: "Kiên Giang",
        value: "kien-giang",
        data: DISTRICTS_KIEN_GIANG,
        map: KIEN_GIANG_DATA,
      },
      {
        label: "Hậu Giang",
        value: "hau-giang",
        data: DISTRICTS_HAU_GIANG,
        map: HAU_GIANG_DATA,
      },
    ],
  },
];
