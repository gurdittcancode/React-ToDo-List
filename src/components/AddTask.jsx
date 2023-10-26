import { useContext, useState } from "react";
import { dispatchContext } from "../context/dispatchContext";

import {BiListPlus} from "react-icons/bi";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useContext(dispatchContext);

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function onSubmit(e) {
    if (newTask.length > 1) {
      e.preventDefault();
      dispatch({type: "ADD", payload: newTask})
      setNewTask(""); //reset to default state
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex items-center">
        <input
          type="text"
          className="p-2 rounded-xl m-2"
          placeholder="Enter new task"
          name="task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="border border-solid border-white p-1"
          disabled={newTask.length <= 2}
        >
          <BiListPlus className={`text-4xl ${newTask.length <= 2 ? "text-gray-300" : ""}`}/>
        </button>
      </form>
    </div>
  );
};

export default AddTask;
