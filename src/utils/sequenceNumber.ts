import { createSignal } from "solid-js";
import { sequenceConfig } from "../config";
import { getInitialTileNumber, getRandomIndex } from "./random";

const getSequenceNumber = () => {
  const sequence: number[] = getInitialTileNumber(
    sequenceConfig.size,
    sequenceConfig.start
  );
  const [preview, setPreview] = createSignal([
    2,
    sequence[getRandomIndex(sequence)],
  ]);

  return () => {
    return {
      getSequence: () => structuredClone(sequence),
      size: sequence.length,
      preview,
      getPreview: (update = false) => {
        const [first, ...rest] = preview();
        if (update) setPreview([...rest, sequence[getRandomIndex(sequence)]]);
        return first;
      },
    };
  };
};

export default getSequenceNumber();
