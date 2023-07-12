import { Check, Trash } from "phosphor-react";

import styles from "./Task.module.css";

export interface TaskType {
  id: string;
  done: boolean;
  content: string;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (task: string) => void;
  onTaskStatusChange: (task: TaskType) => void;
}

export function Task({ task, onDeleteTask, onTaskStatusChange }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleTaskStatusChange() {
    onTaskStatusChange(task);
  }

  return (
    <tr className={styles.task + " " + (task.done ? styles.taskDone : "")}>
      <td>
        {task.done ? (
          <button className={styles.doneBtn} onClick={handleTaskStatusChange}>
            <Check size={18} weight="bold" />
          </button>
        ) : (
          <button
            className={styles.notDoneBtn}
            onClick={handleTaskStatusChange}
          ></button>
        )}
      </td>
      <td>{task.content}</td>
      <td>
        <button className={styles.deleteBtn} onClick={handleDeleteTask}>
          <Trash size={18} />
        </button>
      </td>
    </tr>
  );
}
