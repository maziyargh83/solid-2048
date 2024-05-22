import { rowIdAttr } from "../config";

export const getAttrBoard = (element: HTMLDivElement) => {
  if (!element) return null;
  return element.getAttribute(rowIdAttr);
};
export const setAttrBoard = (id: number) => {
  return {
    [rowIdAttr]: id,
  };
};
