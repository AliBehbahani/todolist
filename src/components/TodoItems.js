import { observer } from "mobx-react";
import DeleteButton from "./buttons/DeleteButton";
import DoneButton from "./buttons/TaskFinished";
const TodoItems = (props) => {
  return (
    <div>
      <ul class="list-group" taskId={props.task.id}>
        <li class="list-group-item">{props.task.name}</li>
        <DoneButton task={props.task} />
        <DeleteButton taskId={props.task.id} />
      </ul>
    </div>
  );
};

export default observer(TodoItems);
// finishId={props.finish.id}
