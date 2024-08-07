import { useShallow } from "zustand/react/shallow";

import { playgroundStore } from "@/stores/playground-store";

export const useStore = () => {
  const { files, setFiles, selectedFileName } = playgroundStore(
    useShallow((state) => ({
      files: state.files,
      setFiles: state.setFiles,
      selectedFileName: state.selectedFileName,
    }))
  );

  const file = files[selectedFileName];

  const handleMonacoEditorChange = (value?: string) => {
    if (!value) return;

    files[file.name].value = value;

    setFiles({ ...files });
  };

  return { file, handleMonacoEditorChange };
};
