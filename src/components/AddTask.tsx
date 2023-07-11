import styles from "./AddTask.module.css";
import { PlusCircle } from "phosphor-react";

export function AddTask() {
  return (
    <div className={styles.addTask}>
      <input type="text" placeholder="Add a new task" />
      <button type="submit">
        Add <PlusCircle size={20} />
      </button>
    </div>
  );
}
