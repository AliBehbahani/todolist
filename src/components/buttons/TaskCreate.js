import todoStore from "../../stores/todoStore";
import { useState } from "react";
const TaskCreate = () => {
  const [task, setTask] = useState({ name: "", finished: false });
  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    todoStore.taskCreate(task);
    console.log(task);
  };

  return (
    <div>
      <form class="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          class="form-control"
          placeholder="Your Task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          name="name"
          value={task.name}
          required="required"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskCreate;
