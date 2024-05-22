import { For } from "solid-js";
import { Board } from "../components/Board/Board";
import { Cell } from "../components/Board/BoardCell";
import { config } from "../config";
import { TileManager } from "../components/Board/TileManager";
import { TileProvider } from "../store/TileStore";
import { Preview } from "../components/Board/Preview";

export const Home = () => {
  return (
    <TileProvider>
      <div class="w-full min-h-screen bg-slate-300 flex-col gap-3 flex justify-center items-center">
        <Board>
          <For each={new Array(config.cols)}>
            {(_, i) => {
              return <Cell rowId={i()} />;
            }}
          </For>
          <TileManager />
        </Board>
        <Preview />
      </div>
    </TileProvider>
  );
};
