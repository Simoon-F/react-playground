import classnames from "classnames";

import styles from "./styles.module.css";
import { useStore } from "./use-store";

export const FileNameList = () => {
  const { tabs, handleFileSwitch, selectedFileName } = useStore();

  return (
    <div className={styles.tabs}>
      {tabs.map((item, index) => (
        <div
          key={`tab_${index}`}
          onClick={() => handleFileSwitch(item)}
          className={classnames(
            styles["tab-item"],
            selectedFileName === item ? styles.actived : null
          )}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
