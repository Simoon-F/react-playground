import MonacoEditor, { OnMount } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

import { ata } from "./utils";

const EDITOR_OPTIONS: monaco.editor.IStandaloneEditorConstructionOptions = {
  minimap: {
    enabled: false,
  },
  fontSize: 13,
  fontFamily: '"Fira Code", "Dank Mono", "JetBrains Mono", monospace',
  fontWeight: "500",
  scrollbar: {
    verticalScrollbarSize: 3,
    horizontalScrollbarSize: 3,
  },
  scrollBeyondLastLine: false,
};

export const CodeEditor = () => {
  // Test Code
  const code = `const App = () => {
  return <div>Hello World</div>;
};

export default App;`;

  const handleMount: OnMount = (editor, monaco) => {
    // Set compiler options
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true,
    });

    // Format code on save
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyL, () => {
      const editorFormatDocumentAction = editor.getAction(
        "editor.action.formatDocument"
      );

      editorFormatDocumentAction && editorFormatDocumentAction.run();
    });

    // Introduce the downloaded dependency package to the editor.
    const overrideATA = ata((code: string, path: string) => {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        code,
        `file://${path}`
      );
    });

    // Update the dependency package when the editor content changes.
    editor.onDidChangeModelContent(() => {
      overrideATA(editor.getValue());
    });

    // Init the dependency package.
    overrideATA(editor.getValue());
  };

  return (
    <div>
      <MonacoEditor
        path={"index.tsx"}
        value={code}
        onMount={handleMount}
        options={EDITOR_OPTIONS}
        language={"typescript"}
        className={"h-screen"}
      />
    </div>
  );
};
