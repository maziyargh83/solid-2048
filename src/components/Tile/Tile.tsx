import { cellHeight, cellWidth } from "../../config";
import type { Block } from "../../types/Board";
import { addGap } from "../../utils/addGap";
import { generateColor } from "../../utils/color";
import { setAttrBoard } from "../../utils/handleAttr";
import { Animation } from "../../types/Animation";
import { getMaxTopBoard } from "../../utils/getMaxTopBoard";
import { animate } from "motion";
import { createEffect, createSignal } from "solid-js";
import { useTile } from "../../store/TileStore";

export const Tile = (props: Block) => {
	const [ref, setRef] = createSignal<HTMLDivElement>();
	const [_, setTile] = useTile();
	const col = () => props.col || 0;
	const top = () => col() * (cellHeight + 10);
	const left = () =>
		(cellWidth + addGap(props.row)) * props.row + props.row * 2;
	const transform = () => {
		if (props.isListPreview) return `translate3d(${left()}px, ${top()}px,0px)`;
		switch (props.animation) {
			case Animation.Preview:
				return `translate3d(${left()}px, ${getMaxTopBoard()}px,0px)`;
			case Animation.Drop: {
				return `translate3d(${left()}px, ${getMaxTopBoard()}px,0px)`;
			}
			default:
				return `translate3d(${left()}px, ${top()}px,0px)`;
		}
	};
	createEffect(() => {
		const el = ref();
		if (!el || props.isListPreview) return;
		switch (props.animation) {
			case Animation.Drop: {
				const animation = animate(
					el,
					{
						transform: `translate3d(${left()}px, ${top()}px,0px)`,
					},
					{
						delay: 0.2,
					},
				);
				animation.finished.then(() => {
					setTile((item) => item.id === props.id, "animation", Animation.Stale);
				});

				break;
			}
			default:
				break;
		}
	});
	return (
		<div
			ref={setRef}
			style={{
				width: `${cellWidth}px`,
				height: `${cellHeight}px`,
				background: generateColor(props.size),
				opacity: props.visible ? 1 : 0,
				transform: transform(),
			}}
			class="duration-75 text-white rounded flex items-center justify-center font-bold text-base"
			classList={{
				absolute: !props.isListPreview,
				"transition-[left]": !props.isPreview,
			}}
			{...setAttrBoard(props.row)}
		>
			{props.size}
		</div>
	);
};
