export const config = {
  cols: 6,
  rows: 6,
  width: 400,
  height: 400,
  colgap: 10,
  maxNumber: 2048,
};
export const sequenceConfig = {
  start: 2,
  size: 6,
};
export const rowIdAttr = "rowid";
export const cellWidth = config.width / config.rows - config.colgap;
export const cellHeight = config.height / config.cols - config.colgap;
