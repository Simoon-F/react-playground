import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";

import { playgroundStore } from "@/stores/playground-store";

export const useStore = () => {
  const { files, selectedFileName, setSelectedFileName } = playgroundStore(
    useShallow((state) => ({
      files: state.files,
      addFile: state.addFile,
      removeFile: state.removeFile,
      selectedFileName: state.selectedFileName,
      setSelectedFileName: state.setSelectedFileName,
    }))
  );

  const [tabs, setTabs] = useState<string[]>([""]);

  useEffect(() => {
    setTabs(Object.keys(files));
  }, [files]);

  const handleFileSwitch = (fileName: string) => {
    setSelectedFileName(fileName);
  };

  return {
    tabs,
    handleFileSwitch,
    selectedFileName,
  };
};
