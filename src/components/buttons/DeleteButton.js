import todoStore from "../../stores/todoStore";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    todoStore.taskDelete(props.taskId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>DELETE</DeleteButtonStyled>;
};

export default DeleteButton;
