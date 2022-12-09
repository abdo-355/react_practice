import { useState, useEffect } from "react";

import { ITask } from "./types/types";

import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_DB}/tasks.json`
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const loadedTasks: ITask[] = Object.keys(data).map((taskId) => {
        return {
          id: taskId,
          text: data[taskId].text,
        };
      });

      setTasks(loadedTasks);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task: ITask) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
};

export default App;
