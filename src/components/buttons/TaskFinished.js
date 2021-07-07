import todoStore from "../../stores/todoStore";
import { useState } from "react";
const DoneButton = (props) => {
  // well focus on the value, if the value is true it will go to another list but we wont show it
  const [value, setValue] = useState(false);
  const handleChange = (event) => {
    event.preventDefault();
    setValue(false);
    if (value === false) {
      todoStore.taskUnfinished(props.taskId);
      todoStore.taskFinished(props.taskId);
      console.log(value);
    }
  };

  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="value"
          id="flexCheckDefault"
          onClick={handleChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default DoneButton;
