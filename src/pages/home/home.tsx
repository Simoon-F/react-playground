import { Allotment } from "allotment";
import { FC } from "react";

import { CodeEditor } from "./components/code-editor/code-editor";
import { Preview } from "./components/preview/preview";

export const Home: FC = () => {
  return (
    <div className="h-screen">
      <Allotment defaultSizes={[100, 100]}>
        {/* code */}
        <Allotment.Pane minSize={600}>
          <CodeEditor />
        </Allotment.Pane>

        {/* preview */}
        <Allotment.Pane minSize={600}>
          <Preview />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
};
