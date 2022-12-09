import { ReactNode } from "react";

import styles from "./Section.module.css";

const Section: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;
