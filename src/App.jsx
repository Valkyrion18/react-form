import { TaskLists } from "./components/TaskLists";
import { TaskForm } from "./components/TaskForm";

export const App = () => {
  return (
    <main className="bg-zinc-500 h-screen">
      <div className="container mx-auto">
        <TaskForm />
        <TaskLists />
      </div>
    </main>
  );
};

export default App;
