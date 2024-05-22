import { cellHeight, cellWidth } from "../../config";
import type { Block } from "../../types/Board";
import { addGap } from "../../utils/addGap";
import { generateColor } from "../../utils/color";
import { directionalPosition } from "../../utils/directionalPosition";
import { setAttrBoard } from "../../utils/handleAttr";

export const Tile = (props: Block) => {
  const col = () => props.col || 0;
  const top = () => col() * (cellHeight + 10);
  const left = () =>
    (cellWidth + addGap(props.row)) * props.row + props.row * 2;
  return (
    <div
      style={{
        width: `${cellWidth}px`,
        height: `${cellHeight}px`,
        background: generateColor(props.size),
        left: `${left()}px`,
        opacity: props.visible ? 1 : 0,
        ...directionalPosition(`${top()}px`),
      }}
      class="transition-[left] duration-75 rounded flex items-center justify-center font-bold text-base"
      classList={{
        absolute: !props.isListPreview,
      }}
      {...setAttrBoard(props.row)}
    >
      {props.size}
    </div>
  );
};
