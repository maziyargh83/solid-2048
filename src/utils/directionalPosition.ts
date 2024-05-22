export const defaultDirection = "down";
export type TDirection = "up" | "down";
export const directionalPosition = (
  position: string,
  direction: TDirection = defaultDirection
) => {
  return direction === "down" ? { top: position } : { bottom: position };
};
export const getReverseDirection = (): TDirection =>
  defaultDirection === "down" ? "up" : defaultDirection;
