import { makeAutoObservable } from "mobx";
import axios from "axios";
class TodoStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }
  fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:7000");
      this.tasks = res.data;
    } catch (error) {
      console.error("fetchTasks:", error);
    }
  };

  taskCreate = async (newTask) => {
    try {
      const response = await axios.post("http://localhost:7000", newTask);
      this.tasks.push(response.data);
    } catch (error) {
      console.error("createTasks:", error);
    }
  };
  taskDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:7000/${taskId}`);
      const shownTasks = this.tasks.filter((task) => task.id !== taskId);
      this.tasks = shownTasks;
    } catch (error) {
      console.error("deleteTasks:", error);
    }
  };

  filtered = () => {
    const filterList = this.tasks.filter((task) => task.finished === false);
    return filterList;
  };
}
const todoStore = new TodoStore();
export default todoStore;
