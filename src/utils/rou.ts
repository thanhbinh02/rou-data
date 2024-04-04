import { COLOR_LIST } from "../data";
import { TProvinces, TRouMap } from "../ts";

export const handleDataOfRou = (data: TProvinces): TRouMap[] => {
  return data.map(({ code, name }, i) => ({
    name,
    color: COLOR_LIST[i],
    data: [
      {
        code,
        color: COLOR_LIST[i],
      },
    ],
  }));
};
