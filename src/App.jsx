import { TaskLists } from "./components/TaskLists";
import { TaskForm } from "./components/TaskForm";
import { useEffect } from "react";

export const App = () => {
  return (
    <main className="bg-zinc-500 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskLists />
      </div>
    </main>
  );
};

export default App;
