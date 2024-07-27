import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";

import { playgroundStore } from "@/stores/playground-store";

export const FileNameList = () => {
  const { files, addFile, removeFile, updateFileName, setSelectedFileName } =
    playgroundStore(
      useShallow((state) => ({
        files: state.files,
        addFile: state.addFile,
        removeFile: state.removeFile,
        updateFileName: state.updateFileName,
        setSelectedFileName: state.setSelectedFileName,
      }))
    );

  const [tabs, setTabs] = useState<string[]>([""]);

  useEffect(() => {
    setTabs(Object.keys(files));
  }, [files]);

  return (
    <div>
      {tabs.map((item, index) => (
        <div key={`tab_${index}`} onClick={() => setSelectedFileName(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};
