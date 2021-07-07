import TodoItems from "./TodoItems";
import TaskCreate from "./buttons/TaskCreate";
import todoStore from "../stores/todoStore";
import { observer } from "mobx-react";

const todoList = () => {
  const task = todoStore.tasks;

  const viewTask = todoStore
    .filtered()
    .map((task) => <TodoItems task={task} />);

  return (
    <div>
      <TaskCreate />
      <div>
        <h1>To Do List</h1>
        <div>{viewTask}</div>
      </div>
    </div>
  );
};

export default observer(todoList);
