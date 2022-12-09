import { useState, useEffect, useCallback } from "react";

import { ITask } from "./types/types";

import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useRequest from "./hooks/useRequest";

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const transformTasks = useCallback((tasksObj: any) => {
    const loadedTasks: ITask[] = Object.keys(tasksObj).map((taskId) => {
      return {
        id: taskId,
        text: tasksObj[taskId].text,
      };
    });

    setTasks(loadedTasks);
  }, []);

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useRequest(transformTasks);

  useEffect(() => {
    fetchTasks({ url: `${process.env.REACT_APP_FIREBASE_DB}/tasks.json` });
  }, [fetchTasks]);

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
        onFetch={() =>
          fetchTasks({ url: `${process.env.REACT_APP_FIREBASE_DB}/tasks.json` })
        }
      />
    </>
  );
};

export default App;
