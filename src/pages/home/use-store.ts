import { useShallow } from "zustand/react/shallow";

import { playgroundStore } from "@/stores/playground-store";

export const useStore = () => {
  const { files, selectedFileName } = playgroundStore(
    useShallow((state) => ({
      files: state.files,
      selectedFileName: state.selectedFileName,
    }))
  );

  const file = files[selectedFileName];

  return { file };
};
