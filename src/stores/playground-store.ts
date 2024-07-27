import { GetSuffixLanguageInFileName } from "@/utils";
import { create } from "zustand";
import AppCss from "@/components/template/app.css?raw";
import App from "@/components/template/app.tsx?raw";
import main from "@/components/template/main.tsx?raw";
import importMap from "@/components/template/import-map.json?raw";

export interface IFile {
  name: string;
  value: string;
  language: string;
}

export interface IFiles {
  [key: string]: IFile;
}

export type PlaygroundStoreType = {
  files: IFiles;
  addFile: (fileName: string) => void;
  setFiles: (files: IFiles) => void;
  removeFile: (fileName: string) => void;
  selectedFileName: string;
  updateFileName: (oldFieldName: string, newFieldName: string) => void;
  setSelectedFileName: (fileName: string) => void;
};

const DEFAULT_FILES: IFiles = {
  "main.tsx": {
    name: "main.tsx",
    value: main,
    language: "typescript",
  },
  "app.tsx": {
    name: "app.tsx",
    value: App,
    language: "typescript",
  },
  "app.css": {
    name: "app.css",
    value: AppCss,
    language: "css",
  },
  "import-map.json": {
    name: "import-map.json",
    value: importMap,
    language: "json",
  },
};

export const playgroundStore = create<PlaygroundStoreType>((set, get) => ({
  files: DEFAULT_FILES,
  addFile: (fileName: string) =>
    set((state) => ({
      files: {
        ...state.files,
        [fileName]: {
          name: fileName,
          value: "",
          language: GetSuffixLanguageInFileName(fileName),
        },
      },
    })),
  setFiles: (files) => set({ files }),
  removeFile: (fileName) => {
    const state = get();

    delete state.files[fileName];

    set({ files: state.files });
  },
  selectedFileName: "app.tsx",
  updateFileName: (oldFieldName, newFieldName) => {
    const state = get();

    if (
      !state.files[oldFieldName] ||
      newFieldName === undefined ||
      newFieldName === null
    ) {
      return;
    }

    const { [oldFieldName]: value, ...rest } = state.files;

    const newFile = {
      [newFieldName]: {
        ...value,
        language: GetSuffixLanguageInFileName(newFieldName),
        name: newFieldName,
      },
    };

    set({ files: { ...rest, ...newFile } });
  },
  setSelectedFileName: (fileName) => set({ selectedFileName: fileName }),
}));
