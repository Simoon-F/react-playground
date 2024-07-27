import { setupTypeAcquisition } from "@typescript/ata";
import ts from "typescript";

export const useStore = () => {
  /**
   * TypeScript - Automatic Type Acquisition
   *
   * @param callback - Callback function to receive the code and path of the file
   * @returns
   */
  const ata = (callback: (code: string, path: string) => void) => {
    return setupTypeAcquisition({
      projectName: "test",
      typescript: ts,
      logger: console,
      delegate: {
        receivedFile: (code, path) => callback(code, path),
      },
    });
  };

  return { ata };
};
