import { useContext, useState } from "react";
import { dispatchContext } from "../context/dispatchContext";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheckCircle,
} from "react-icons/ai";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.task);
  const dispatch = useContext(dispatchContext);

  function handleChange(e) {
    setUpdatedTask(e.target.value);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const newTask = { id: task.id, task: updatedTask };
    dispatch({ type: "EDIT", payload: newTask });
    setIsEditing(false);
  }

  return (
    <li className="my-5">
      {isEditing ? (
        <form
          onSubmit={handleEditSubmit}
          className="flex items-center justify-between max-w-[450px]"
        >
          <input
            type="text"
            value={updatedTask}
            className="border border-black rounded-lg"
            onChange={handleChange}
          />
          <button>
            <AiOutlineCheckCircle className="text-4xl" />
          </button>
        </form>
      ) : (
        <div className="flex items-center gap-6 max-w-fit">
          {task.task}
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(true)}>
              <AiOutlineEdit />
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: task.id })}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
