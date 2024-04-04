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
  }[];
  geometry: {
    type: string;
    coordinates: [[number, number][]];
  }[];
};

export type TRou = {
  label: string;
  value: string;
  data: TRouMap[];
  map: TMap;
};

export type TProvince = {
  name: string;
  code: string;
};

export type TProvinces = TProvince[];
