import styles from "./TasksTable.module.css";
import { Task, TaskType } from "./Task";
import { v4 as uuidv4 } from "uuid";
import clipboardIcon from "../assets/clipboard-icon.svg";

const tasks: TaskType[] = [
  {
    id: uuidv4(),
    done: false,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
  },
  {
    id: uuidv4(),
    done: false,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
  },
  {
    id: uuidv4(),
    done: false,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
  },
  {
    id: uuidv4(),
    done: true,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
  },
  {
    id: uuidv4(),
    done: true,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper Duis vel sed fames integer.",
  },
];

export function TasksTable() {
  return (
    <table className={styles.tasksTable}>
      <thead>
        <tr>
          <th>Added tasks</th>
          <td>5</td>
        </tr>
        <tr>
          <th>Concluded</th>
          <td>2 de 5</td>
        </tr>
      </thead>
      <tbody>
        {tasks.length ? (
          tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })
        ) : (
          <tr className={styles.noTask}>
            <td>
              <img src={clipboardIcon} alt=" Clipboard Icon" />
            </td>
            <td>
              <strong>You don't have any added tasks yet</strong>
            </td>
            <td>
              <span>Add tasks and manage your to-do items</span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
