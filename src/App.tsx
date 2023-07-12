import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TasksTable } from "./components/TasksTable";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import styles from "./App.module.css";
import "./global.css";

// const tasks: TaskType[] = [
//   {
//     id: uuidv4(),
//     done: false,
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
//   },
//   {
//     id: uuidv4(),
//     done: false,
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
//   },
//   {
//     id: uuidv4(),
//     done: false,
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
//   },
//   {
//     id: uuidv4(),
//     done: true,
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
//   },
//   {
//     id: uuidv4(),
//     done: true,
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
//   },
// ];

export function App() {
  // The state that informs the array of tasks
  // It's used to add a new task or remove an existing one
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      done: false,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
      id: uuidv4(),
      done: true,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
  ]);

  // The state to get what the user has typed on the input
  // *TIP* The 'done' attribute is gonna use a similar process *KINDA WRONG the process was a bit diferent*
  // No need to use a new state, just the state of the 'tasks' itself is more than enough
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTask
          newTaskText={newTaskText}
          onSetNewTaskText={setNewTaskText}
          tasks={tasks}
          onSetTasks={setTasks}
        />

        <main>
          <TasksTable tasks={tasks} onSetTasks={setTasks} />
        </main>
      </div>
    </div>
  );
}
