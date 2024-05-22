import type { Block } from "../types/Board";
import { nanoid } from "nanoid";
import { findLastRowIndex } from "./findLastRowIndex";
import type { ContextTile } from "../store/TileStore";
import getSequenceNumber from "../utils/sequenceNumber";

type createTileArgs = Omit<Block, "id" | "size"> &
  Partial<Pick<Block, "id" | "size">> & {
    store?: ContextTile;
  };
export const createTile = ({
  animation,
  col,
  row,
  size,
  store,
  isPreview = false,
  visible = true,
  id,
}: createTileArgs): Block => {
  const { getPreview } = getSequenceNumber();
  const lastRow = store && findLastRowIndex(store, row);
  const _size = size ?? getPreview();
  return {
    id: id ?? nanoid(),
    animation,
    col: lastRow ?? col,
    row,
    size: _size,
    isPreview,
    visible,
  };
};
