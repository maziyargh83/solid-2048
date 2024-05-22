import { createContext, useContext } from "solid-js";
import type { Context, ParentProps } from "solid-js";
import { createStore } from "solid-js/store";
import type { SetStoreFunction } from "solid-js/store";
import type { Block } from "../types/Board";
export type ContextTile = [get: Block[], set: SetStoreFunction<Block[]>];
const TileContext = createContext<ContextTile>();

export function TileProvider(props: ParentProps) {
  const [tile, setTile] = createStore<Block[]>([]);
  const Tile: ContextTile = [tile, setTile];

  return (
    <TileContext.Provider value={Tile}>{props.children}</TileContext.Provider>
  );
}

export function useTile() {
  return useContext(TileContext as Context<ContextTile>);
}
