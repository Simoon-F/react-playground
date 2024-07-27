import { Allotment } from "allotment";
import { FC } from "react";
import { useShallow } from "zustand/react/shallow";

import { CodeEditor } from "@/components/code-editor/code-editor";
import { FileNameList } from "@/components/file-name-list/file-name-list";
import { Preview } from "@/components/preview/preview";
import { playgroundStore } from "@/stores/playground-store";

export const Home: FC = () => {
  const { files, selectedFileName } = playgroundStore(
    useShallow((state) => ({
      files: state.files,
      selectedFileName: state.selectedFileName,
    }))
  );

  const file = files[selectedFileName];

  return (
    <div className="h-screen">
      <Allotment defaultSizes={[100, 100]}>
        {/* code */}
        <Allotment.Pane minSize={600}>
          <FileNameList />
          <CodeEditor file={file} />
        </Allotment.Pane>

        {/* preview */}
        <Allotment.Pane minSize={600}>
          <Preview />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
};
