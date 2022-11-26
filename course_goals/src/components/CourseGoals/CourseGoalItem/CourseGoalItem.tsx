import { ReactNode } from "react";

import styles from "./CourseGoalItem.module.css";

interface Props {
  id: string;
  children: ReactNode;
  onDelete: Function;
}

const CourseGoalItem: React.FC<Props> = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className={styles["goal-item"]} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
