import { getAttrBoard } from "./handleAttr";

export const getTargetCell = (target: HTMLDivElement) => {
  const rowId = getAttrBoard(target);
  return rowId;
};
