/**
 * Determine the Programming Language Based on File Suffix
 *
 * @param fileName - The name of the file
 * @returns {string} - The programming language associated with the file suffix
 */
export const determineLanguageFromFileName = (fileName: string): string => {
  const suffix = fileName.split(".").pop() || "";

  const languageMap: { [key: string]: string } = {
    js: "javascript",
    jsx: "javascript",
    ts: "typescript",
    tsx: "typescript",
    json: "json",
    css: "css",
  };

  return languageMap[suffix] || "javascript";
};
