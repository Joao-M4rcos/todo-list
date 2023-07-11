import styles from "./Task.module.css";
import { Check, Trash } from "phosphor-react";

export interface TaskType {
  id: string;
  done: boolean;
  content: string;
}

interface TaskProps {
  task: TaskType;
}

export function Task({ task }: TaskProps) {
  return (
    <tr className={styles.task + " " + (task.done ? styles.taskDone : "")}>
      <td>
        {task.done && <Check size={18} weight="bold" />}
        {!task.done && <button></button>}
      </td>
      <td>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </td>
      <td>
        <Trash size={30} />
      </td>
    </tr>
  );
}
