import type { ContextTile } from "../store/TileStore";

export const findLastRowIndex = ([store]: ContextTile, row: number) => {
  return store.filter((item) => item.row === row && !item.isPreview).length;
};
