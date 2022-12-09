import { ITask } from "../../types/types";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

import useRequest from "../../hooks/useRequest";

interface Props {
  onAddTask: (task: ITask) => void;
}

const NewTask: React.FC<Props> = ({ onAddTask }) => {
  const { isLoading, error, sendRequest: postTask } = useRequest();

  const createTask = (taskText: string, taskData: any) => {
    const generatedId = taskData.name;

    const createdTask = { id: generatedId, text: taskText };

    onAddTask(createdTask);
  };

  const taskHandler = (taskText: string) => {
    postTask(
      {
        url: `${process.env.REACT_APP_FIREBASE_DB}/tasks.json`,
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={taskHandler} loading={isLoading} />
      {error && <p>{error.message}</p>}
    </Section>
  );
};

export default NewTask;
