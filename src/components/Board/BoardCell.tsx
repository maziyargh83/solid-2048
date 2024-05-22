import { cellWidth } from "../../config";
import { setAttrBoard } from "../../utils/handleAttr";
interface CellProps {
  rowId: number;
}
export const Cell = (props: CellProps) => {
  return (
    <div
      class="h-full bg-slate-500/75"
      {...setAttrBoard(props.rowId)}
      style={{
        width: `${cellWidth}px`,
      }}
    />
  );
};
