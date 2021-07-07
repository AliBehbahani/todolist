import { makeAutoObservable } from "mobx";

class TodoStore {
  tasks = [];
  finished = [];

  constructor() {
    makeAutoObservable(this);
  }

  taskCreate = (task, finish) => {
    this.tasks.push(task);
    task.id = this.tasks.length + 1;
  };
  taskDelete = (taskId) => {
    const shownTasks = this.tasks.filter((task) => task.id !== taskId);
    this.tasks = shownTasks;
  };
  taskUnfinished = (taskId) => {
    const unfinishedTasks = this.tasks.filter((task) => task.id !== taskId);
    this.tasks = unfinishedTasks;
  };
  taskFinished = (finishId) => {
    const finishedTasks = this.tasks.filter((task) => task.id === finishId);
    this.finished = finishedTasks;
  };
}
const todoStore = new TodoStore();
export default todoStore;
