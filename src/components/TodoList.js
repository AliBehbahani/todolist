import TodoItems from "./TodoItems";
import TaskCreate from "./buttons/TaskCreate";
import todoStore from "../stores/todoStore";
import { observer } from "mobx-react";

const todoList = () => {
  const task = todoStore.tasks;
  const finished = todoStore.finished;

  const viewTask = task.map((task) => <TodoItems task={task} />);
  const viewTask2 = finished.map((task, finish) => (
    <TodoItems task={task} finish={finish} />
  ));
  return (
    <div>
      <TaskCreate />
      <div>
        <h1>To Do List</h1>
        <div>{viewTask}</div>
        <h2>test</h2>
        <div> {viewTask2}</div>
      </div>
    </div>
  );
};

export default observer(todoList);
