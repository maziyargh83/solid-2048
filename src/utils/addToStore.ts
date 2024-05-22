import type { ContextTile } from "../store/TileStore";
import type { Block } from "../types/Board";

export const addToStore = ([store, setStore]: ContextTile, newBlock: Block) => {
  setStore([...store, { ...newBlock }]);
  return newBlock;
};
