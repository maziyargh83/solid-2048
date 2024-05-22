import type { Animation } from "./Animation";

export interface Block {
  col?: number;
  row: number;
  size: number;
  id: string;
  animation: Animation;
  visible?: boolean;
  isPreview?: boolean;
  isListPreview?: boolean;
}
