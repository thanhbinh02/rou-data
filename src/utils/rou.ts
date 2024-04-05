import { COLOR_LIST } from "../data";
import { TProvinces, TRouMap } from "../ts";

export const handleDataMap = (data: TProvinces): TRouMap[] => {
  return data.map(({ code, name }, i) => ({
    name,
    color: COLOR_LIST[i],
    volumes: 500,
    data: [
      {
        code,
        color: COLOR_LIST[i],
      },
    ],
  }));
};
