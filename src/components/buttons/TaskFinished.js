const DoneButton = (props) => {
  const handleChange = () => {
    props.task.finished = true;
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
        />
      </div>
    </div>
  );
};

export default DoneButton;
