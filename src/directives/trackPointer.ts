import { onCleanup } from "solid-js";
import { getTargetCell } from "../utils/getTargetCell";
import { findLastRowIndex } from "../utils/findLastRowIndex";
import { useTile } from "../store/TileStore";
import type { ContextTile } from "../store/TileStore";
import { addToStore } from "../utils/addToStore";
import { createOrGetPreview } from "../utils/createOrGetPreview";
import type { Part, StoreSetter } from "solid-js/store";
import type { Block } from "../types/Board";
import { Animation } from "../types/Animation";
import getSequenceNumber from "../utils/sequenceNumber";
export function trackPointer(el: HTMLDivElement) {
  const store = useTile();
  const getTargetCellId = (event: PointerEvent) => {
    const element = document.elementFromPoint(event.x, event.y);
    const targetRow = getTargetCell(element as HTMLDivElement);
    return targetRow;
  };

  const showPreview = (event: PointerEvent) => {
    const targetRow = getTargetCellId(event);
    if (!targetRow) return;

    const preview = createOrGetPreview(store, Number.parseInt(targetRow));
    if (preview.new) addToStore(store, preview.tile);

    const row = Number.parseInt(targetRow);
    updatePreview(store, "col", findLastRowIndex(store, row));
    updatePreview(store, "row", row);
  };
  const addTile = (event: PointerEvent, checkForVisibility: boolean) => {
    const targetRow = getTargetCellId(event);
    if (!targetRow) {
      if (checkForVisibility) {
        updatePreview(store, "visible", false);
      }

      return;
    }
    const { getPreview } = getSequenceNumber();
    updatePreview(store, "size", getPreview(true));
    updatePreview(store, "visible", true);
    updatePreview(store, "animation", Animation.Drop);
    updatePreview(store, "isPreview", false);
  };
  const handlePointerMove = (event: PointerEvent) => {
    showPreview(event);
  };
  const updatePreview = (
    [_, setData]: ContextTile,
    key: Part<Block, keyof Block>,
    setter: StoreSetter<
      string | number | boolean | undefined,
      [keyof Block, number]
    >
  ) => {
    setData((item) => item.isPreview === true, key, setter);
  };
  const addPointerMoveListener = (e: PointerEvent) => {
    if (el) {
      showPreview(e);
      updatePreview(store, "visible", true);
      el.setPointerCapture(e.pointerId);
      el.addEventListener("pointermove", handlePointerMove);
    }
  };

  const removePointerMoveListener = (e?: PointerEvent) => {
    if (el) {
      if (e) {
        showPreview(e);
        el.releasePointerCapture(e.pointerId);
        addTile(e, true);
      }
      el.removeEventListener("pointermove", handlePointerMove);
    }
  };

  // const handlePointerLeave = (e: PointerEvent) => {
  //   removePointerMoveListener(e);
  // };

  const element = el;
  if (!element) return;

  element.style.touchAction = "none"; // Disable touch actions to ensure proper pointer event handling
  element.addEventListener("pointerdown", addPointerMoveListener);
  element.addEventListener("pointerup", removePointerMoveListener);
  // element.addEventListener("pointerleave", handlePointerLeave);

  onCleanup(() => {
    element.removeEventListener("pointerdown", addPointerMoveListener);
    element.removeEventListener("pointerup", removePointerMoveListener);
    // element.removeEventListener("pointerleave", handlePointerLeave);
    removePointerMoveListener();
  });
}
