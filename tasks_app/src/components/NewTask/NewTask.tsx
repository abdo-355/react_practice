import { useState } from "react";

import { ITask } from "../../types/types";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

interface Props {
  onAddTask: (task: ITask) => void;
}

const NewTask: React.FC<Props> = ({ onAddTask }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const taskHandler = async (taskText: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_DB}/tasks.json`,
        {
          method: "POST",
          body: JSON.stringify({ text: taskText }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const generatedId = data.name;

      const createdTask = { id: generatedId, text: taskText };

      onAddTask(createdTask);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={taskHandler} loading={isLoading} />
      {error && <p>{error.message}</p>}
    </Section>
  );
};

export default NewTask;
