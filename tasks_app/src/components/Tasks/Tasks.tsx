import styles from "./Tasks.module.css";

import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import { ITask } from "../../types/types";

interface Props {
  items: ITask[];
  loading: boolean;
  error: Error | null;
  onFetch: () => Promise<void>;
}

const Tasks: React.FC<Props> = ({ items, loading, error, onFetch }) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul>
        {items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content: JSX.Element | string = taskList;

  if (error) {
    content = <button onClick={onFetch}>Try again</button>;
  }

  if (loading) {
    content = "Loading tasks...";
  }

  return (
    <Section>
      <div className={styles.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
