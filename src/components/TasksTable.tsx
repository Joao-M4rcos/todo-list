import { Task, TaskType } from "./Task";
import clipboardIcon from "../assets/clipboard-icon.svg";

import styles from "./TasksTable.module.css";

interface TaskTableProps {
  tasks: TaskType[];
  onSetTasks: (tasks: TaskType[]) => void;
}

export function TasksTable({ tasks, onSetTasks }: TaskTableProps) {
  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task.id != taskToDelete;
    });

    onSetTasks(tasksWithoutDeleteOne);
  }

  function changeTaskStatus(taskToChangeStatus: TaskType) {
    const newStatus = !taskToChangeStatus.done;

    tasks.map((task) => {
      if (task.id == taskToChangeStatus.id) task.done = newStatus;
    });

    onSetTasks([...tasks]);
  }

  // It counts the tasks already concluded to be displayed
  const concludedTasks = tasks.reduce(
    (concludedTasks: number, task: TaskType) => {
      if (task.done) concludedTasks++;
      return concludedTasks;
    },
    0
  );

  return (
    <table className={styles.tasksTable}>
      <thead>
        <tr>
          <th>Added tasks</th>
          <td>{tasks.length}</td>
        </tr>
        <tr>
          <th>Concluded</th>
          <td>
            {concludedTasks} of {tasks.length}
          </td>
        </tr>
      </thead>
      <tbody>
        {tasks.length ? (
          [...tasks].reverse().map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={deleteTask}
                onTaskStatusChange={changeTaskStatus}
              />
            );
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
