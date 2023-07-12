import { ChangeEvent, FormEvent, InvalidEvent } from "react";
import { PlusCircle } from "phosphor-react";
import { TaskType } from "./Task";
import { v4 as uuidv4 } from "uuid";

import styles from "./AddTask.module.css";

interface AddTaskProps {
  newTaskText: string;
  onSetNewTaskText: (task: string) => void;
  tasks: TaskType[];
  onSetTasks: (tasks: TaskType[]) => void;
}

export function AddTask({
  newTaskText,
  onSetNewTaskText,
  tasks,
  onSetTasks,
}: AddTaskProps) {
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    // The useState creates a new array in this case every time that he is called
    // That means that he doesn't change values inside of itself.
    onSetTasks([...tasks, { id: uuidv4(), done: false, content: newTaskText }]);
    onSetNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    // Sets the displayed text when invalid to empty cause now the field has value so it's valid
    // event.target.setCustomValidity("");
    onSetNewTaskText(event.target.value);
  }

  // If changing the language is necessary, use it
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTaskEmpty = newTaskText.length == 0;

  return (
    <form onSubmit={handleCreateNewTask} className={styles.addTask}>
      <input
        name="task"
        placeholder="Add a new task"
        value={newTaskText}
        onChange={handleNewTaskChange}
        required
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Add <PlusCircle size={20} />
      </button>
    </form>
  );
}
