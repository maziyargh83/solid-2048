import type { ContextTile } from "../store/TileStore";
import { Animation } from "../types/Animation";
import type { Block } from "../types/Board";
import { createTile } from "./createTile";
export const findPreview = (data: Block[]) => {
  return data.find((item) => item.isPreview);
};
export const createOrGetPreview = ([data]: ContextTile, row: number) => {
  const item = findPreview(data);
  if (item)
    return {
      tile: item,
      new: false,
    };
  return {
    tile: createTile({
      animation: Animation.Preview,
      row,
      isPreview: true,
      visible: false,
    }),
    new: true,
  };
};
