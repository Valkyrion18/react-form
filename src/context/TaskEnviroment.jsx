import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []); 

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskID) => {
    setTasks(tasks.filter((task) => task.id !== taskID));
  };
  return (
    <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask
    }}>{props.children}</TaskContext.Provider>
  );
};
