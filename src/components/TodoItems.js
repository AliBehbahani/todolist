import { observer } from "mobx-react";
import DeleteButton from "./buttons/DeleteButton";
import DoneButton from "./buttons/TaskFinished";
const TodoItems = (props) => {
  return (
    <div>
      <ul class="list-group">
        <li class="list-group-item">{props.task.name}</li>
        <DoneButton taskId={props.task.id} finishId={props.finish.id} />
        <DeleteButton taskId={props.task.id} />
      </ul>
    </div>
  );
};

export default observer(TodoItems);
