import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";

import styles from "./App.module.css";
import "./global.css";
import { TasksTable } from "./components/TasksTable";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTask />

        <main>
          <TasksTable />
        </main>
      </div>
    </div>
  );
}
