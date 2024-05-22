import { For } from "solid-js";
import { useTile } from "../../store/TileStore";
import { Tile } from "../Tile/Tile";

export const TileManager = () => {
  const [tiles] = useTile();

  return (
    <For each={tiles}>
      {(item) => {
        return <Tile {...item} />;
      }}
    </For>
  );
};
