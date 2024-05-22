import { For } from "solid-js";
import getSequenceNumber from "../../utils/sequenceNumber";
import { Tile } from "../Tile/Tile";
import { createTile } from "../../utils/createTile";
import { Animation } from "../../types/Animation";
export const Preview = () => {
  const { preview } = getSequenceNumber();

  return (
    <div class="relative flex space-x-2">
      <For each={preview()}>
        {(item) => (
          <Tile
            isListPreview
            {...createTile({
              animation: Animation.Preview,
              row: 0,
              col: 0,
              size: item,
            })}
          />
        )}
      </For>
    </div>
  );
};
