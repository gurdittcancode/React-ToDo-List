import { v4 as uuidv4 } from "uuid";

function taskReducer(tasks, action) {
  switch (action.type) {
    case "ADD": {
      const nayaTask = { id: uuidv4(), task: action.payload };
      return [...tasks, nayaTask];
    }

    case "DELETE": {
      return tasks.filter((task) => task.id != action.payload);
    }

    case "EDIT": {
      let index = tasks.findIndex((t) => t.id === action.payload.id);
      let newTasks = [...tasks];
      newTasks.splice(index, 1, action.payload);
      return newTasks;
    }
  }
}

export default taskReducer;
