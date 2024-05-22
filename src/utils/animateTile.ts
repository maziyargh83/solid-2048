import type { VariantDefinition } from "solid-motionone";

export const animateTile = (
  style: VariantDefinition,
  applyStyle = true
): VariantDefinition => {
  return applyStyle ? style : {};
};
