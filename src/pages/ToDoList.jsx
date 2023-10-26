import { useContext, useReducer, useState } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import taskReducer from "../reducers/TaskReducer";
import initialTasks from "../data/initialTasks";
import { dispatchContext } from "../context/dispatchContext";

const ToDoList = () => {

  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <dispatchContext.Provider value={dispatch}>
      <div className="mt-20">
        <h1 className="text-6xl font-bold mb-8">To-Do List</h1>
        <AddTask />
        {tasks.length == 0 && (
          <h3 className="text-gray-400 italic mt-12">
            No tasks left, you're on track!
          </h3>
        )}
        <TaskList tasks={tasks} />
      </div>
    </dispatchContext.Provider>
  );
};

export default ToDoList;
