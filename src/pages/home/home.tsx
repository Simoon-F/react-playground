import { Allotment } from "allotment";
import { FC } from "react";

import { CodeEditor } from "@/components/code-editor/code-editor";
import { FileNameList } from "@/components/file-name-list/file-name-list";
import { Preview } from "@/components/preview/preview";

import { useStore } from "./use-store";

export const Home: FC = () => {
  const { file } = useStore();

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
