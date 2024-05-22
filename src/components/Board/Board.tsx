import { children, type ParentProps } from "solid-js";
import { config } from "../../config";
import { trackPointer } from "../../directives/trackPointer";

export const Board = (props: ParentProps) => {
  const safeChildren = children(() => props.children);

  return (
    <div
      class={
        "relative bg-slate-300 flex justify-between overflow-hidden rounded"
      }
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`,
      }}
      use:trackPointer
    >
      {safeChildren()}
    </div>
  );
};
