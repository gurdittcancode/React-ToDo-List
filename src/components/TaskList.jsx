import { useContext } from "react";
import Task from "./Task";
import { dispatchContext } from "../context/dispatchContext";

const TaskList = ({ tasks }) => {
  function generateRandomId() {
    return Math.floor(Math.random() * 1000 + 100);
  }

  const dispatch = useContext(dispatchContext);

  return (
    <ul className="list-disc">
      {tasks.map((task) => (
        <Task task={task} key={generateRandomId()} />
      ))}
    </ul>
  );
};

export default TaskList;
