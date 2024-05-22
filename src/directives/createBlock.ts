import { onCleanup } from "solid-js";
import { useTile } from "../store/TileStore";
import { Animation } from "../types/Animation";
import { addToStore } from "../utils/addToStore";
import { createTile } from "../utils/createTile";
import { getAttrBoard } from "../utils/handleAttr";

export function createBlock(element: HTMLDivElement): void {
  const store = useTile();
  element.addEventListener("click", () => {
    const rowId = getAttrBoard(element) || "0";

    const block = createTile({
      animation: Animation.Drop,
      row: Number.parseInt(rowId),
      size: 2,
      store,
    });
    addToStore(store, block);
  });
  onCleanup(() => element.removeEventListener("click", () => {}));
}
