export type TRouMap = {
  name: string;
  color: string;
  data: {
    code: string;
    color: string;
  }[];
};

export type TMap = {
  type: string;
  features: {
    id: string;
    properties: {
      id: string;
      name: string;
    };
    geometry: {
      type: string;
      coordinates: number[][][][];
    };
  }[];
};

export type TRou = {
  label: string;
  value: string;
  data: {
    name: string;
    code: string;
  }[];
  map: TMap;
  provinces: {
    label: string;
    value: string;
    data: TRouMap[];
    map: TMap;
  }[];
};

export type TProvince = {
  name: string;
  code: string;
};

export type TProvinces = TProvince[];

export type TRegion = {
  name: string;
  code: string;
};

export type TRegions = TRegion[];
