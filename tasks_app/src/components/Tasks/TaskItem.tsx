import { ReactNode } from "react";

import styles from "./TaskItem.module.css";

interface Props {
  children: ReactNode;
}

const TaskItem: React.FC<Props> = ({ children }) => {
  return <li className={styles.task}>{children}</li>;
};

export default TaskItem;
