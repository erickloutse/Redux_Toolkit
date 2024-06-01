import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../JS/Actions/taskActions";
import "../App.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt("Edit task description", task.description);
    if (newDescription) {
      dispatch(editTask({ ...task, description: newDescription }));
    }
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
        {task.description}
      </span>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;
